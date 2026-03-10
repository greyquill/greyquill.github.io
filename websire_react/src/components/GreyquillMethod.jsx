import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const phases = [
  {
    title: "Discover with Greyquill Method",
    description: "A system perfected over two decades to map the full scope of what needs to be built—before building begins."
  },
  {
    title: "Build Planning & Architecture",
    description: "Agile methodology with Scrum discipline. Resource plans, sprint structures, and technical architecture—all locked in upfront."
  },
  {
    title: "Test Harness First",
    description: "TDD from day one. Every feature is tested before it ships. AI thrives on this predictability—so do timelines."
  },
  {
    title: "Environments & Pipeline",
    description: "Dev, staging, and production environments provisioned early. CI/CD pipelines ready so your team can ship with confidence."
  },
  {
    title: "AI-Assisted Implementation",
    description: "Battle-tested AI agents working end-to-end across your application. Every feature is built incrementally and verified continuously."
  },
  {
    title: "Phased Delivery & Sign-off",
    description: "Features planned and delivered in agreed phases. You review, approve, and course-correct at every milestone—no surprises."
  },
  {
    title: "Performance & Security Testing",
    description: "A predefined framework for load testing, vulnerability scans, and compliance checks—baked into the process, not bolted on."
  },
  {
    title: "Documentation & Handover",
    description: "Documentation is continuous, not an afterthought. Final handover includes full knowledge transfer and warranty support."
  }
];

// SVG arrow component for the flow connections
const FlowArrow = ({ direction = 'right', className = '' }) => {
  const isRight = direction === 'right';
  const isDown = direction === 'down';

  if (isDown) {
    return (
      <div className={`flex justify-start ml-[calc(50%-1px)] ${className}`}>
        <svg width="20" height="36" viewBox="0 0 20 36" className="marching-ants-down">
          <line x1="10" y1="0" x2="10" y2="28" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
          <polygon points="4,28 10,36 16,28" fill="#0B4F88" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`hidden lg:flex items-center justify-center ${className}`}>
      <svg width="40" height="20" viewBox="0 0 40 20" className={isRight ? 'marching-ants-right' : 'marching-ants-left'}>
        {isRight ? (
          <>
            <line x1="0" y1="10" x2="32" y2="10" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="32,4 40,10 32,16" fill="#0B4F88" />
          </>
        ) : (
          <>
            <line x1="8" y1="10" x2="40" y2="10" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="8,4 0,10 8,16" fill="#0B4F88" />
          </>
        )}
      </svg>
    </div>
  );
};

const PhaseCard = ({ number, phase }) => (
  <div
    className="rounded-xl p-5 flex-1 min-w-0 transition-all duration-300 hover:shadow-md"
    style={{
      background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
      boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
    }}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-[#0B4F88] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
        {number}
      </div>
      <h3 className="font-tektur text-gray-800 text-sm leading-tight">{phase.title}</h3>
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{phase.description}</p>
  </div>
);

const GreyquillMethod = () => {
  return (
    <section className="py-12" aria-labelledby="method-heading">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">
          From Discovery to Delivery
        </p>
        <h2 id="method-heading" className="text-3xl md:text-4xl font-tektur text-gray-800 mb-4">
          How We Build Software That Ships
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Eight phases. End-to-end ownership. Every project follows this battle-tested framework—so you get predictability, not promises.
        </p>
      </div>

      {/* Flow Diagram */}
      <div className="space-y-3">
        {/* Row 1: Phases 1 → 2 → 3 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <PhaseCard number={1} phase={phases[0]} />
          <FlowArrow direction="right" />
          <PhaseCard number={2} phase={phases[1]} />
          <FlowArrow direction="right" />
          <PhaseCard number={3} phase={phases[2]} />
        </div>

        {/* Connector: Row 1 to Row 2 (right side going down) */}
        <div className="hidden lg:flex justify-end pr-[calc(16.67%-12px)]">
          <svg width="20" height="36" viewBox="0 0 20 36" className="marching-ants-down">
            <line x1="10" y1="0" x2="10" y2="28" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="4,28 10,36 16,28" fill="#0B4F88" />
          </svg>
        </div>

        {/* Mobile connectors */}
        <div className="lg:hidden flex justify-center">
          <svg width="20" height="36" viewBox="0 0 20 36" className="marching-ants-down">
            <line x1="10" y1="0" x2="10" y2="28" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="4,28 10,36 16,28" fill="#0B4F88" />
          </svg>
        </div>

        {/* Row 2: Phases 6 ← 5 ← 4 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <div className="order-3 lg:order-1 flex-1 min-w-0">
            <PhaseCard number={6} phase={phases[5]} />
          </div>
          <div className="order-2 lg:order-2 flex items-center">
            <FlowArrow direction="left" />
          </div>
          <div className="order-2 lg:order-3 flex-1 min-w-0">
            <PhaseCard number={5} phase={phases[4]} />
          </div>
          <div className="order-2 lg:order-4 flex items-center">
            <FlowArrow direction="left" />
          </div>
          <div className="order-1 lg:order-5 flex-1 min-w-0">
            <PhaseCard number={4} phase={phases[3]} />
          </div>
        </div>

        {/* Connector: Row 2 to Row 3 (left side going down) */}
        <div className="hidden lg:flex justify-start pl-[calc(16.67%-12px)]">
          <svg width="20" height="36" viewBox="0 0 20 36" className="marching-ants-down">
            <line x1="10" y1="0" x2="10" y2="28" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="4,28 10,36 16,28" fill="#0B4F88" />
          </svg>
        </div>

        {/* Mobile connectors */}
        <div className="lg:hidden flex justify-center">
          <svg width="20" height="36" viewBox="0 0 20 36" className="marching-ants-down">
            <line x1="10" y1="0" x2="10" y2="28" stroke="#0B4F88" strokeWidth="2" strokeDasharray="6 4" />
            <polygon points="4,28 10,36 16,28" fill="#0B4F88" />
          </svg>
        </div>

        {/* Row 3: Phases 7 → 8 */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          <PhaseCard number={7} phase={phases[6]} />
          <FlowArrow direction="right" />
          <PhaseCard number={8} phase={phases[7]} />
          {/* Empty space to balance the grid */}
          <div className="hidden lg:block flex-1" />
        </div>
      </div>

      {/* Link to Discovery Process */}
      <div className="mt-8 text-center">
        <Link
          to="/discovery-process"
          className="inline-flex items-center gap-2 text-[#0B4F88] hover:text-[#0a4577] font-medium"
        >
          See how the Greyquill Method powers Phase 1
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default GreyquillMethod;
