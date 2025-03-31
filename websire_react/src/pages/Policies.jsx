import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHandshake, FaFileContract, FaUserLock, FaMoneyBillWave, FaFileAlt, FaCode } from 'react-icons/fa';

const Policies = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <div className="py-10">
      <div className="text-left mb-10 left-0">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-tektur text-gray-800 text-center mb-6">Our Policies</h1>
        <p className="text-xl font-titillium text-center mb-10">
          At Greyquill Software, we believe in transparency, accountability, and maintaining the highest standards
          in all our client engagements.
        </p>
      </motion.div>

      {/* Policies Overview */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Data Privacy Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaUserLock className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Data Privacy Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                We prioritize the security and privacy of your data. Our commitment includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Collecting only necessary information for service provision</li>
                <li>Implementing industry-standard security measures</li>
                <li>Never selling your data to third parties</li>
                <li>Retention of data only for the period required</li>
                <li>Providing clear data access and deletion procedures</li>
              </ul>
              <p className="text-gray-600">
                All data handling practices comply with relevant privacy regulations including GDPR and CCPA.
              </p>
            </div>
          </motion.div>

          {/* Client Engagement Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaHandshake className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Client Engagement Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Every client relationship is managed with these principles:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Clear, honest communication throughout the project lifecycle</li>
                <li>Regular progress updates and milestone reviews</li>
                <li>Dedicated points of contact for project management</li>
                <li>Collaborative decision-making process</li>
                <li>Commitment to timeline adherence and scope management</li>
              </ul>
              <p className="text-gray-600">
                We believe successful projects start with strong relationships and clear expectations.
              </p>
            </div>
          </motion.div>

          {/* Intellectual Property Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaCode className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Intellectual Property Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                We respect intellectual property rights with the following guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Upon project completion and final payment, clients receive full ownership of custom-developed code and materials</li>
                <li>Clear documentation of any third-party components used in solutions</li>
                <li>Usage of open-source components in compliance with their licenses</li>
                <li>Protection of client's existing IP during the project lifecycle</li>
                <li>Confidentiality agreements covering all project aspects</li>
              </ul>
              <p className="text-gray-600">
                We ensure all deliverables can be fully utilized and owned by our clients without restrictions.
              </p>
            </div>
          </motion.div>

          {/* Billing and Payment Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaMoneyBillWave className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Billing and Payment Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our transparent approach to billing includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Clear project quotes with defined payment milestones</li>
                <li>No hidden fees or unexpected charges</li>
                <li>Detailed invoices itemizing all services provided</li>
                <li>Multiple payment options for client convenience</li>
                <li>Value-based pricing aligned with business outcomes</li>
              </ul>
              <p className="text-gray-600">
                We believe in fair, transparent pricing that reflects the value we provide.
              </p>
            </div>
          </motion.div>

          {/* Quality Assurance Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaShieldAlt className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Quality Assurance Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                We maintain high quality standards through:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Comprehensive testing throughout the development process</li>
                <li>Code reviews and adherence to industry best practices</li>
                <li>Documentation of all system components and processes</li>
                <li>Post-deployment monitoring and performance optimization</li>
                <li>Warranty period for all delivered solutions</li>
              </ul>
              <p className="text-gray-600">
                Quality is built into every step of our process, not just verified at the end.
              </p>
            </div>
          </motion.div>

          {/* Support and Maintenance Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3 flex items-center">
              <FaFileAlt className="text-white mr-3" />
              <h3 className="text-xl font-tektur text-white">Support and Maintenance Policy</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our ongoing support commitment includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Defined SLAs for issue response and resolution</li>
                <li>Regular system maintenance and security updates</li>
                <li>Multiple support channels for issue reporting</li>
                <li>Proactive monitoring where applicable</li>
                <li>Knowledge transfer to enable client self-sufficiency</li>
              </ul>
              <p className="text-gray-600">
                We don't just build solutions; we ensure they continue working optimally throughout their lifecycle.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Policy Request */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-blue-50 p-6 rounded-lg shadow mb-10 text-center"
      >
        <h3 className="text-xl font-tektur text-blue-700 mb-3">Need More Information?</h3>
        <p className="text-gray-600 mb-4">
          For detailed policy documents or specific questions about our terms of engagement,
          please contact our team. We're happy to provide additional information to help you
          make informed decisions.
        </p>
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
          Contact Us
        </Link>
      </motion.div>

      {/* Policy Updates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm"
      >
        <p>
          Our policies are regularly reviewed and updated to reflect current best practices and regulatory requirements.
          Last updated: March 2025
        </p>
      </motion.div>
    </div>
  );
};

export default Policies;