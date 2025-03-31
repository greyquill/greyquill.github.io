import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle, FaArrowRight, FaArrowLeft,
  FaCode, FaRocket, FaHandshake, FaClipboardCheck, FaComments, FaLaptopCode, FaTools,
  FaBrain, FaSearch } from 'react-icons/fa';

const CustomSoftwareDevelopment = () => {
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
    { id: 'initial-engagement', title: 'Initial Engagement', icon: <FaHandshake /> },
    { id: 'requirements', title: 'Requirements', icon: <FaClipboardCheck /> },
    { id: 'workshops', title: 'Workshops', icon: <FaUsers /> },
    { id: 'analysis', title: 'Analysis', icon: <FaBrain /> },
    { id: 'prototype', title: 'Prototyping', icon: <FaSearch /> },
    { id: 'documentation', title: 'Documentation', icon: <FaClipboardCheck /> },
    { id: 'review', title: 'Review & Sign-off', icon: <FaCheckCircle /> },
    { id: 'development', title: 'Development', icon: <FaLaptopCode /> },
    { id: 'improvement', title: 'Improvement', icon: <FaRocket /> }
  ];

  // Content for each section
  const sectionContent = {
    'intro': (
      <div>
        <p className="text-lg mb-6">
          Wondering how custom software could transform your business? At Greyquill Software, we've perfected a
          development process that's all about you—your goals, your challenges, and your vision for the future.
        </p>
        <p className="text-lg mb-6">
          We don't just write code; we solve problems. Our approach combines cutting-edge technology with
          old-fashioned attention to detail, creating solutions that not only work beautifully but grow with your business.
        </p>
        <div className="flex justify-center mb-8">
          <motion.img
            src="/images/custom_software.png"
            alt="Custom Software Development"
            className="max-w-xs rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <p className="text-lg mb-6">
          Let's explore how we turn your ideas into powerful, practical software solutions—from that first
          conversation all the way to launch day and beyond.
        </p>
      </div>
    ),
    'initial-engagement': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaHandshake className="mr-2" /> Getting to Know You and Your Business
        </h3>
        <p className="mb-4">
          Every great software solution starts with a conversation. Here's how we begin our journey together:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            We sit down with you (virtually or in person) to hear your story—what's working, what's not, and where you want to go
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Our team asks thoughtful questions to uncover the root causes of challenges, not just the symptoms
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            We look at your current systems to understand what we're working with
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Together, we start sketching a vision of what success looks like for your project
          </motion.li>
        </ul>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">Usually takes about 1-2 weeks</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A clear project brief that captures your vision and sets us up for success</p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4 italic mb-6">
          "The questions Greyquill asked in our first few meetings showed they were really listening. They understood our business challenge before proposing any solutions." — Past Client
        </div>
      </div>
    ),
    'requirements': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaClipboardCheck className="mr-2" /> Turning Conversations into Clear Requirements
        </h3>
        <p className="mb-4">
          Now we get down to details, creating a roadmap that will guide the entire project:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white border border-gray-200 p-5 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2">Who We Talk To</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Your leadership team</li>
              <li>End users who'll use the software</li>
              <li>IT staff who'll support it</li>
              <li>Other key stakeholders</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 p-5 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-2">What We Capture</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>User personas and journeys</li>
              <li>Current process maps</li>
              <li>Pain points and opportunities</li>
              <li>Technical constraints</li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaRocket className="mr-2" /> The Business Requirements Document
        </h3>
        <p className="mb-4">
          Everything gets documented in a clear, comprehensive Business Requirements Document (BRD) that becomes our north star for the project.
        </p>

        <motion.div
          className="flex items-center mb-6 bg-blue-50 p-4 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
            <FaCheckCircle />
          </div>
          <div>
            <h4 className="font-tektur text-blue-700">Not Just Technical Jargon</h4>
            <p>We write requirements in plain language that both business and technical teams can understand</p>
          </div>
        </motion.div>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 2-3 weeks</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A comprehensive BRD that becomes the single source of truth for what we're building</p>
        </div>
      </div>
    ),
    'workshops': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaUsers className="mr-2" /> Bringing Everyone Together
        </h3>
        <p className="mb-4">
          Great ideas emerge when minds connect. Our collaborative workshops bring your team together with ours to refine our understanding and spark innovation:
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
              <FaComments size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Open Dialogue</h4>
            <p>Everyone's voice matters—from executives to end users</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaBrain size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Idea Generation</h4>
            <p>Creative exercises to explore different approaches to your challenges</p>
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
            <h4 className="font-tektur text-blue-700 mb-2">Priority Setting</h4>
            <p>Determining what features will deliver the most value first</p>
          </motion.div>
        </div>

        <p className="mb-4">
          These workshops aren't just about gathering information—they're about building trust and ensuring everyone feels invested in the project's success.
        </p>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 1-2 weeks</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>Validated requirements, detailed use cases, and process flow diagrams that everyone agrees on</p>
        </div>
      </div>
    ),
    'analysis': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaBrain className="mr-2" /> Deep Dive Analysis
        </h3>
        <p className="mb-4">
          Now we put on our detective hats, analyzing your requirements from both business and technical perspectives:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Business Analysis</h4>
            <p className="mb-3">We make sure the solution will deliver real value by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Aligning features with your strategic goals</li>
              <li>Identifying potential ROI and business impact</li>
              <li>Ensuring compliance with industry regulations</li>
              <li>Considering scalability for future growth</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Technical Analysis</h4>
            <p className="mb-3">We determine the best way to build your solution by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Evaluating your current infrastructure</li>
              <li>Researching optimal technology stacks</li>
              <li>Identifying potential technical challenges</li>
              <li>Planning for security and performance</li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaTools className="mr-2" /> Building the Framework
        </h3>
        <p className="mb-6">
          Based on our analysis, we create a high-level system architecture—think of it as the blueprint for your software.
        </p>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 2-3 weeks</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A Technical Feasibility Report, risk assessment plan, and high-level system architecture</p>
        </div>
      </div>
    ),
    'prototype': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaSearch className="mr-2" /> Seeing is Believing
        </h3>
        <p className="mb-4">
          For many projects, we create a prototype or proof of concept—a working model that lets you experience key aspects of your solution before full development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-tektur text-blue-700 mb-3">Why We Prototype</h4>
            <ul className="space-y-3">
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                  <FaCheckCircle size={16} />
                </div>
                <span>Test key features with actual users</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                  <FaCheckCircle size={16} />
                </div>
                <span>Validate technical approaches</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                  <FaCheckCircle size={16} />
                </div>
                <span>Identify potential issues early</span>
              </motion.li>
              <motion.li
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                  <FaCheckCircle size={16} />
                </div>
                <span>Get a tangible feel for the final product</span>
              </motion.li>
            </ul>
          </div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Real-World Example</h4>
            <p className="italic border-l-4 border-blue-200 pl-4 py-1">
              "For a photo printing company, we created an HTML5 prototype of their photo book builder. This allowed users to test the interface and gave the client confidence in our approach before full development."
            </p>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 3-4 weeks (depends on complexity)</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A functional prototype that demonstrates key aspects of your solution and helps refine our approach</p>
        </div>

        <div className="text-sm text-gray-500 italic">
          Note: The prototype phase is optional and recommended for more complex projects or innovative features.
        </div>
      </div>
    ),
    'documentation': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaClipboardCheck className="mr-2" /> Creating the Blueprint
        </h3>
        <p className="mb-4">
          At this stage, we bring everything together into a detailed Project Requirements Document (PRD)—the master plan for your software's development.
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
                <FaCode />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Functional Requirements</h4>
                <p>What the software will do, feature by feature</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaCogs />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Non-Functional Requirements</h4>
                <p>Performance, security, and other quality attributes</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaChartLine />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Project Roadmap</h4>
                <p>Timeline, milestones, and development phases</p>
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
                <h4 className="font-tektur text-blue-700">Budget Plan</h4>
                <p>Detailed cost breakdown and resource allocation</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 2-3 weeks</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A comprehensive project plan that serves as the blueprint for development and a reference for future maintenance</p>
        </div>
      </div>
    ),
    'review': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCheckCircle className="mr-2" /> Final Alignment Before We Build
        </h3>
        <p className="mb-4">
          Before we start building, we want to make sure we're all on the same page—that's what this final review is all about.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            className="col-span-3 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaLightbulb size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Presentation</h4>
            <p>We walk through the entire project plan, explaining our approach and the reasoning behind it</p>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaComments size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Q&A Session</h4>
            <p>We answer any questions and address concerns to ensure complete clarity</p>
          </motion.div>

          <motion.div
            className="col-span-3 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaHandshake size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Sign-off</h4>
            <p>Your formal approval signals we're ready to start building</p>
          </motion.div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">About 1 week</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>Peace of mind knowing that we're aligned on expectations and ready to begin development</p>
        </div>
      </div>
    ),
    'development': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaLaptopCode className="mr-2" /> Bringing Your Software to Life
        </h3>
        <p className="mb-4">
          Now the exciting part begins—we start building your software using Agile methods that keep you involved every step of the way.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="font-tektur text-blue-700 mb-3">Our Agile Approach</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h5 className="font-tektur text-blue-600 mb-2">Sprint Planning</h5>
              <p className="mb-4">We break the work into 2-4 week "sprints," focusing on the most valuable features first</p>

              <h5 className="font-tektur text-blue-600 mb-2">Daily Stand-ups</h5>
              <p>Quick 15-minute meetings keep everyone synchronized and address any blockers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="font-tektur text-blue-600 mb-2">Sprint Reviews</h5>
              <p className="mb-4">At the end of each sprint, we show you what we've built and get your feedback</p>

              <h5 className="font-tektur text-blue-600 mb-2">Retrospectives</h5>
              <p>We continuously improve our process based on what's working and what could be better</p>
            </motion.div>
          </div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaTools className="mr-2" /> Quality at Every Step
        </h3>
        <p className="mb-4">
          We don't just build—we build with quality in mind:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Code reviews ensure best practices and maintainability
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Automated testing catches issues before they become problems
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Continuous integration keeps everything running smoothly
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Security reviews protect your data and users
          </motion.li>
        </ul>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">Typically 3-6 months for mid-scale projects</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A high-quality, fully functional software solution delivered on time and within budget</p>
        </div>
      </div>
    ),
    'improvement': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaRocket className="mr-2" /> Your Software's Journey Continues
        </h3>
        <p className="mb-4">
          Our relationship doesn't end at launch—it's just beginning. We stay with you to ensure your software continues to deliver value as your business evolves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Ongoing Support</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Responsive technical support when you need it</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Bug fixes and security updates</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Performance monitoring and optimization</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>User training and documentation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700 mb-3">Continuous Growth</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Regular strategy sessions to plan enhancements</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>New feature development as your needs evolve</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Technology updates to keep your system current</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>Scaling support as your business grows</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaUsers className="mr-2" /> Partnership for the Long Haul
        </h3>
        <p className="mb-6">
          We believe in building lasting relationships with our clients. Many of our client engagements span years or even decades, with software that evolves alongside their business.
        </p>

        <div className="bg-blue-50 p-5 rounded-lg shadow mb-6">
          <h4 className="font-tektur text-blue-700 mb-2">Timeframe</h4>
          <p className="mb-2">Ongoing, with quarterly reviews and planned enhancement cycles</p>

          <h4 className="font-tektur text-blue-700 mb-2 mt-4">What You Get</h4>
          <p>A software solution that continues to adapt and deliver value as your business grows and changes</p>
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
          Custom Software Development
        </h1>
        <p className="text-xl font-titillium text-center mb-10">
          Turning Your Business Challenges into Powerful Digital Solutions
        </p>
      </motion.div>

      {/* Section Navigation */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-tektur text-blue-700 mb-4">Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
          <h2 className="text-2xl font-tektur text-blue-700 mb-6 text-center">Ready to Build Something Amazing?</h2>
          <div>
            <p className="text-lg mb-6">
              Ready to bring your software idea to life? Let's work together to create a solution that's perfectly tailored to your needs.
            </p>
            <p className="text-lg mb-8">
              At Greyquill Software, we don't just build software—we build partnerships. Our team is ready to guide you through every step of the journey, from that first conversation to launch day and beyond.
            </p>
            <div className="text-center mb-8">
              <h3 className="text-xl font-tektur text-blue-700 mb-4">Let's start your custom software journey today</h3>
              <BookDiscoveryCallButton />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;