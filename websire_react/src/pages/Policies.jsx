import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaShieldAlt, FaHandshake, FaUserLock, FaMoneyBillWave, FaFileAlt, FaCode } from 'react-icons/fa';

const Policies = () => {
  const policies = [
    {
      icon: <FaUserLock className="text-white mr-3" aria-hidden="true" />,
      title: "Data Privacy Policy",
      description: "We prioritize the security and privacy of your data. Our commitment includes:",
      items: [
        "Collecting only necessary information for service provision",
        "Implementing industry-standard security measures",
        "Never selling your data to third parties",
        "Retention of data only for the period required",
        "Providing clear data access and deletion procedures"
      ],
      footer: "All data handling practices comply with relevant privacy regulations including GDPR and CCPA."
    },
    {
      icon: <FaHandshake className="text-white mr-3" aria-hidden="true" />,
      title: "Client Engagement Policy",
      description: "Every client relationship is managed with these principles:",
      items: [
        "Clear, honest communication throughout the project lifecycle",
        "Regular progress updates and milestone reviews",
        "Dedicated points of contact for project management",
        "Collaborative decision-making process",
        "Commitment to timeline adherence and scope management"
      ],
      footer: "We believe successful projects start with strong relationships and clear expectations."
    },
    {
      icon: <FaCode className="text-white mr-3" aria-hidden="true" />,
      title: "Intellectual Property Policy",
      description: "We respect intellectual property rights with the following guidelines:",
      items: [
        "Upon project completion and final payment, clients receive full ownership of custom-developed code and materials",
        "Clear documentation of any third-party components used in solutions",
        "Usage of open-source components in compliance with their licenses",
        "Protection of client's existing IP during the project lifecycle",
        "Confidentiality agreements covering all project aspects"
      ],
      footer: "We ensure all deliverables can be fully utilized and owned by our clients without restrictions."
    },
    {
      icon: <FaMoneyBillWave className="text-white mr-3" aria-hidden="true" />,
      title: "Billing and Payment Policy",
      description: "Our transparent approach to billing includes:",
      items: [
        "Clear project quotes with defined payment milestones",
        "No hidden fees or unexpected charges",
        "Detailed invoices itemizing all services provided",
        "Multiple payment options for client convenience",
        "Value-based pricing aligned with business outcomes"
      ],
      footer: "We believe in fair, transparent pricing that reflects the value we provide."
    },
    {
      icon: <FaShieldAlt className="text-white mr-3" aria-hidden="true" />,
      title: "Quality Assurance Policy",
      description: "We maintain high quality standards through:",
      items: [
        "Comprehensive testing throughout the development process",
        "Code reviews and adherence to industry best practices",
        "Documentation of all system components and processes",
        "Post-deployment monitoring and performance optimization",
        "Warranty period for all delivered solutions"
      ],
      footer: "Quality is built into every step of our process, not just verified at the end."
    },
    {
      icon: <FaFileAlt className="text-white mr-3" aria-hidden="true" />,
      title: "Support and Maintenance Policy",
      description: "Our ongoing support commitment includes:",
      items: [
        "Defined SLAs for issue response and resolution",
        "Regular system maintenance and security updates",
        "Multiple support channels for issue reporting",
        "Proactive monitoring where applicable",
        "Knowledge transfer to enable client self-sufficiency"
      ],
      footer: "We don't just build solutions; we ensure they continue working optimally throughout their lifecycle."
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
      <Helmet>
        <title>Our Policies - Greyquill Software | Privacy, Security & Terms</title>
        <meta name="description" content="Learn about Greyquill Software's policies on data privacy, client engagement, intellectual property, billing, quality assurance, and support. We believe in transparency and accountability." />
        <link rel="canonical" href="https://greyquill.io/policies" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">Our Policies</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          At Greyquill Software, we believe in transparency, accountability, and maintaining the highest standards
          in all our client engagements.
        </p>
      </header>

      {/* Policies Grid */}
      <section className="mb-16" aria-label="Company policies">
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-blue-500 px-6 py-3 flex items-center">
                {policy.icon}
                <h2 className="text-xl font-tektur text-white">{policy.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-600">{policy.footer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Policy Request */}
      <section className="bg-blue-50 p-6 rounded-lg shadow mb-10 text-center" aria-labelledby="info-heading">
        <h3 id="info-heading" className="text-xl font-tektur text-blue-700 mb-3">Need More Information?</h3>
        <p className="text-gray-600 mb-4">
          For detailed policy documents or specific questions about our terms of engagement,
          please contact our team. We're happy to provide additional information to help you
          make informed decisions.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Contact Us
        </Link>
      </section>

      {/* Policy Updates */}
      <footer className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        <p>
          Our policies are regularly reviewed and updated to reflect current best practices and regulatory requirements.
          Last updated: March 2025
        </p>
      </footer>
    </motion.main>
  );
};

export default Policies;
