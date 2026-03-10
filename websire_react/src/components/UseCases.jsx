import React from 'react';
import { FaCloudUploadAlt, FaCubes, FaRocket, FaFlask, FaSyncAlt, FaCogs, FaDownload } from 'react-icons/fa';

const useCases = [
  {
    icon: <FaSyncAlt />,
    title: "Cloud Migration",
    description: "Seamlessly move workloads across cloud providers with zero downtime and full data integrity."
  },
  {
    icon: <FaCubes />,
    title: "Modularising for Scale",
    description: "Break monoliths into scalable, independently deployable services ready for growth."
  },
  {
    icon: <FaRocket />,
    title: "New Feature Development",
    description: "Ship production-ready features that align with your roadmap and user expectations."
  },
  {
    icon: <FaFlask />,
    title: "Proof of Concept",
    description: "Validate feasibility fast—de-risk decisions before committing budget and resources."
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Legacy Modernisation",
    description: "Upgrade aging systems without disrupting operations or losing business logic."
  },
  {
    icon: <FaCogs />,
    title: "System Integration",
    description: "Connect platforms, APIs, and data sources into a unified, reliable ecosystem."
  }
];

const UseCases = () => {
  return (
    <section className="py-12" aria-labelledby="usecases-heading">
      {/* Header with download link */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">
            What We Deliver
          </p>
          <h2 id="usecases-heading" className="text-3xl md:text-4xl font-tektur text-gray-800 mb-2">
            Real Projects. Measurable Outcomes.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            From strategy through delivery—here's the kind of work our teams execute end-to-end.
          </p>
        </div>
        <a
          href="/greyquill-use-cases-2026.pdf"
          download
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0B4F88] border border-[#0B4F88]/20 hover:bg-[#0B4F88]/5 transition-colors flex-shrink-0 mt-2"
          aria-label="Download use cases PDF"
        >
          <FaDownload className="text-xs" />
          Download Use Cases
        </a>
      </div>

      {/* Use case cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="group rounded-xl p-5 transition-all duration-300 hover:shadow-md cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B4F88]/10 text-[#0B4F88] flex items-center justify-center text-lg group-hover:bg-[#0B4F88] group-hover:text-white transition-colors duration-300">
                {useCase.icon}
              </div>
              <div>
                <h3 className="font-tektur text-gray-800 mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile download link */}
      <div className="sm:hidden mt-6 text-center">
        <a
          href="/greyquill-use-cases-2026.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0B4F88] border border-[#0B4F88]/20 hover:bg-[#0B4F88]/5 transition-colors"
          aria-label="Download use cases PDF"
        >
          <FaDownload className="text-xs" />
          Download Use Cases PDF
        </a>
      </div>
    </section>
  );
};

export default UseCases;
