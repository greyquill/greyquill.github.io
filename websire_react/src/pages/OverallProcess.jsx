import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle,
  FaRocket, FaHandshake, FaLaptopCode, FaExchangeAlt, FaShieldAlt,
  FaUniversity, FaSitemap, FaTools
} from 'react-icons/fa';

const OverallProcess = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
        <h1 className="text-4xl font-tektur text-gray-800 text-center mb-6">The Greyquill Methodology</h1>
        <p className="text-xl font-titillium text-center mb-10">
          How we transform your business challenges into effective solutions through
          our comprehensive, client-centered approach.
        </p>
      </motion.div>

      {/* Core Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-tektur text-gray-800 mb-8 text-center"
        >
          Our Core Philosophy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaLightbulb className="mr-2 text-blue-600" /> Process-First Approach
            </h3>
            <p className="text-gray-600">We understand and optimize your business processes before implementing technology solutions.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaHandshake className="mr-2 text-blue-600" /> Long-term Partnership
            </h3>
            <p className="text-gray-600">We walk alongside you throughout your entire journey, providing ongoing support as your business evolves.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-blue-600" /> Ownership & Accountability
            </h3>
            <p className="text-gray-600">We take full responsibility for the solutions we deliver, standing behind our work with confidence.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Overview Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-tektur text-gray-800 mb-8 text-center">Our End-to-End Process</h2>

        <div className="relative pb-12 mb-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="relative z-10">
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaUniversity />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Discovery Phase</h4>
                <p>We begin with a structured discovery process to understand your business goals, challenges, and requirements.</p>
                <Link to="/discovery-process" className="text-blue-500 hover:underline text-sm">Learn more about our discovery process</Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaSitemap />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Solution Design</h4>
                <p>We craft tailored solutions based on your unique business needs and technical requirements.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaLaptopCode />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Implementation</h4>
                <p>We implement solutions with careful planning, quality assurance, and ongoing communication.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaRocket />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Continuous Support & Evolution</h4>
                <p>We provide ongoing support and ensure your solution evolves with your changing business needs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-tektur text-gray-800 mb-8 text-center"
        >
          Our Service Areas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Business Process Optimization</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Streamline core business practices</li>
                <li>Optimize team performance and workflows</li>
                <li>Enhance value creation throughout processes</li>
                <li>Identify and eliminate bottlenecks</li>
              </ul>
              <div className="mt-4">
                <Link to="/business-process-optimization" className="text-blue-500 hover:underline flex items-center">
                  Learn more <FaChartLine className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Custom Software Development</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Tailored solutions for your unique business needs</li>
                <li>Collaborative, client-centered development approach</li>
                <li>Comprehensive documentation and knowledge transfer</li>
                <li>Ongoing maintenance and improvement</li>
              </ul>
              <div className="mt-4">
                <Link to="/custom-software-development" className="text-blue-500 hover:underline flex items-center">
                  Learn more <FaLaptopCode className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Legacy Application Modernization</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Business-driven modernization strategy</li>
                <li>Value preservation from existing systems</li>
                <li>Phased, low-risk implementation</li>
                <li>Future-proofing with modern architectures</li>
              </ul>
              <div className="mt-4">
                <Link to="/legacy-application-modernization" className="text-blue-500 hover:underline flex items-center">
                  Learn more <FaExchangeAlt className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Distributed Systems & Cloud Consulting</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Business-aligned architecture design</li>
                <li>Cloud strategy and implementation</li>
                <li>Security and compliance by design</li>
                <li>Automation and operational excellence</li>
              </ul>
              <div className="mt-4">
                <Link to="/distributed-systems-cloud-consulting" className="text-blue-500 hover:underline flex items-center">
                  Learn more <FaTools className="ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Implementation Best Practices */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-tektur text-gray-800 mb-8 text-center"
        >
          Our Implementation Best Practices
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaSitemap className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-tektur text-blue-700">Architecture & Design</h3>
            </div>
            <p className="text-gray-700">Business-aligned system design with comprehensive documentation and balanced innovation.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaCogs className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-tektur text-blue-700">Automation</h3>
            </div>
            <p className="text-gray-700">Smart automation with self-healing systems, CI/CD pipelines, and zero-downtime deployments.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-tektur text-blue-700">Security</h3>
            </div>
            <p className="text-gray-700">Security by design with comprehensive controls, encryption, and ongoing testing.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaUsers className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-tektur text-blue-700">Change Management</h3>
            </div>
            <p className="text-gray-700">People-centered approach to technological change with comprehensive risk mitigation.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaRocket className="text-blue-600 text-2xl mr-3" />
              <h3 className="text-xl font-tektur text-blue-700">Future-Proofing</h3>
            </div>
            <p className="text-gray-700">Modern standards with ongoing assessments and agile enhancement cycles.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Outcomes & Benefits Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-tektur text-gray-800 mb-8 text-center"
        >
          Outcomes & Benefits
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Business Impact</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improved operational efficiency</li>
              <li>Reduced costs through optimization</li>
              <li>Enhanced customer satisfaction</li>
              <li>Increased market agility</li>
              <li>Better business-technology alignment</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Technical Advantages</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scalable, future-proof systems</li>
              <li>Improved reliability and performance</li>
              <li>Enhanced security and compliance</li>
              <li>Reduced technical debt</li>
              <li>Easier system integration</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Organizational Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Better team collaboration</li>
              <li>Improved knowledge transfer</li>
              <li>Reduced resistance to change</li>
              <li>Greater operational visibility</li>
              <li>Increased innovation capabilities</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-6 rounded-lg shadow-lg text-center mb-12"
      >
        <h2 className="text-2xl font-tektur mb-4">Ready to Transform Your Business Challenges?</h2>
        <p className="mb-6 text-lg">
          Schedule a discovery call to discuss how Greyquill can help you achieve your business goals.
        </p>
        <BookDiscoveryCallButton />
      </motion.div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-l-4 border-blue-500 pl-6 italic text-gray-600 mb-10"
      >
        <p className="text-lg">
          "Greyquill's approach to our digital transformation was refreshing. They started by understanding our business processes and challenges before proposing solutions. The result was technology that truly supported our strategic goals, not just a technical upgrade."
        </p>
        <p className="mt-2 font-semibold">— Financial Services Client</p>
      </motion.div>
    </div>
  );
};

export default OverallProcess;