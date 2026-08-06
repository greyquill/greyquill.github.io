/**
 * Optional on-device generation.
 *
 * Everything else in this assistant sends the question to a hosted model. This
 * path sends it nowhere at all: the weights are downloaded
 * once into the browser cache and the answer is written on the visitor's
 * machine, offline thereafter.
 *
 * It exists as a demonstration rather than a default. The download is large
 * enough that nobody should pay it without asking, so nothing here loads until
 * the visitor explicitly opts in.
 *
 * The trade is honest and worth stating plainly in the UI: a 0.5B model is
 * weaker than the 1.5B we host, but with WebGPU it is usually faster, and the
 * question never leaves the device.
 */

import type { Turn } from './search';

/**
 * Fallback weights, used only when Chrome's built-in model is unavailable.
 *
 * Qwen3 rather than the Qwen2.5-1.5B we host: a generation newer at less than
 * half the download, which matters because every opting-in visitor pays it.
 * The 0.5B of the previous generation was not good enough (it collapsed into
 * "we not have any way of writing, we not have any way of writing..."), so the
 * decoding guards below stay in place regardless of which model runs.
 */
const MODEL = 'onnx-community/Qwen3-0.6B-ONNX';

/**
 * Measured, not estimated: onnx/model_q4f16.onnx is 569 MB. Devices without
 * shader-f16 fall back to q4 and pay more. The progress panel reports real
 * bytes; this is only for copy written before the first byte arrives.
 */
export const APPROX_DOWNLOAD_MB = 570;

const MAX_NEW_TOKENS = 60;

/**
 * Same rules as the hosted service, minus the style clauses that a post-filter
 * handles there. Kept short because a 0.5B follows fewer instructions well.
 */
const SYSTEM =
  "You are Greyquill's website assistant, speaking for the company as 'we'. " +
  'Answer in ONE short sentence using only the reference material. ' +
  'If it is not there, say we do not publish that and suggest a discovery call. ' +
  'Never invent names, numbers, prices or clients.';

export type LoadProgress = {
  /** 0 to 1, or null while the total size is still unknown. */
  ratio: number | null;
  /** What is happening, already phrased for a visitor. */
  label: string;
  /**
   * Seconds left, measured from observed throughput rather than guessed from
   * a fixed size. Null until enough bytes have moved to mean anything: a
   * countdown that starts wrong and corrects itself is worse than none.
   */
  etaSeconds: number | null;
};

export function isOnDeviceSupported(): boolean {
  if (typeof window === 'undefined') return false;
  // WebGPU is not strictly required, but WASM decoding of a 0.5B model is slow
  // enough that offering it would be a worse experience than the hosted path.
  // This is only the cheap synchronous check used to decide whether to show
  // the button at all; probeWebGpu below is what decides if it can actually run.
  return 'gpu' in navigator;
}

/**
 * Chrome's built-in on-device model (Gemini Nano), reached through the Prompt
 * API. Where it exists this is strictly better than anything we can ship: the
 * weights are already on the machine, so the download is zero bytes, and the
 * model is larger than a 0.6B we could reasonably ask a visitor to fetch.
 *
 * Availability is narrow and the API has changed shape more than once, so
 * every access is defensive and any failure simply falls through to our own
 * weights.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let builtinSession: any = null;

async function tryBuiltin(): Promise<boolean> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    // Feature detection, never user-agent sniffing. Chrome and Edge both
    // expose this (Edge behind the same globals with its own model), and any
    // browser shipping the WICG Prompt API later is picked up for free.
    // Safari is absent on purpose: WebKit exposes no on-device LLM to pages,
    // and Apple Intelligence is not reachable from web content at all.
    const api = w.LanguageModel ?? w.ai?.languageModel ?? w.ai?.assistant;
    if (!api?.create) return false;

    // `availability` is the current spelling, `capabilities` the older one.
    const status = api.availability
      ? await api.availability()
      : (await api.capabilities?.())?.available;
    // "downloadable" means Chrome would fetch it, which is not the zero-cost
    // win we are after, so only take it when it is already present.
    if (status !== 'available' && status !== 'readily') return false;

    builtinSession = await api.create({ initialPrompts: [{ role: 'system', content: SYSTEM }] });
    return !!builtinSession;
  } catch {
    return false;
  }
}

/**
 * Is a browser built-in model ready to use right now?
 *
 * Cheap and side-effect free, so the UI can call it on mount to decide whether
 * to offer "uses your browser's built-in AI" or "one-off download" before the
 * visitor commits to anything.
 */
export async function builtinAvailable(): Promise<boolean> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const api = w.LanguageModel ?? w.ai?.languageModel ?? w.ai?.assistant;
    if (!api?.create) return false;
    const status = api.availability
      ? await api.availability()
      : (await api.capabilities?.())?.available;
    return status === 'available' || status === 'readily';
  } catch {
    return false;
  }
}

/** Which engine answered, for the UI to report honestly. */
export function onDeviceEngine(): 'chrome' | 'weights' | null {
  if (builtinSession) return 'chrome';
  return ready ? 'weights' : null;
}

type GpuProbe = { ok: boolean; f16: boolean };

/**
 * Ask the GPU what it can actually do, before loading half a gigabyte at it.
 *
 * `'gpu' in navigator` only says the API exists. Requesting an adapter is what
 * proves a usable device is present, and `shader-f16` is what decides the
 * quantisation: asking for q4f16 on hardware without it took a tab down during
 * testing rather than throwing something catchable.
 */
async function probeWebGpu(): Promise<GpuProbe> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gpu = (navigator as any).gpu;
    if (!gpu?.requestAdapter) return { ok: false, f16: false };
    const adapter = await gpu.requestAdapter();
    if (!adapter) return { ok: false, f16: false };
    return { ok: true, f16: !!adapter.features?.has?.('shader-f16') };
  } catch {
    return { ok: false, f16: false };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let generatorPromise: Promise<any> | null = null;
let ready = false;

/**
 * Download state lives at module scope, not in a component.
 *
 * The whole point of this flow is that the visitor goes and reads something
 * while several hundred megabytes arrive. The component that started the
 * download is on the home page and unmounts the moment they do, so anything
 * held in its state disappears with it. Module scope survives client-side
 * navigation, which is why the links that offer somewhere to go MUST be
 * client-side: a full document load tears down this module and the fetch with
 * it, cancelling exactly the download we asked them to wait for.
 */
let current: LoadProgress | null = null;
const listeners = new Set<(p: LoadProgress | null) => void>();

function publish(p: LoadProgress | null) {
  current = p;
  listeners.forEach((fn) => fn(p));
}

/** Subscribe to download progress from anywhere in the app. */
export function subscribeOnDevice(fn: (p: LoadProgress | null) => void): () => void {
  listeners.add(fn);
  fn(current);
  return () => listeners.delete(fn);
}

export function onDeviceProgress(): LoadProgress | null {
  return current;
}

export function isOnDeviceReady(): boolean {
  return ready;
}

/** True once a download has begun, whether or not it has finished. */
export function isOnDeviceStarted(): boolean {
  return generatorPromise !== null;
}

/**
 * Download and initialise the model, reporting progress.
 *
 * Safe to call more than once: the same promise is returned, so a second
 * click cannot start a second download.
 */
export async function loadOnDevice(onProgress: (p: LoadProgress) => void = () => {}) {
  const unsubscribe = subscribeOnDevice((p) => p && onProgress(p));
  generatorPromise ??= (async () => {
    // Chrome's own model first: nothing to download, nothing to cache.
    publish({ ratio: null, label: 'Checking your browser', etaSeconds: null });
    if (await tryBuiltin()) {
      ready = true;
      publish({ ratio: 1, label: 'Ready, using your browser built-in model', etaSeconds: 0 });
      return null;
    }

    const gpu = await probeWebGpu();
    if (!gpu.ok) {
      throw new Error('WebGPU unavailable on this device');
    }

    const { pipeline, env } = await import('@huggingface/transformers');
    env.allowLocalModels = false;

    const seen = new Map<string, { loaded: number; total: number }>();
    const startedAt = performance.now();

    const generator = await pipeline('text-generation', MODEL, {
      // Half precision only where the adapter reports support for it.
      dtype: gpu.f16 ? 'q4f16' : 'q4',
      device: 'webgpu',
      // Files arrive in parallel, so progress is the sum across all of them
      // rather than whichever one reported last. Reporting a single file's
      // percentage makes the bar jump backwards, which reads as broken.
      progress_callback: (p: {
        status: string;
        file?: string;
        loaded?: number;
        total?: number;
      }) => {
        if (p.status === 'progress' && p.file && p.total) {
          seen.set(p.file, { loaded: p.loaded ?? 0, total: p.total });
          let loaded = 0;
          let total = 0;
          for (const v of seen.values()) {
            loaded += v.loaded;
            total += v.total;
          }
          const seconds = (performance.now() - startedAt) / 1000;
          const rate = seconds > 1.5 ? loaded / seconds : 0;
          publish({
            ratio: total > 0 ? Math.min(loaded / total, 1) : null,
            label: `${Math.round(loaded / 1e6)} of ${Math.round(total / 1e6)} MB`,
            etaSeconds: rate > 0 ? Math.max((total - loaded) / rate, 0) : null,
          });
        } else if (p.status === 'ready' || p.status === 'done') {
          publish({ ratio: 1, label: 'Starting the model', etaSeconds: 0 });
        }
      },
    });

    ready = true;
    publish({ ratio: 1, label: 'Ready, running on your device', etaSeconds: 0 });
    return generator;
  })();

  try {
    return await generatorPromise;
  } catch (err) {
    // Let a later attempt retry from scratch rather than returning the same
    // rejected promise forever.
    generatorPromise = null;
    ready = false;
    publish(null);
    throw err;
  } finally {
    unsubscribe();
  }
}

/**
 * Has the model fallen into a loop?
 *
 * Decoding penalties reduce this but do not eliminate it at 0.5B, and a
 * visitor must never be shown the result. Returning null here sends the caller
 * back to the hosted model, which is exactly what happens on any other
 * on-device failure.
 */
function isDegenerate(text: string): boolean {
  const words = text.toLowerCase().split(/\s+/);
  if (words.length < 12) return false;

  // Any four-word run appearing three or more times is a loop, not prose.
  const counts = new Map<string, number>();
  for (let i = 0; i + 4 <= words.length; i++) {
    const gram = words.slice(i, i + 4).join(' ');
    const n = (counts.get(gram) ?? 0) + 1;
    if (n >= 3) return true;
    counts.set(gram, n);
  }

  // Or very little vocabulary across a long answer.
  const unique = new Set(words).size;
  return words.length > 25 && unique / words.length < 0.4;
}

/**
 * Compose an answer locally.
 *
 * @returns the answer, or null if anything went wrong, in which case the
 *          caller should fall back to the hosted path exactly as it would for
 *          any other generation failure.
 */
export async function generateOnDevice(
  question: string,
  grounding: string[],
  history: Turn[] = [],
): Promise<string | null> {
  if (!grounding.length) return null;

  try {
    const generator = await loadOnDevice();
    const refs = grounding.map((c, i) => `[${i + 1}] ${c}`).join('\n');

    const messages = [
      { role: 'system', content: SYSTEM },
      ...history.slice(-2).map((t) => ({ role: t.role, content: t.text })),
      {
        role: 'user',
        content: `Reference material:\n${refs}\n\nQuestion: ${question}`,
      },
    ];

    // Chrome's model answers from the session; loadOnDevice returns null in
    // that case because there is no local pipeline to call.
    if (builtinSession) {
      const reply = await builtinSession.prompt(
        `Reference material:\n${refs}\n\nQuestion: ${question}`,
      );
      const out = String(reply ?? '').trim();
      return out.length >= 2 && !isDegenerate(out) ? out : null;
    }
    if (!generator) return null;

    const out = await generator(messages, {
      max_new_tokens: MAX_NEW_TOKENS,
      temperature: 0.3,
      top_p: 0.9,
      do_sample: true,
      return_full_text: false,
      // A 0.5B without these collapses into a loop: "we not have any way of
      // writing, we not have any way of writing...". Sampling alone does not
      // save it, so repetition is penalised and exact trigram repeats are
      // forbidden outright.
      repetition_penalty: 1.18,
      no_repeat_ngram_size: 3,
    });

    const text: string =
      out?.[0]?.generated_text?.at?.(-1)?.content ??
      out?.[0]?.generated_text ??
      '';
    const trimmed = String(text).trim();
    if (trimmed.length < 2 || isDegenerate(trimmed)) return null;
    return trimmed;
  } catch {
    return null;
  }
}
