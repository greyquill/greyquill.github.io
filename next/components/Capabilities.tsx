/**
 * Six platform capabilities, shown as a dark band. Used on the
 * homepage between Method and Platform, so the visitor sees what every
 * product on the platform shares before clicking into individual ones.
 *
 * Wording is in our voice (audit / MRM / evidence / regulator), not
 * generic SaaS pillars.
 */

const PILLARS = [
  {
    h: 'Master data, lineage, and quality',
    p: 'Every record unified across systems with full provenance. When the auditor asks how a number got there, the answer is one query, not three weeks.',
  },
  {
    h: 'Real-time data freshness',
    p: 'Data refreshes at the speed your decisions need. Drift detected before it lands in production, not after the board sees the report.',
  },
  {
    h: 'Governed AI activation',
    p: 'Pilots that pass model risk management on the first review, not the third. Use cases that survive a regulator visit. AI that keeps shipping instead of getting paused.',
  },
  {
    h: 'Audit evidence at runtime',
    p: 'Evidence packs assembled while the agent runs, not stitched together at month-end. The audit answer is built into the system.',
  },
  {
    h: 'Modular architecture',
    p: 'Add a new domain, a new agent, a new jurisdiction. The platform extends to absorb it. No re-platforming project, no migration team.',
  },
  {
    h: 'Built on IBM, owned by you',
    p: 'The platform stands on enterprise-grade IBM foundations. Your data, your governance configuration, and your agent definitions are yours to take. No vendor capture, by design.',
  },
];

export default function Capabilities() {
  return (
    <section className="bg-brand-ink text-white py-14 md:py-20 relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/30 blur-[120px]" />
      <div aria-hidden className="absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-brand-blue/20 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/90 mb-4">
            <span className="h-px w-6 bg-brand-blue/60" aria-hidden />
            Capabilities
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
            Six platform capabilities, <br className="hidden md:block" />
            <span className="text-brand-blue">built in by default.</span>
          </h2>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl">
            Shared across every product on the platform. Available on day one, not
            behind an upgrade. The bar every Greyquill engagement ships to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {PILLARS.map((pillar) => (
            <div key={pillar.h} className="bg-brand-ink p-7 md:p-8 hover:bg-brand-ink/95 transition-colors">
              <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-2.5">
                {pillar.h}
              </h3>
              <p className="text-white/70 leading-relaxed text-[15px]">{pillar.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
