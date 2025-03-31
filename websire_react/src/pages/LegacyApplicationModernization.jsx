import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle, FaArrowRight, FaArrowLeft,
  FaCode, FaRocket, FaExchangeAlt, FaClipboardCheck, FaLayerGroup, FaServer, FaCloud,
  FaBrain, FaUniversity, FaLaptopCode, FaTools, FaShieldAlt, FaSitemap
} from 'react-icons/fa';

const LegacyApplicationModernization = () => {
  const [activeSection, setActiveSection] = useState('intro');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  // Sections data
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <FaLightbulb /> },
    { id: 'approach', title: 'Our Approach', icon: <FaSitemap /> },
    { id: 'seven-rs', title: 'The 7 R\'s Framework', icon: <FaExchangeAlt /> },
    { id: 'strategies', title: 'Modernization Strategies', icon: <FaChartLine /> },
    { id: 'automation', title: 'Automation Benefits', icon: <FaCogs /> },
    { id: 'methodology', title: 'Our Methodology', icon: <FaClipboardCheck /> },
    { id: 'change-mgmt', title: 'Change Management', icon: <FaUsers /> },
    { id: 'future', title: 'Future-Proofing', icon: <FaRocket /> }
  ];

  // Content for each section - will add in subsequent edits
  const sectionContent = {
    'intro': (
      <div>
        <p className="text-lg mb-6">
          Are your mission-critical systems starting to show their age? You're not alone. Many businesses run on applications
          that have served them well for years—even decades—but are now becoming difficult to maintain and adapt to changing needs.
        </p>
        <p className="text-lg mb-6">
          At Greyquill Software, we specialize in breathing new life into legacy applications. We don't just update
          technology—we transform outdated systems into modern, agile assets that support your business growth rather than hold it back.
        </p>
        <div className="flex justify-center mb-8">
          <motion.img
            src="/images/legacy_application_modernisation.png"
            alt="Legacy Application Modernization"
            className="max-w-xs rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <p className="text-lg mb-6">
          Our approach balances innovation with pragmatism—preserving the valuable business logic you've built over years
          while updating technology platforms, interfaces, and architecture to meet today's needs and tomorrow's challenges.
        </p>
      </div>
    ),
    'approach': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaSitemap className="mr-2" /> Smart Modernization, Not Just Technology Updates
        </h3>
        <p className="mb-4">
          We take a strategic approach to legacy modernization that goes beyond just updating code or migrating to new platforms:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaLightbulb size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Business-First</h4>
            <p>We start with your business goals and challenges, not just the technology</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaLayerGroup size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Value Preservation</h4>
            <p>We identify and preserve the valuable parts of your existing systems</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaRocket size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Future-Focused</h4>
            <p>We build for both your needs today and your growth tomorrow</p>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaTools className="mr-2" /> Our Process at a Glance
        </h3>

        <div className="relative pb-12 mb-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="relative z-10">
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaUniversity />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Comprehensive Assessment</h4>
                <p>We thoroughly evaluate your existing systems from both technical and business perspectives</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaSitemap />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Strategic Planning</h4>
                <p>We determine the best approach for each application based on its value and current state</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaLaptopCode />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Phased Implementation</h4>
                <p>We implement changes in carefully planned increments to minimize disruption</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaCheckCircle />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Continuous Support</h4>
                <p>We stay with you through the transition and beyond, ensuring success</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'seven-rs': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaExchangeAlt className="mr-2" /> The 7 R's: Our Modernization Toolkit
        </h3>
        <p className="mb-4">
          At Greyquill, we use the industry-proven "7 R's" framework to guide our modernization decisions.
          Think of it as a toolbox—each approach is useful for specific situations and challenges:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaLayerGroup size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Retain/Encapsulate</h4>
            </div>
            <p>Keep your system in place but create modern interfaces around it—great for stable systems that just need better integration</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaServer size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Rehost</h4>
            </div>
            <p>Move your application "as-is" to a modern environment (like the cloud)—fast results with minimal code changes</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaCloud size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Replatform</h4>
            </div>
            <p>Make targeted updates to your application so it works better with modern platforms—balancing speed and improvement</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaCode size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Refactor</h4>
            </div>
            <p>Improve your existing code without changing how it works externally—better performance and easier maintenance</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaSitemap size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Rearchitect</h4>
            </div>
            <p>Redesign how your application is structured for better performance and integration—addressing fundamental limitations</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaLaptopCode size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Rebuild</h4>
            </div>
            <p>Rewrite your application from scratch while keeping the same functionality—clean slate with modern technology</p>
          </motion.div>

          <motion.div
            className="bg-white border border-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 rounded-full p-2 text-white mr-3">
                <FaExchangeAlt size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Replace</h4>
            </div>
            <p>Adopt a new solution that provides similar capabilities—sometimes buying is better than building</p>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg mb-4">
          <h4 className="font-tektur text-blue-700 mb-2">Our Approach</h4>
          <p>
            We don't believe in one-size-fits-all solutions. After careful assessment, we may recommend different approaches
            for different parts of your system based on business value, risk, and technical condition.
          </p>
        </div>
      </div>
    ),
    'strategies': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Finding the Right Modernization Strategy
        </h3>
        <p className="mb-6">
          There are two main approaches to modernization—we'll help you choose the one that best fits your business needs and risk tolerance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <FaRocket />
              </div>
              <h4 className="font-tektur text-blue-700 text-xl">Revolutionary</h4>
            </div>
            <p className="mb-4">Complete transformation in a shorter timeframe.</p>

            <h5 className="font-tektur text-blue-600 mb-2 mt-4">Best When You Need:</h5>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Rapid transformation</li>
              <li>Major competitive advantages</li>
              <li>To escape critical system limitations</li>
            </ul>

            <h5 className="font-tektur text-blue-600 mb-2">Considerations:</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Higher initial disruption</li>
              <li>More upfront investment</li>
              <li>Faster overall completion</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                <FaLayerGroup />
              </div>
              <h4 className="font-tektur text-blue-700 text-xl">Evolutionary</h4>
            </div>
            <p className="mb-4">Phased approach with gradual improvements over time.</p>

            <h5 className="font-tektur text-blue-600 mb-2 mt-4">Best When You Need:</h5>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Minimal business disruption</li>
              <li>Distributed costs over time</li>
              <li>To maintain operational stability</li>
            </ul>

            <h5 className="font-tektur text-blue-600 mb-2">Considerations:</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Longer overall timeline</li>
              <li>More manageable change process</li>
              <li>Earlier benefits for high-priority areas</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "Greyquill helped us modernize our order management system that had been in place for over 15 years. They took an evolutionary approach that allowed us to transform without disrupting our daily operations. The system is now cloud-based, much faster, and our team loves the new interface." — Manufacturing Client
        </div>

        <p className="mb-4">
          No matter which approach we recommend, we'll provide clear reasoning and help you understand the trade-offs so you can make the best decision for your business.
        </p>
      </div>
    ),
    'automation': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCogs className="mr-2" /> Enhancing Your Systems with Automation
        </h3>
        <p className="mb-4">
          Modern applications aren't just about new technology platforms—they're about working smarter.
          Automation is a key part of most modernization projects we undertake:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Time-Saving Automation</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Data entry and validation workflows</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Report generation and scheduling</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Document processing and management</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Smarter Analytics</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>AI-powered data processing and insights</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Predictive analytics and forecasting</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Automated dashboard generation</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Streamlined Workflows</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>AI-assisted project management</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Intelligent resource allocation</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Automated milestone tracking and alerts</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaRocket className="mr-2" /> Real Business Benefits
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-blue-50 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Increased Productivity
            </h4>
            <p>Automate repetitive tasks so your team can focus on higher-value work</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Better Decision Making
            </h4>
            <p>Gain accurate, timely insights to guide your business strategy</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Reduced Errors
            </h4>
            <p>Minimize mistakes and inconsistencies with automated validation</p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Improved Customer Experience
            </h4>
            <p>Deliver faster, more consistent service to your clients</p>
          </motion.div>
        </div>
      </div>
    ),
    'methodology': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaClipboardCheck className="mr-2" /> Our Proven Modernization Method
        </h3>
        <p className="mb-6">
          Modernizing legacy applications isn't just a technical challenge—it's a business transformation. Our methodology addresses both aspects:
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
          <h4 className="font-tektur text-blue-700 mb-4">Phase 1: Assessment & Planning</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What We Do:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Audit your current systems and infrastructure
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Evaluate business value and criticality
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Identify technical debt and constraints
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Engage stakeholders to understand business goals
                </motion.li>
              </ul>
            </div>

            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What You Get:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Comprehensive system assessment report
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Modernization options with pros and cons
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Initial cost and timeline estimates
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Clear priorities based on business impact
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
          <h4 className="font-tektur text-blue-700 mb-4">Phase 2: Design & Architecture</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What We Do:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Define the target architecture
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Create data migration strategy
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Design security and integration approaches
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Plan for operational continuity
                </motion.li>
              </ul>
            </div>

            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What You Get:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Detailed technical architecture diagrams
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Implementation roadmap with phases
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Technology stack recommendations
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Risk mitigation strategies
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-blue-500">
          <h4 className="font-tektur text-blue-700 mb-4">Phase 3: Implementation & Transition</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What We Do:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Execute the modernization plan in phases
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Conduct thorough testing at each stage
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Train users on new systems and processes
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Provide support through the transition
                </motion.li>
              </ul>
            </div>

            <div>
              <h5 className="font-tektur text-blue-600 mb-2">What You Get:</h5>
              <ul className="list-disc pl-6 space-y-2">
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  Transformed applications with minimal disruption
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  Knowledge transfer and documentation
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  Trained staff ready to use new systems
                </motion.li>
                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  Progressive realization of business benefits
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    'change-mgmt': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaUsers className="mr-2" /> Managing the Human Side of Change
        </h3>
        <p className="mb-6">
          The most challenging part of modernization isn't the technology—it's helping people adapt to new ways of working.
          At Greyquill, we put as much thought into change management as we do into technical implementation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <FaShieldAlt size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 text-lg text-center mb-4">Risk Mitigation</h4>

            <ul className="space-y-3">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Early risk assessment that identifies potential challenges before they become problems</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Rollback plans and comprehensive backups to protect against unexpected issues</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Phased implementation to limit disruption and allow for adjustments</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Pilot testing in controlled environments before full deployment</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <FaUsers size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 text-lg text-center mb-4">People-Centered Approach</h4>

            <ul className="space-y-3">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Clear communication that keeps everyone informed about goals, progress, and impacts</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Comprehensive training programs tailored to different user groups</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Ongoing support resources to help users adapt to new systems</span>
              </motion.li>
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3 mt-1 flex-shrink-0">
                  <FaCheckCircle size={12} />
                </div>
                <span>Feedback mechanisms to continuously improve the experience</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h4 className="font-tektur text-blue-700 mb-4 flex items-center">
            <FaLightbulb className="mr-2" /> Our Change Management Philosophy
          </h4>
          <p className="mb-4">
            We believe successful modernization requires balancing three key elements:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-tektur text-blue-700 mb-2">Technology</h5>
              <p>Selecting the right tools and platforms for your needs</p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-tektur text-blue-700 mb-2">Process</h5>
              <p>Optimizing workflows to take advantage of new capabilities</p>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h5 className="font-tektur text-blue-700 mb-2">People</h5>
              <p>Helping users adapt to and embrace the changes</p>
            </div>
          </div>
        </div>
      </div>
    ),
    'future': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaRocket className="mr-2" /> Building for the Future, Not Just Today
        </h3>
        <p className="mb-6">
          When we modernize your applications, we're not just solving today's problems—we're preparing your systems
          for future growth and innovation. Here's how we future-proof your technology:
        </p>

        <div className="mb-8">
          <h4 className="font-tektur text-blue-700 mb-4 flex items-center">
            <FaLaptopCode className="mr-2" /> Embracing Modern Technology
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
                <FaBrain size={24} />
              </div>
              <h5 className="font-tektur text-blue-700 mb-2">AI and Machine Learning</h5>
              <p>Intelligent capabilities that learn and improve over time</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
                <FaCloud size={24} />
              </div>
              <h5 className="font-tektur text-blue-700 mb-2">Cloud-Native Architecture</h5>
              <p>Scalable, resilient systems that grow with your business</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
                <FaCode size={24} />
              </div>
              <h5 className="font-tektur text-blue-700 mb-2">Low-Code Platforms</h5>
              <p>Faster adaptation to changing business requirements</p>
            </motion.div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-tektur text-blue-700 mb-4 flex items-center">
            <FaExchangeAlt className="mr-2" /> Continuous Modernization
          </h4>
          <p className="mb-4">
            Instead of treating modernization as a one-time project, we help you establish a culture of ongoing improvement:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <ul className="space-y-4">
              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-2 text-white mr-4 mt-1 flex-shrink-0">
                  <FaCheckCircle size={16} />
                </div>
                <div>
                  <h5 className="font-tektur text-blue-700 mb-1">Regular System Assessments</h5>
                  <p>Scheduled evaluations to ensure your systems continue to meet evolving business needs</p>
                </div>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-2 text-white mr-4 mt-1 flex-shrink-0">
                  <FaCheckCircle size={16} />
                </div>
                <div>
                  <h5 className="font-tektur text-blue-700 mb-1">Agile Enhancement Cycles</h5>
                  <p>Iterative improvements based on user feedback and business value</p>
                </div>
              </motion.li>

              <motion.li
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-2 text-white mr-4 mt-1 flex-shrink-0">
                  <FaCheckCircle size={16} />
                </div>
                <div>
                  <h5 className="font-tektur text-blue-700 mb-1">Technology Radar Monitoring</h5>
                  <p>Keeping you informed about relevant technological advancements</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "What impressed me most about Greyquill's approach was their focus on building systems that could evolve over time. Four years after our initial modernization project, our applications continue to adapt to our changing business needs with minimal additional investment." — Financial Services Client
        </div>
      </div>
    ),
  };

  return (
    <div className="py-10">
      <div className="text-left mb-6">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-tektur text-gray-800 text-center mb-6">
          Legacy Application Modernization
        </h1>
        <p className="text-xl font-titillium text-center mb-10">
          Breathe new life into your valuable systems and unlock their full potential
        </p>
      </motion.div>

      {/* Section Navigation */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-tektur text-blue-700 mb-4">Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="mr-2">{section.icon}</span>
                <span className="text-left">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={activeSection}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          {sectionContent[activeSection]}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              const currentIndex = sections.findIndex(s => s.id === activeSection);
              if (currentIndex > 0) {
                setActiveSection(sections[currentIndex - 1].id);
              }
            }}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeSection === sections[0].id
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={activeSection === sections[0].id}
          >
            <span className="mr-2">←</span> Previous
          </button>
          <button
            onClick={() => {
              const currentIndex = sections.findIndex(s => s.id === activeSection);
              if (currentIndex < sections.length - 1) {
                setActiveSection(sections[currentIndex + 1].id);
              }
            }}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeSection === sections[sections.length - 1].id
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={activeSection === sections[sections.length - 1].id}
          >
            Next <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-tektur text-blue-700 mb-6 text-center">Ready to Modernize Your Legacy Systems?</h2>
          <div>
            <p className="text-lg mb-6">
              Don't let outdated applications hold your business back. With our proven modernization approach, you can transform your legacy systems into agile, powerful assets that drive your business forward.
            </p>
            <p className="text-lg mb-8">
              At Greyquill Software, we understand both the technical and business aspects of modernization. Let's work together to breathe new life into your valuable systems while minimizing risk and disruption.
            </p>
            <div className="text-center mb-8">
              <h3 className="text-xl font-tektur text-blue-700 mb-4">Let's start your modernization journey today</h3>
              <BookDiscoveryCallButton />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegacyApplicationModernization;