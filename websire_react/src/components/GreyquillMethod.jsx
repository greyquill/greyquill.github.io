import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaUsers, FaBrain, FaSearch, FaLaptopCode, FaFileAlt, FaRocket, FaBuilding, FaChartLine, FaGlobe, FaArrowRight } from 'react-icons/fa';

const GreyquillMethod = () => {
  const phases = [
    { number: 1, name: "Illuminate", icon: <FaLightbulb />, outcome: "Business Context Map" },
    { number: 2, name: "Interview", icon: <FaUsers />, outcome: "Stakeholder Needs Matrix" },
    { number: 3, name: "Ideate", icon: <FaBrain />, outcome: "Solution Options Analysis" },
    { number: 4, name: "Investigate", icon: <FaSearch />, outcome: "Technical Feasibility Report" },
    { number: 5, name: "Illustrate", icon: <FaLaptopCode />, outcome: "Working Prototype" },
    { number: 6, name: "Integrate", icon: <FaFileAlt />, outcome: "Complete Project Blueprint" },
    { number: 7, name: "Initiate", icon: <FaRocket />, outcome: "Signed Roadmap & Kickoff" }
  ];

  return (
    <section className="py-12" aria-labelledby="method-heading">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">
          Our Proprietary Framework
        </p>
        <h2 id="method-heading" className="text-3xl md:text-4xl font-tektur text-gray-800 mb-4">
          The Greyquill Method<sup className="text-lg">™</sup>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Seven phases designed to eliminate uncertainty before a single line of code is written.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Phases */}
        <div className="lg:w-2/3">
          {/* Phases with fading borders */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="space-y-3">
              {phases.map((phase, index) => (
                <div
                  key={phase.number}
                  className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-[#0B4F88]/5"
                  style={{
                    background: index === 0 ? 'rgba(11, 79, 136, 0.04)' : 'transparent'
                  }}
                >
                  {/* Phase Number */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0B4F88] text-white flex items-center justify-center text-sm font-bold">
                    {phase.number}
                  </div>

                  {/* Phase Info */}
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-[#0B4F88] text-lg">{phase.icon}</span>
                    <span className="font-tektur text-gray-800">{phase.name}</span>
                  </div>

                  {/* Outcome */}
                  <div className="hidden sm:block text-sm text-gray-500">
                    {phase.outcome}
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Discovery */}
            <div className="mt-6 pt-4 text-center" style={{ borderTop: '1px solid rgba(11, 79, 136, 0.1)' }}>
              <Link
                to="/discovery-process"
                className="inline-flex items-center gap-2 text-[#0B4F88] hover:text-[#0a4577] font-medium"
              >
                Explore the full process
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: ICP Box with translucent background */}
        <div className="lg:w-1/3">
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-xs mb-2">Who We Serve Best</p>
            <h3 className="text-xl font-tektur text-gray-800 mb-4">Our Ideal Partners</h3>

            {/* Primary ICP */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#0B4F88] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  Primary
                </span>
                <span className="text-sm font-semibold text-gray-700">Scaling Mid-Market</span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaBuilding className="text-[#0B4F88] flex-shrink-0" />
                  <span>100 - 1,000 employees</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaChartLine className="text-[#0B4F88] flex-shrink-0" />
                  <span>$10M - $200M revenue</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaGlobe className="text-[#0B4F88] flex-shrink-0" />
                  <span>US, UK, EU, ME, APAC, ANZ</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Organizations outgrowing their current systems, needing a partner who values partnership over procurement.
              </p>
            </div>

            {/* Secondary ICP */}
            <div className="pt-4" style={{ borderTop: '1px solid rgba(11, 79, 136, 0.1)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  Also Great
                </span>
                <span className="text-sm font-semibold text-gray-700">Enterprise Innovation</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Autonomous teams within $1B+ companies running digital transformation who need agility.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(11, 79, 136, 0.1)' }}>
              <p className="text-xs text-gray-500 text-center">
                Not sure if you're a fit? <span className="text-[#0B4F88] font-medium">Let's find out together.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreyquillMethod;
