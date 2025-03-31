import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle, FaArrowRight, FaArrowLeft,
  FaCode, FaRocket, FaHandshake, FaClipboardCheck, FaSitemap, FaCloud, FaServer,
  FaBrain, FaDatabase, FaExchangeAlt, FaNetworkWired, FaShieldAlt, FaLayerGroup,
  FaSearch, FaLaptopCode
} from 'react-icons/fa';

const DistributedSystemsCloudConsulting = () => {
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
    { id: 'cloud-strategies', title: 'Cloud Strategies', icon: <FaCloud /> },
    { id: 'distributed-systems', title: 'Distributed Systems', icon: <FaNetworkWired /> },
    { id: 'architecture', title: 'Architecture Design', icon: <FaLayerGroup /> },
    { id: 'automation', title: 'Automation', icon: <FaCogs /> },
    { id: 'security', title: 'Security & Compliance', icon: <FaShieldAlt /> },
    { id: 'implementation', title: 'Implementation', icon: <FaRocket /> }
  ];

  // Content for each section
  const sectionContent = {
    'intro': (
      <div>
        <p className="text-lg mb-6">
          Ever wonder what makes some companies scale effortlessly while others struggle under growing demand?
          The secret often lies in how their systems are designed behind the scenes.
        </p>
        <p className="text-lg mb-6">
          At Greyquill Software, we specialize in building systems that don't just work today—they're designed to grow
          with your business, handle unpredictable demands, and recover gracefully when things go wrong.
        </p>
        <div className="flex justify-center mb-8">
          <motion.img
            src="/images/distributed_and_cloud_consulting.png"
            alt="Distributed Systems and Cloud Architecture"
            className="max-w-xs rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <p className="text-lg mb-6">
          Our distributed systems and cloud consulting helps you navigate the complexity of modern
          architecture—turning technical challenges into business advantages that keep you ahead of competitors.
        </p>
      </div>
    ),
    'approach': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaSitemap className="mr-2" /> Your Business Goals Drive Our Technical Decisions
        </h3>
        <p className="mb-4">
          We don't believe in technology for technology's sake. Our consultation approach starts with understanding
          your business objectives, then works backwards to design systems that support them:
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
            <h4 className="font-tektur text-blue-700 mb-2">Business-First Thinking</h4>
            <p>We build systems that solve real business challenges, not just technical puzzles</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaUsers size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Stakeholder Alignment</h4>
            <p>We bring technical and business teams together with a common language and goals</p>
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
            <h4 className="font-tektur text-blue-700 mb-2">Future-Ready Design</h4>
            <p>We build for your needs today and your growth tomorrow</p>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaHandshake className="mr-2" /> Our Consultation Framework
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
                <FaLightbulb />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Discovery</h4>
                <p>We learn about your business goals, current challenges, and existing infrastructure</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaSearch />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Assessment</h4>
                <p>We evaluate your current systems against industry best practices and your business needs</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaSitemap />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Architecture Planning</h4>
                <p>We design a system architecture that aligns with your business objectives</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaRocket />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Implementation Roadmap</h4>
                <p>We create a practical, phased plan to build or transform your systems</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "Greyquill's approach to our cloud migration was refreshing. Instead of starting with technology choices, they began by understanding our business goals and pain points. The resulting architecture wasn't just technically sound—it directly supported our growth strategy." — Financial Services Client
        </div>
      </div>
    ),
    'cloud-strategies': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCloud className="mr-2" /> Finding Your Path to the Cloud
        </h3>
        <p className="mb-4">
          Thinking about moving to the cloud? The journey looks different for every business. We help you navigate
          the options to find the strategy that best supports your specific goals:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Cloud Migration Strategy</h4>
            <p className="mb-3">Moving existing systems to the cloud requires careful planning:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Assessment of applications for cloud readiness</li>
              <li>Choosing between rehost, refactor, or rebuild approaches</li>
              <li>Data migration planning and execution</li>
              <li>Minimizing disruption during transition</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Multi-Cloud Strategy</h4>
            <p className="mb-3">Sometimes one cloud provider isn't enough:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Evaluating which workloads fit best on which platforms</li>
              <li>Creating consistent governance across providers</li>
              <li>Managing costs effectively across multiple clouds</li>
              <li>Implementing unified monitoring and management</li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaLayerGroup className="mr-2" /> Choosing the Right Model for Your Business
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaServer size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Infrastructure (IaaS)</h4>
            </div>
            <p className="mb-2">Virtual servers and storage without hardware headaches</p>
            <p className="text-sm text-gray-600">
              Best for: Organizations that want more control over their infrastructure but without managing physical hardware
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaLayerGroup size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Platform (PaaS)</h4>
            </div>
            <p className="mb-2">Development environments without infrastructure complexity</p>
            <p className="text-sm text-gray-600">
              Best for: Development teams focusing on application development without managing servers
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaCode size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Serverless</h4>
            </div>
            <p className="mb-2">Run code without thinking about servers at all</p>
            <p className="text-sm text-gray-600">
              Best for: Event-driven applications with variable workloads that benefit from automatic scaling
            </p>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
            <FaLightbulb className="mr-2" /> Our Cloud Strategy Approach
          </h4>
          <p className="mb-4">
            We help you balance factors like cost, performance, security, and vendor lock-in to find your optimal cloud mix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Identify which workloads should move to the cloud first</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Match workloads to the right cloud service models</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Create future-proof architecture patterns</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Build a practical migration roadmap with minimal risk</span>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'distributed-systems': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaNetworkWired className="mr-2" /> Breaking Down Monoliths into Manageable Pieces
        </h3>
        <p className="mb-4">
          Is your system becoming too complex to manage or scale effectively? Distributed systems architecture can help—but
          it requires careful planning to avoid creating more problems than it solves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">When to Distribute Your Systems</h4>
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
                <span>When you need to scale beyond what a single system can handle</span>
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
                <span>When different parts of your system have different resource needs</span>
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
                <span>When your team structure benefits from more modular codebases</span>
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
                <span>When you need to improve fault isolation and system resilience</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Common Distributed Patterns We Implement</h4>
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
                <span><span className="font-semibold">Microservices:</span> Breaking systems into focused, independent services</span>
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
                <span><span className="font-semibold">Event-driven architecture:</span> Systems that respond to events as they happen</span>
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
                <span><span className="font-semibold">CQRS:</span> Separating read and write operations for better performance</span>
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
                <span><span className="font-semibold">API Gateway patterns:</span> Simplifying client access to multiple services</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaHandshake className="mr-2" /> Real-World Business Benefits
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-3 rounded-full mr-3">
                <FaRocket size={20} />
              </div>
              <h4 className="font-tektur text-blue-700">Improved Scalability</h4>
            </div>
            <p>Grow specific parts of your system as needed without having to scale everything</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-3 rounded-full mr-3">
                <FaShieldAlt size={20} />
              </div>
              <h4 className="font-tektur text-blue-700">Greater Resilience</h4>
            </div>
            <p>Isolate failures to prevent one problem from affecting your entire system</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-3 rounded-full mr-3">
                <FaUsers size={20} />
              </div>
              <h4 className="font-tektur text-blue-700">Development Agility</h4>
            </div>
            <p>Enable teams to work independently on different parts of your system</p>
          </motion.div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "We were hitting the limits of our monolithic application's performance. Greyquill helped us break it down into microservices that could scale independently. Now our team can deploy updates faster, and we've eliminated the performance bottlenecks that were frustrating our customers." — E-commerce Client
        </div>
      </div>
    ),
    'architecture': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaLayerGroup className="mr-2" /> System Design That Aligns With Business Goals
        </h3>
        <p className="mb-4">
          Great architecture isn't just about technology—it's about creating a foundation that helps your business
          achieve its goals. Our architects design systems that balance technical excellence with practical business needs.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h4 className="font-tektur text-blue-700 mb-4">Our System Design Approach</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h5 className="font-tektur text-blue-600 mb-2 flex items-center">
                <FaUsers className="mr-2 text-blue-500" /> Stakeholder Workshops
              </h5>
              <p className="mb-4">We bring together business and technical teams to understand requirements from all angles</p>

              <h5 className="font-tektur text-blue-600 mb-2 flex items-center">
                <FaLightbulb className="mr-2 text-blue-500" /> Design Principles
              </h5>
              <p>We establish clear principles that guide architecture decisions throughout your project</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="font-tektur text-blue-600 mb-2 flex items-center">
                <FaSitemap className="mr-2 text-blue-500" /> System Modeling
              </h5>
              <p className="mb-4">We create visual models of your system that help everyone understand how it will work</p>

              <h5 className="font-tektur text-blue-600 mb-2 flex items-center">
                <FaChartLine className="mr-2 text-blue-500" /> Growth Planning
              </h5>
              <p>We design with future scale in mind so your architecture can grow with your business</p>
            </motion.div>
          </div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaBrain className="mr-2" /> Architecture Decision Records
        </h3>
        <p className="mb-4">
          We don't just create designs—we document the "why" behind them. This helps your team understand the reasoning
          and makes future decisions more consistent.
        </p>

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
                <FaSearch />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Context</h4>
                <p>What business problem are we trying to solve?</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaExchangeAlt />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Options</h4>
                <p>What alternatives did we consider?</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaCheckCircle />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Decision</h4>
                <p>What approach did we choose and why?</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaChartLine />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Consequences</h4>
                <p>What are the trade-offs and implications of this decision?</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg shadow-md mb-6">
          <h4 className="font-tektur text-blue-700 mb-3 flex items-center">
            <FaCode className="mr-2" /> Architecture Deliverables
          </h4>
          <p className="mb-4">
            Our architecture consultation provides clear, practical documentation that guides your implementation:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>System context and container diagrams</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Component and interaction diagrams</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Technology selection rationale</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Data flow and storage design</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Security and compliance plans</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Implementation and migration roadmap</span>
            </div>
          </div>
        </div>
      </div>
    ),
    'automation': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCogs className="mr-2" /> Working Smarter with Automation
        </h3>
        <p className="mb-4">
          In today's complex systems, manual processes aren't just inefficient—they're unsustainable. We help you identify
          and implement automation that reduces errors, accelerates delivery, and lets your team focus on higher-value work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Infrastructure Automation</h4>
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
                <span>Infrastructure as Code (IaC) implementation</span>
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
                <span>Self-healing system design</span>
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
                <span>Auto-scaling configurations</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Delivery Automation</h4>
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
                <span>CI/CD pipeline design and implementation</span>
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
                <span>Automated testing strategies</span>
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
                <span>Zero-downtime deployment patterns</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3 text-center">Operational Automation</h4>
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
                <span>Proactive monitoring and alerting</span>
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
                <span>Incident response automation</span>
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
                <span>Security compliance checks</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaBrain className="mr-2" /> AI-Enhanced Automation
        </h3>
        <p className="mb-4">
          We go beyond basic automation by incorporating AI and machine learning to create systems that not just
          repeat tasks—but actually learn and improve over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Intelligent Scaling
            </h4>
            <p>Systems that predict traffic patterns and scale resources before they're needed—not after</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Predictive Maintenance
            </h4>
            <p>Identifying potential system issues before they affect users</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Automated Code Generation
            </h4>
            <p>Accelerating development with AI-assisted coding and testing</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
              <FaArrowRight className="mr-2 text-blue-500" /> Cost Optimization
            </h4>
            <p>AI-driven resource allocation to minimize cloud spending</p>
          </motion.div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "The automation Greyquill implemented reduced our deployment time from days to minutes and virtually eliminated the configuration errors that used to plague our releases. Our developers can now focus on creating value instead of fighting with infrastructure." — Technology Client
        </div>
      </div>
    ),
    'security': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaShieldAlt className="mr-2" /> Security by Design, Not Afterthought
        </h3>
        <p className="mb-4">
          In today's threat landscape, security can't be bolted on later—it must be woven into the fabric of your systems
          from day one. Our approach integrates security at every level of your architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Security Architecture</h4>
            <p className="mb-3">We design security controls across all system layers:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Network security zones and traffic control</li>
              <li>Identity and access management strategies</li>
              <li>Data encryption (in transit and at rest)</li>
              <li>Secrets management and key rotation</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">DevSecOps Integration</h4>
            <p className="mb-3">We build security into your development workflow:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Automated security testing in CI/CD pipelines</li>
              <li>Infrastructure security scanning</li>
              <li>Dependency vulnerability monitoring</li>
              <li>Security policy as code</li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaClipboardCheck className="mr-2" /> Compliance Without Compromise
        </h3>
        <p className="mb-4">
          Meeting regulatory requirements doesn't have to slow you down. We help you design systems that satisfy
          compliance needs while maintaining the agility your business demands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaDatabase size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Data Governance</h4>
            </div>
            <p>Ensuring proper handling of sensitive data across systems</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaSearch size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Audit Readiness</h4>
            </div>
            <p>Comprehensive logging and monitoring for auditability</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                <FaShieldAlt size={16} />
              </div>
              <h4 className="font-tektur text-blue-700">Compliance as Code</h4>
            </div>
            <p>Automated verification of security and compliance controls</p>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg shadow-md mb-6">
          <h4 className="font-tektur text-blue-700 mb-2 flex items-center">
            <FaLightbulb className="mr-2" /> Our Security-First Mindset
          </h4>
          <p className="mb-4">
            We apply these principles in every system we design:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Zero-trust architecture by default</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Defense in depth with multiple security layers</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Least privilege access control</span>
            </motion.div>

            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3 flex-shrink-0">
                <FaCheckCircle size={12} />
              </div>
              <span>Regular security assessments</span>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'implementation': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaRocket className="mr-2" /> From Planning to Production
        </h3>
        <p className="mb-4">
          Great designs only create value when they're implemented effectively. We don't just help you plan—we guide
          you through turning those plans into reality with minimal risk and disruption.
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
              <FaLayerGroup size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Phased Approach</h4>
            <p>Breaking complex changes into manageable, lower-risk increments</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaUsers size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Knowledge Transfer</h4>
            <p>Ensuring your team can confidently support what we build</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaClipboardCheck size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Clear Milestones</h4>
            <p>Defined checkpoints to measure progress and adjust course if needed</p>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaHandshake className="mr-2" /> Implementation Models
        </h3>
        <p className="mb-4">
          We offer flexible engagement models to match your needs:
        </p>

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
                <FaLaptopCode />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Advisory Support</h4>
                <p>We guide your internal team through implementation with expert advice</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaUsers />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Embedded Expertise</h4>
                <p>Our specialists work alongside your team, providing hands-on support</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaRocket />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Full Implementation</h4>
                <p>We manage the entire process from start to finish, then hand over to your team</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaHandshake />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Ongoing Partnership</h4>
                <p>Long-term support to help your systems evolve with your business needs</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "What impressed me most about Greyquill was their focus on making sure we could maintain the systems they built for us. They didn't just implement and leave—they invested time in training our team and created documentation that we still reference today." — Healthcare Client
        </div>
      </div>
    )
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
          Distributed Systems & Cloud Consulting
        </h1>
        <p className="text-xl font-titillium text-center mb-10">
          Building scalable, resilient systems that power your business transformation
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
          <h2 className="text-2xl font-tektur text-blue-700 mb-6 text-center">Ready to Transform Your Systems?</h2>
          <div>
            <p className="text-lg mb-6">
              Don't let outdated or inefficient systems hold your business back. With our expert consulting, you can build robust, scalable architectures that give you a competitive edge.
            </p>
            <p className="text-lg mb-8">
              At Greyquill Software, we combine deep technical expertise with business acumen to help you navigate the complexities of modern distributed systems and cloud architecture.
            </p>
            <div className="text-center mb-8">
              <h3 className="text-xl font-tektur text-blue-700 mb-4">Let's start your cloud transformation journey today</h3>
              <BookDiscoveryCallButton />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DistributedSystemsCloudConsulting;