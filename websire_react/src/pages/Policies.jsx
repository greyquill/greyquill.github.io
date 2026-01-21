import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaHandshake, FaUserLock, FaMoneyBillWave, FaFileAlt, FaCode, FaCheckCircle } from 'react-icons/fa';

const Policies = () => {
  const policies = [
    {
      icon: <FaUserLock />,
      title: "Data Privacy Policy",
      description: "We prioritize the security and privacy of your data:",
      items: [
        "Collecting only necessary information for service provision",
        "Implementing industry-standard security measures",
        "Never selling your data to third parties",
        "Providing clear data access and deletion procedures"
      ],
      footer: "All data handling practices comply with GDPR and CCPA."
    },
    {
      icon: <FaHandshake />,
      title: "Client Engagement Policy",
      description: "Every client relationship is managed with these principles:",
      items: [
        "Clear, honest communication throughout the project",
        "Regular progress updates and milestone reviews",
        "Dedicated points of contact for project management",
        "Commitment to timeline adherence and scope management"
      ],
      footer: "Successful projects start with strong relationships."
    },
    {
      icon: <FaCode />,
      title: "Intellectual Property Policy",
      description: "We respect intellectual property rights:",
      items: [
        "Clients receive full ownership of custom-developed code upon project completion",
        "Clear documentation of any third-party components used",
        "Usage of open-source components in compliance with their licenses",
        "Confidentiality agreements covering all project aspects"
      ],
      footer: "All deliverables can be fully utilized and owned by our clients."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Billing and Payment Policy",
      description: "Our transparent approach to billing:",
      items: [
        "Clear project quotes with defined payment milestones",
        "No hidden fees or unexpected charges",
        "Detailed invoices itemizing all services provided",
        "Value-based pricing aligned with business outcomes"
      ],
      footer: "Fair, transparent pricing that reflects the value we provide."
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance Policy",
      description: "We maintain high quality standards through:",
      items: [
        "Comprehensive testing throughout development",
        "Code reviews and adherence to best practices",
        "Documentation of all system components",
        "Warranty period for all delivered solutions"
      ],
      footer: "Quality is built into every step of our process."
    },
    {
      icon: <FaFileAlt />,
      title: "Support and Maintenance Policy",
      description: "Our ongoing support commitment:",
      items: [
        "Defined SLAs for issue response and resolution",
        "Regular system maintenance and security updates",
        "Multiple support channels for issue reporting",
        "Knowledge transfer to enable client self-sufficiency"
      ],
      footer: "We ensure solutions continue working optimally."
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Our Policies - Greyquill Software | Privacy, Security & Terms</title>
        <meta name="description" content="Learn about Greyquill Software's policies on data privacy, client engagement, intellectual property, billing, quality assurance, and support." />
        <link rel="canonical" href="https://greyquill.io/policies" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Transparency & Trust</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Our Policies</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We believe in transparency, accountability, and maintaining the highest standards in all our client engagements.
        </p>
      </header>

      {/* Policies Grid */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-4">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
                  {policy.icon}
                </div>
                <h2 className="font-tektur text-gray-800">{policy.title}</h2>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-3 text-sm">{policy.description}</p>
                <ul className="space-y-2 mb-3">
                  {policy.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{policy.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h3 className="text-xl font-tektur text-gray-800 mb-3">Need More Information?</h3>
        <p className="text-gray-600 mb-4">
          For detailed policy documents or specific questions about our terms of engagement, please contact our team.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#0B4F88] text-white px-6 py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>
          Our policies are regularly reviewed and updated to reflect current best practices.
          Last updated: March 2025
        </p>
      </footer>
    </main>
  );
};

export default Policies;
