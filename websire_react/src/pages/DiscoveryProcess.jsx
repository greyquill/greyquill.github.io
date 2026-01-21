import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLightbulb, FaUsers, FaBrain, FaSearch, FaLaptopCode, FaFileAlt, FaRocket } from 'react-icons/fa';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const DiscoveryProcess = () => {
  const phases = [
    {
      number: 1,
      name: "Illuminate",
      icon: <FaLightbulb className="text-2xl" />,
      tagline: "Understand your world",
      description: "We map your business context, goals, and challenges. No assumptions—just deep understanding of what success looks like for you.",
      inputs: [
        "High-level business goals and pain points",
        "Existing market insights or preliminary ideas",
        "Stakeholder list and available documentation"
      ],
      outputs: [
        "Business Context Map outlining objectives and challenges",
        "Alignment on key outcomes and success criteria",
        "Preliminary roadmap and engagement plan"
      ],
      duration: "Week 1"
    },
    {
      number: 2,
      name: "Interview",
      icon: <FaUsers className="text-2xl" />,
      tagline: "Hear every voice",
      description: "We conduct structured interviews with key stakeholders to capture needs, pain points, and aspirations from every perspective that matters.",
      inputs: [
        "Participation from key stakeholders (executives, product owners, end users)",
        "Existing process documents, system reports, and business metrics"
      ],
      outputs: [
        "Consolidated list of business needs and user pain points",
        "Draft user personas and process maps",
        "Initial set of requirements for further analysis"
      ],
      duration: "Week 1-2"
    },
    {
      number: 3,
      name: "Ideate",
      icon: <FaBrain className="text-2xl" />,
      tagline: "Explore possibilities",
      description: "Collaborative workshops where we brainstorm solutions, challenge assumptions, and identify the approaches most likely to succeed.",
      inputs: [
        "Draft requirements and user personas from interviews",
        "Market research findings and competitor analysis insights"
      ],
      outputs: [
        "Refined and validated Business Requirements Document (BRD)",
        "Detailed use cases, process flow diagrams, and feature prioritization",
        "Stakeholder consensus and common language for success"
      ],
      duration: "Week 2"
    },
    {
      number: 4,
      name: "Investigate",
      icon: <FaSearch className="text-2xl" />,
      tagline: "Validate feasibility",
      description: "Technical deep-dive to assess feasibility, identify risks, and evaluate technology options against your constraints and goals.",
      inputs: [
        "Finalized BRD and workshop outcomes",
        "Client's current technical environment details and constraints",
        "Industry standards and risk assessment data"
      ],
      outputs: [
        "Technical Feasibility Report with recommended technology stacks",
        "Risk assessment and mitigation plan",
        "High-level System Architecture document"
      ],
      duration: "Week 2-3"
    },
    {
      number: 5,
      name: "Illustrate",
      icon: <FaLaptopCode className="text-2xl" />,
      tagline: "Show, don't tell",
      description: "When appropriate, we build a working prototype to validate critical assumptions and give you something tangible to react to.",
      inputs: [
        "Refined requirements and technical analysis outcomes",
        "Key scenarios and prioritized features for validation"
      ],
      outputs: [
        "Working prototype or POC demo illustrating critical features",
        "User feedback and validation of technical approach",
        "Clear demonstration of concept viability to de-risk the project"
      ],
      duration: "Week 3-4",
      optional: true
    },
    {
      number: 6,
      name: "Integrate",
      icon: <FaFileAlt className="text-2xl" />,
      tagline: "Blueprint for success",
      description: "Everything comes together in comprehensive documentation: requirements, architecture, timeline, and budget—with no surprises.",
      inputs: [
        "Combined findings from business and technical assessments",
        "POC feedback (if applicable) and stakeholder approvals"
      ],
      outputs: [
        "Full Project Requirements Document (PRD) with functional and non-functional needs",
        "Detailed Project Roadmap with milestones, estimates, and budget",
        "System design documents including UI/UX wireframes and technical specifications"
      ],
      duration: "Week 4"
    },
    {
      number: 7,
      name: "Initiate",
      icon: <FaRocket className="text-2xl" />,
      tagline: "Launch with confidence",
      description: "Final review, sign-off, and project kickoff. You'll have absolute clarity on what we're building, why, and how.",
      inputs: [
        "All finalized documentation (BRD, PRD, Technical Report, Roadmap)",
        "Feedback from discovery sessions and POC outcomes"
      ],
      outputs: [
        "Comprehensive presentation of project vision, solution strategy, and roadmap",
        "Final client approval and sign-off to proceed to development",
        "Agreed plan for continuous communication and change management"
      ],
      duration: "Week 4"
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>The Greyquill Method™ - Our Discovery Process | Greyquill Software</title>
        <meta name="description" content="Learn about The Greyquill Method™ - our 7-phase discovery process that eliminates uncertainty before development begins. Illuminate, Interview, Ideate, Investigate, Illustrate, Integrate, Initiate." />
        <link rel="canonical" href="https://greyquill.io/discovery-process" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Proprietary Framework</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          The Greyquill Method<sup className="text-lg">™</sup>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A rigorous 7-phase discovery process that guarantees clarity on requirements, feasibility,
          and roadmap before a single line of code is written.
        </p>
      </header>

      {/* Why This Matters */}
      <section className="bg-[#0B4F88]/10 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-tektur text-gray-800 mb-3">Why This Matters</h2>
        <p className="text-gray-600 leading-relaxed">
          70% of software projects fail due to unclear requirements—not bad coding. The Greyquill Method™
          eliminates this risk by ensuring complete alignment between your business needs and our technical
          approach before development begins. Every phase delivers concrete outputs that build toward a
          comprehensive project blueprint.
        </p>
      </section>

      {/* Phases */}
      <section className="space-y-8">
        {phases.map((phase) => (
          <div key={phase.number} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Phase Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center font-bold text-lg">
                  {phase.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#0B4F88]">{phase.icon}</span>
                    <h3 className="text-2xl font-tektur text-gray-800">{phase.name}</h3>
                    {phase.optional && (
                      <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        Optional
                      </span>
                    )}
                  </div>
                  <p className="text-[#0B4F88] italic">"{phase.tagline}"</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  {phase.duration}
                </div>
              </div>
            </div>

            {/* Phase Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">{phase.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="bg-[#0B4F88]/10 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-[#0B4F88] mb-3">What We Need</h4>
                  <ul className="space-y-2">
                    {phase.inputs.map((input, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-[#0B4F88] mt-1">•</span>
                        <span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {phase.outputs.map((output, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center rounded-xl p-8" style={{ background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)', boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)' }}>
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Start Your Discovery?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          The Greyquill Method™ typically takes 4 weeks and results in a comprehensive project blueprint
          with no surprises. Let's discuss how we can de-risk your next software investment.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default DiscoveryProcess;
