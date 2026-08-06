/**
 * Human-looking pointer motion.
 *
 * A linear tween between two points reads as a machine immediately. Real hand
 * movement has four properties this reproduces:
 *
 *  1. It curves. A wrist pivots, so the path bows to one side rather than
 *     running straight.
 *  2. Its duration scales with distance and target size, not linearly. That is
 *     Fitts's law, and it is why a short hop to a nearby word feels quick while
 *     crossing the screen takes noticeably longer.
 *  3. It accelerates away and decelerates in, usually overshooting slightly
 *     and settling back rather than stopping dead on the mark.
 *  4. It is never perfectly still. A held hand drifts by a pixel or two.
 *
 * Everything here is pure maths over a point, so the caller can drive a DOM
 * node, a canvas, or nothing at all.
 */

export type Pt = { x: number; y: number };

/** Fast out, slow in, with the long tail that makes arrival feel deliberate. */
function easeInOutQuint(t: number): number {
  return t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2;
}

function quadratic(p0: Pt, c: Pt, p1: Pt, t: number): Pt {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y,
  };
}

/**
 * Movement time for a distance and target width, after Fitts.
 *
 * Clamped at both ends: below ~220ms the motion is too fast to follow, and
 * above ~1.5s a visitor starts to feel they are waiting on an animation.
 */
export function moveDuration(distance: number, targetWidth = 120): number {
  const index = Math.log2(distance / Math.max(targetWidth, 24) + 1);
  return Math.min(Math.max(240 + 190 * index, 260), 1500);
}

/**
 * Build the curved path for a move.
 *
 * The control point sits perpendicular to the straight line, offset by a
 * fraction of the distance. The side alternates with a seeded flip so
 * consecutive moves do not all bow the same way, which would itself look
 * mechanical.
 */
export function arcControl(from: Pt, to: Pt, flip: boolean): Pt {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  // Perpendicular unit vector.
  const nx = -dy / dist;
  const ny = dx / dist;
  // Bow more on long journeys, barely at all on short ones.
  const bow = Math.min(dist * 0.18, 90) * (flip ? 1 : -1);
  return { x: (from.x + to.x) / 2 + nx * bow, y: (from.y + to.y) / 2 + ny * bow };
}

/** Sub-pixel tremor, so a "resting" cursor is never frozen. */
export function tremor(elapsed: number): Pt {
  return {
    x: Math.sin(elapsed / 420) * 0.9 + Math.sin(elapsed / 137) * 0.4,
    y: Math.cos(elapsed / 380) * 0.9 + Math.cos(elapsed / 151) * 0.4,
  };
}

export type MoveOptions = {
  /** Width of the thing being aimed at, used for the timing law. */
  targetWidth?: number;
  /** Overshoot past the target and settle back. Off for reading sweeps. */
  settle?: boolean;
  /** Multiplier on the computed duration. */
  scale?: number;
};

/**
 * Animate a point from `from` to `to`, calling `onFrame` each tick.
 *
 * @returns a promise resolving when the move finishes, and a cancel function.
 *          Cancelling settles nothing: the caller owns the final position.
 */
export function movePoint(
  from: Pt,
  to: Pt,
  onFrame: (p: Pt) => void,
  options: MoveOptions = {},
): { done: Promise<void>; cancel: () => void } {
  const { targetWidth = 120, settle = true, scale = 1 } = options;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const duration = moveDuration(dist, targetWidth) * scale;
  const control = arcControl(from, to, (Math.round(to.x + to.y) & 1) === 0);

  let raf = 0;
  let cancelled = false;
  const start = performance.now();

  const done = new Promise<void>((resolve) => {
    const tick = (now: number) => {
      if (cancelled) return resolve();
      const raw = Math.min((now - start) / duration, 1);
      const eased = easeInOutQuint(raw);

      // Overshoot: push a little past the target through the last third, then
      // ease back. Amplitude shrinks with distance so short moves stay crisp.
      let progress = eased;
      if (settle && raw > 0.62) {
        const over = Math.min(dist * 0.012, 7);
        const phase = (raw - 0.62) / 0.38;
        progress = eased + (Math.sin(phase * Math.PI) * over) / Math.max(dist, 1);
      }

      const p = quadratic(from, control, to, progress);
      const shake = tremor(now - start);
      onFrame({ x: p.x + shake.x * (1 - raw), y: p.y + shake.y * (1 - raw) });

      if (raw < 1) raf = requestAnimationFrame(tick);
      else resolve();
    };
    raf = requestAnimationFrame(tick);
  });

  return {
    done,
    cancel: () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    },
  };
}

/** Hold still at a point, breathing slightly, for a duration. */
export function dwell(
  at: Pt,
  ms: number,
  onFrame: (p: Pt) => void,
): { done: Promise<void>; cancel: () => void } {
  let raf = 0;
  let cancelled = false;
  const start = performance.now();

  const done = new Promise<void>((resolve) => {
    const tick = (now: number) => {
      if (cancelled) return resolve();
      const elapsed = now - start;
      const shake = tremor(elapsed);
      onFrame({ x: at.x + shake.x, y: at.y + shake.y });
      if (elapsed < ms) raf = requestAnimationFrame(tick);
      else resolve();
    };
    raf = requestAnimationFrame(tick);
  });

  return {
    done,
    cancel: () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    },
  };
}
