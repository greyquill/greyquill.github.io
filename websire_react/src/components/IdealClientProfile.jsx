import React from 'react';
import { FaBuilding, FaChartLine, FaIndustry, FaUserTie, FaGlobe, FaRocket } from 'react-icons/fa';

const IdealClientProfile = () => {
  const primaryICP = {
    title: "Scaling Mid-Market Companies",
    description: "Organizations that have outgrown their current systems and need a partner who understands both business complexity and technical excellence.",
    attributes: [
      { icon: <FaBuilding />, label: "Company Size", value: "100 - 1,000 employees" },
      { icon: <FaChartLine />, label: "Annual Revenue", value: "$10M - $200M" },
      { icon: <FaIndustry />, label: "Industries", value: "Financial Services, Healthcare, Manufacturing, Logistics" },
      { icon: <FaUserTie />, label: "Decision Makers", value: "CTO, VP Engineering, COO" },
      { icon: <FaGlobe />, label: "Geography", value: "US, UK, EU, Middle East, ANZ" },
    ]
  };

  const secondaryICP = {
    title: "Enterprise Innovation Teams",
    description: "Autonomous divisions within larger organizations ($1B+) running digital transformation initiatives who need agility their existing vendors can't provide.",
    icon: <FaRocket />
  };

  return (
    <section className="py-16 bg-white" aria-labelledby="icp-heading">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-2">Who We Serve Best</p>
          <h2 id="icp-heading" className="text-3xl md:text-4xl font-tektur text-gray-800 mb-4">
            Our Ideal Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver the best results for organizations facing real complexity—not everyone, but the right ones.
          </p>
        </div>

        {/* Primary ICP Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 mb-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Primary Fit
            </span>
          </div>

          <h3 className="text-2xl font-tektur text-gray-800 mb-3">
            {primaryICP.title}
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {primaryICP.description}
          </p>

          {/* Attributes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primaryICP.attributes.map((attr, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
              >
                <div className="text-blue-600 text-lg mt-1 flex-shrink-0">
                  {attr.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{attr.label}</p>
                  <p className="text-gray-800 font-semibold">{attr.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why This Matters */}
          <div className="mt-8 pt-6 border-t border-blue-100">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-700">Why we excel with this profile:</span> Large enough for meaningful engagements,
              small enough to value partnership over procurement. Complex enough to need our process rigor,
              accessible enough to collaborate closely.
            </p>
          </div>
        </div>

        {/* Secondary ICP Card */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="text-2xl text-blue-600 mt-1">
              {secondaryICP.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-tektur text-gray-800">
                  {secondaryICP.title}
                </h3>
                <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  Also a Great Fit
                </span>
              </div>
              <p className="text-gray-600">
                {secondaryICP.description}
              </p>
            </div>
          </div>
        </div>

        {/* Not Sure Section */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Not sure if you're a fit? <span className="text-blue-600 font-medium">That's what our discovery call is for.</span> No pressure, just clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdealClientProfile;
