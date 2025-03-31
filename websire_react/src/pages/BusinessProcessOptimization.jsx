import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BusinessProcessOptimization = () => {
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

  // Sections data (excluding conclusion)
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <FaLightbulb /> },
    { id: 'core-practices', title: 'Core Business Practices', icon: <FaChartLine /> },
    { id: 'process-management', title: 'Process Management', icon: <FaCogs /> },
    { id: 'tech-integration', title: 'Technology Integration', icon: <FaChartLine /> },
    { id: 'client-relationships', title: 'Client Relationships', icon: <FaUsers /> },
    { id: 'strategic-growth', title: 'Strategic Growth', icon: <FaChartLine /> }
  ];

  // Content for each section
  const sectionContent = {
    'intro': (
      <div>
        <p className="text-lg mb-6">
          Have you ever wondered what makes some consulting firms stand out while others struggle to keep up?
          The secret isn't just about having the right tools or processes—it's about how you use them to create
          real value for your clients. Let's explore how top-performing businesses are transforming their operations
          and delivering exceptional results.
        </p>
        <div className="flex justify-center mb-8">
          <motion.img
            src="/images/process_optimization.png"
            alt="Business Process Optimization"
            className="max-w-xs rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    ),
    'core-practices': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCheckCircle className="mr-2" /> Building Your Foundation
        </h3>
        <p className="mb-4">
          Think of your business processes as the foundation of your house. The stronger the foundation,
          the more you can build on top of it. Here's what we've seen work really well for successful firms:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Create a clear roadmap for your projects—from the first meeting to final delivery
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Use proven methods like Agile or Scrum to keep your team aligned and moving forward
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Keep everyone on the same page with smart project management tools
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Stay on track by regularly checking in on your project's progress
          </motion.li>
        </ul>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Making the Most of Your Team
        </h3>
        <p className="mb-4">
          Your team is your greatest asset. Here's how successful firms help their people thrive:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Get to know your team's strengths and match them to the right projects
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Keep your team engaged by making sure everyone has meaningful work
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Help your team grow by sharing knowledge and skills
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Let your senior team focus on what they do best—solving complex problems
          </motion.li>
        </ul>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Creating Value That Matters
        </h3>
        <p className="mb-4">
          The best firms focus on what really matters to their clients:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Charge based on the value you create, not just the time you spend
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Package your services in ways that make sense for your clients
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Build lasting relationships with ongoing support and guidance
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Start with a discovery session to understand your client's needs
          </motion.li>
        </ul>
      </div>
    ),
    'process-management': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCogs className="mr-2" /> Making Your Processes Work Better
        </h3>
        <p className="mb-4">
          In terms of management, a good analogy is a well-oiled machine. When everything works together smoothly,
          you get better results with less effort. Here's how we help businesses improve their processes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Take a close look at how things are working now—what's working well and what's not?
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Find the bottlenecks and slow spots that are holding you back
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Create a clear plan to make things run more smoothly
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Keep an eye on how things are going and make improvements along the way
          </motion.li>
        </ul>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Real Results That Matter
        </h3>
        <p className="mb-4">
          When you improve your processes, you'll see these benefits:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-blue-50 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700">Get More Done</h4>
            <p>Find ways to work smarter, not harder, and save money in the process</p>
          </motion.div>
          <motion.div
            className="bg-blue-50 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700">Work Faster</h4>
            <p>Speed up your work with better processes and helpful tools</p>
          </motion.div>
          <motion.div
            className="bg-blue-50 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700">Stay on Track</h4>
            <p>Make sure everything you do helps you reach your goals</p>
          </motion.div>
          <motion.div
            className="bg-blue-50 p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-tektur text-blue-700">Reduce Risks</h4>
            <p>Spot potential problems before they happen and handle them smoothly</p>
          </motion.div>
        </div>
      </div>
    ),
    'tech-integration': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Making Technology Work for You
        </h3>
        <p className="mb-4">
          Technology should make your life easier, not harder. Here's how to use it effectively:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Use tools to handle the boring stuff, so you can focus on what matters
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Give your team tools that help them do their best work
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Start by understanding what you're doing now, then find ways to make it better
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Use smart tools to give your clients a better experience
          </motion.li>
        </ul>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCogs className="mr-2" /> Using Data to Make Better Decisions
        </h3>
        <p className="mb-4">
          Good decisions come from good information. Here's how to use data effectively:
        </p>
        <div className="relative pb-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          <div className="relative z-10">
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaCogs />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Smart Analytics</h4>
                <p>Use tools to understand what's happening in your business</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center mb-8 flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaChartLine />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Track Progress</h4>
                <p>Keep an eye on how well things are going and adjust as needed</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4">
                <FaArrowRight />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Gather Data Easily</h4>
                <p>Make collecting and using information simple and efficient</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4">
                <FaUsers />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-tektur text-blue-700">Listen to Your Clients</h4>
                <p>Use feedback to make your services better and better</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    'client-relationships': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaUsers className="mr-2" /> Building Strong Client Relationships
        </h3>
        <p className="mb-4">
          Your clients are the heart of your business. Here's how to build lasting relationships:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Tell your story in a way that shows how you can help
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Create content that speaks directly to your clients' needs
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Be there for your clients every step of the way
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Reach out to the right people in the right way
          </motion.li>
        </ul>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaCheckCircle className="mr-2" /> Becoming a Trusted Advisor
        </h3>
        <p className="mb-4">
          Show your clients that you're the expert they can count on:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaLightbulb size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Share Your Knowledge</h4>
            <p>Write helpful articles and guides that show your expertise</p>
          </motion.div>
          <motion.div
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaUsers size={24} />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Connect with Your Community</h4>
            <p>Host events and webinars to share what you know</p>
          </motion.div>
          <motion.div
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaArrowRight />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Show Real Value</h4>
            <p>Help clients see how your solutions make a difference</p>
          </motion.div>
          <motion.div
            className="col-span-2 md:col-span-1 bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg shadow flex flex-col items-center text-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-blue-500 text-white p-3 rounded-full mb-3">
              <FaArrowRight />
            </div>
            <h4 className="font-tektur text-blue-700 mb-2">Stay Connected</h4>
            <p>Use social media to share insights and stay in touch</p>
          </motion.div>
        </div>
      </div>
    ),
    'strategic-growth': (
      <div>
        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaChartLine className="mr-2" /> Staying Ahead of the Game
        </h3>
        <p className="mb-4">
          The business world is always changing. Here's how to stay ahead:
        </p>
        <div className="space-y-4 mb-6">
          <motion.div
            className="bg-white p-4 border-l-4 border-blue-500 rounded shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-tektur text-blue-700">Going Green</h4>
            <p>Help clients with sustainability and social responsibility</p>
          </motion.div>
          <motion.div
            className="bg-white p-4 border-l-4 border-blue-500 rounded shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-tektur text-blue-700">Going Global</h4>
            <p>Work with clients around the world to grow your reach</p>
          </motion.div>
          <motion.div
            className="bg-white p-4 border-l-4 border-blue-500 rounded shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-tektur text-blue-700">Flexible Working</h4>
            <p>Mix in-person and online services to meet client needs</p>
          </motion.div>
          <motion.div
            className="bg-white p-4 border-l-4 border-blue-500 rounded shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-tektur text-blue-700">Digital First</h4>
            <p>Use the latest technology to stay competitive</p>
          </motion.div>
        </div>

        <h3 className="text-xl font-tektur text-blue-700 mb-4 flex items-center">
          <FaArrowRight className="mr-2" /> Growing Your Business
        </h3>
        <p className="mb-4">
          Keep your business growing and improving:
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <ul className="space-y-3">
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                <FaChartLine size={16} />
              </div>
              <span>Build systems that help you grow without getting overwhelmed</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                <FaUsers size={16} />
              </div>
              <span>Create a clear vision that guides your team's decisions</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                <FaChartLine size={16} />
              </div>
              <span>Look beyond just money to measure how well you're doing</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                <FaArrowRight size={16} />
              </div>
              <span>Keep learning and growing to stay ahead</span>
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-blue-500 rounded-full p-1 text-white mr-3">
                <FaCogs size={16} />
              </div>
              <span>Focus on what you do best and get help with the rest</span>
            </motion.li>
          </ul>
        </div>
      </div>
    ),
    'conclusion': (
      <div>
        <p className="text-lg mb-6">
          Ready to transform your business? The path to success isn't about following a rigid formula—it's about finding the right mix of proven strategies that work for you. Whether you're just starting out or looking to scale up, the key is to take action on what matters most to your business right now.
        </p>
        <p className="text-lg mb-8">
          Think of it like building a custom toolkit: you don't need to implement everything at once. Start with the tools that will give you the biggest impact today, and build from there. The most successful businesses we work with are the ones that take that first step forward.
        </p>
        <div className="text-center mb-8">
          <h3 className="text-xl font-tektur text-blue-700 mb-4">Let's start optimizing your business processes today</h3>
          <BookDiscoveryCallButton />
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
          Business Process Optimization
        </h1>
        <p className="text-xl font-titillium text-center mb-10">
          Unlock Your Business Potential with Proven Strategies
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
          <h2 className="text-2xl font-tektur text-blue-700 mb-6 text-center">Conclusion</h2>
          {sectionContent['conclusion']}
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessProcessOptimization;