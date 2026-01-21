import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaLightbulb, FaCheckCircle, FaExchangeAlt, FaChartLine, FaCogs,
  FaClipboardCheck, FaUsers, FaRocket, FaLayerGroup, FaServer, FaCloud,
  FaCode, FaSitemap, FaLaptopCode, FaShieldAlt, FaBrain
} from 'react-icons/fa';

const LegacyApplicationModernization = () => {
  const sevenRs = [
    { icon: <FaLayerGroup />, title: "Retain/Encapsulate", desc: "Keep your system in place but create modern interfaces around it—great for stable systems that just need better integration" },
    { icon: <FaServer />, title: "Rehost", desc: "Move your application 'as-is' to a modern environment (like the cloud)—fast results with minimal code changes" },
    { icon: <FaCloud />, title: "Replatform", desc: "Make targeted updates to your application so it works better with modern platforms—balancing speed and improvement" },
    { icon: <FaCode />, title: "Refactor", desc: "Improve your existing code without changing how it works externally—better performance and easier maintenance" },
    { icon: <FaSitemap />, title: "Rearchitect", desc: "Redesign how your application is structured for better performance and integration—addressing fundamental limitations" },
    { icon: <FaLaptopCode />, title: "Rebuild", desc: "Rewrite your application from scratch while keeping the same functionality—clean slate with modern technology" },
    { icon: <FaExchangeAlt />, title: "Replace", desc: "Adopt a new solution that provides similar capabilities—sometimes buying is better than building" }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Legacy Application Modernization - Greyquill Software</title>
        <meta name="description" content="Modernize your legacy applications with Greyquill. Business-driven modernization strategy, value preservation, phased implementation, and future-proofing with modern architectures." />
        <link rel="canonical" href="https://greyquill.io/legacy-application-modernization" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Services</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          Legacy Application Modernization
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Breathe new life into your valuable systems and unlock their full potential without disrupting operations.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <p className="text-lg text-gray-600 mb-4">
            Are your mission-critical systems starting to show their age? You're not alone. Many businesses run on applications
            that have served them well for years—even decades—but are now becoming difficult to maintain and adapt to changing needs.
          </p>
          <p className="text-gray-600 mb-4">
            At Greyquill Software, we specialize in breathing new life into legacy applications. We don't just update
            technology—we transform outdated systems into modern, agile assets that support your business growth.
          </p>
          <p className="text-gray-600">
            Our approach balances innovation with pragmatism—preserving the valuable business logic you've built over years
            while updating technology platforms, interfaces, and architecture to meet today's needs and tomorrow's challenges.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaSitemap />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Smart Modernization, Not Just Technology Updates</h2>
        </div>

        <p className="text-gray-600 mb-6">
          We take a strategic approach to legacy modernization that goes beyond just updating code or migrating to new platforms:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <FaLightbulb />, title: "Business-First", desc: "We start with your business goals and challenges, not just the technology" },
            { icon: <FaLayerGroup />, title: "Value Preservation", desc: "We identify and preserve the valuable parts of your existing systems" },
            { icon: <FaRocket />, title: "Future-Focused", desc: "We build for both your needs today and your growth tomorrow" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="font-tektur text-[#0B4F88] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Our Process at a Glance</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: 1, title: "Comprehensive Assessment", desc: "We thoroughly evaluate your existing systems from both technical and business perspectives" },
            { step: 2, title: "Strategic Planning", desc: "We determine the best approach for each application based on its value and current state" },
            { step: 3, title: "Phased Implementation", desc: "We implement changes in carefully planned increments to minimize disruption" },
            { step: 4, title: "Continuous Support", desc: "We stay with you through the transition and beyond, ensuring success" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B4F88] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="font-tektur text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 7 R's Framework */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaExchangeAlt />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">The 7 R's: Our Modernization Toolkit</h2>
        </div>

        <p className="text-gray-600 mb-6">
          At Greyquill, we use the industry-proven "7 R's" framework to guide our modernization decisions.
          Think of it as a toolbox—each approach is useful for specific situations and challenges:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {sevenRs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#0B4F88] text-white flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <h4 className="font-tektur text-[#0B4F88]">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-4"
          style={{
            background: 'rgba(11, 79, 136, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h4 className="font-tektur text-[#0B4F88] mb-2">Our Approach</h4>
          <p className="text-gray-600 text-sm">
            We don't believe in one-size-fits-all solutions. After careful assessment, we may recommend different approaches
            for different parts of your system based on business value, risk, and technical condition.
          </p>
        </div>
      </section>

      {/* Modernization Strategies */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaChartLine />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Finding the Right Modernization Strategy</h2>
        </div>

        <p className="text-gray-600 mb-6">
          There are two main approaches to modernization—we'll help you choose the one that best fits your business needs and risk tolerance:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-[#0B4F88] text-xl" />
              <h3 className="font-tektur text-gray-800 text-xl">Revolutionary</h3>
            </div>
            <p className="text-gray-600 mb-4">Complete transformation in a shorter timeframe.</p>
            <div className="mb-4">
              <h4 className="font-tektur text-[#0B4F88] text-sm mb-2">Best When You Need:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Rapid transformation</li>
                <li>• Major competitive advantages</li>
                <li>• To escape critical system limitations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-tektur text-[#0B4F88] text-sm mb-2">Considerations:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Higher initial disruption</li>
                <li>• More upfront investment</li>
                <li>• Faster overall completion</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLayerGroup className="text-[#0B4F88] text-xl" />
              <h3 className="font-tektur text-gray-800 text-xl">Evolutionary</h3>
            </div>
            <p className="text-gray-600 mb-4">Phased approach with gradual improvements over time.</p>
            <div className="mb-4">
              <h4 className="font-tektur text-[#0B4F88] text-sm mb-2">Best When You Need:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Minimal business disruption</li>
                <li>• Distributed costs over time</li>
                <li>• To maintain operational stability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-tektur text-[#0B4F88] text-sm mb-2">Considerations:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Longer overall timeline</li>
                <li>• More manageable change process</li>
                <li>• Earlier benefits for high-priority areas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-3 pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
          "Greyquill helped us modernize our order management system that had been in place for over 15 years. They took an evolutionary approach that allowed us to transform without disrupting our daily operations." — Manufacturing Client
        </div>
      </section>

      {/* Automation Benefits */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaCogs />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Enhancing Your Systems with Automation</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Modern applications aren't just about new technology platforms—they're about working smarter.
          Automation is a key part of most modernization projects we undertake:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { title: "Time-Saving Automation", items: ["Data entry and validation workflows", "Report generation and scheduling", "Document processing and management"] },
            { title: "Smarter Analytics", items: ["AI-powered data processing and insights", "Predictive analytics and forecasting", "Automated dashboard generation"] },
            { title: "Streamlined Workflows", items: ["AI-assisted project management", "Intelligent resource allocation", "Automated milestone tracking and alerts"] }
          ].map((category, idx) => (
            <div
              key={idx}
              className="rounded-lg p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <h4 className="font-tektur text-[#0B4F88] mb-3 text-center">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Real Business Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Increased Productivity", desc: "Automate repetitive tasks so your team can focus on higher-value work" },
            { title: "Better Decision Making", desc: "Gain accurate, timely insights to guide your business strategy" },
            { title: "Reduced Errors", desc: "Minimize mistakes and inconsistencies with automated validation" },
            { title: "Improved Customer Experience", desc: "Deliver faster, more consistent service to your clients" }
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{
                background: 'rgba(11, 79, 136, 0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
              }}
            >
              <h4 className="font-tektur text-[#0B4F88] mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaClipboardCheck />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Our Proven Modernization Method</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Modernizing legacy applications isn't just a technical challenge—it's a business transformation. Our methodology addresses both aspects:
        </p>

        <div className="space-y-6">
          {[
            {
              phase: "Phase 1: Assessment & Planning",
              whatWeDo: ["Audit your current systems and infrastructure", "Evaluate business value and criticality", "Identify technical debt and constraints", "Engage stakeholders to understand business goals"],
              whatYouGet: ["Comprehensive system assessment report", "Modernization options with pros and cons", "Initial cost and timeline estimates", "Clear priorities based on business impact"]
            },
            {
              phase: "Phase 2: Design & Architecture",
              whatWeDo: ["Define the target architecture", "Create data migration strategy", "Design security and integration approaches", "Plan for operational continuity"],
              whatYouGet: ["Detailed technical architecture diagrams", "Implementation roadmap with phases", "Technology stack recommendations", "Risk mitigation strategies"]
            },
            {
              phase: "Phase 3: Implementation & Transition",
              whatWeDo: ["Execute the modernization plan in phases", "Conduct thorough testing at each stage", "Train users on new systems and processes", "Provide support through the transition"],
              whatYouGet: ["Transformed applications with minimal disruption", "Knowledge transfer and documentation", "Trained staff ready to use new systems", "Progressive realization of business benefits"]
            }
          ].map((phase, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
                borderLeft: '3px solid #0B4F88'
              }}
            >
              <h3 className="font-tektur text-[#0B4F88] text-lg mb-4">{phase.phase}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-tektur text-gray-700 mb-3">What We Do</h4>
                  <ul className="space-y-2">
                    {phase.whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-tektur text-gray-700 mb-3">What You Get</h4>
                  <ul className="space-y-2">
                    {phase.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Change Management */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaUsers />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Managing the Human Side of Change</h2>
        </div>

        <p className="text-gray-600 mb-6">
          The most challenging part of modernization isn't the technology—it's helping people adapt to new ways of working.
          At Greyquill, we put as much thought into change management as we do into technical implementation:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt className="text-[#0B4F88] text-xl" />
              <h3 className="font-tektur text-gray-800">Risk Mitigation</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Early risk assessment that identifies potential challenges before they become problems",
                "Rollback plans and comprehensive backups to protect against unexpected issues",
                "Phased implementation to limit disruption and allow for adjustments",
                "Pilot testing in controlled environments before full deployment"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-[#0B4F88] text-xl" />
              <h3 className="font-tektur text-gray-800">People-Centered Approach</h3>
            </div>
            <ul className="space-y-2">
              {[
                "Clear communication that keeps everyone informed about goals, progress, and impacts",
                "Comprehensive training programs tailored to different user groups",
                "Ongoing support resources to help users adapt to new systems",
                "Feedback mechanisms to continuously improve the experience"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{
            background: 'rgba(11, 79, 136, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h4 className="font-tektur text-[#0B4F88] mb-4">Our Change Management Philosophy</h4>
          <p className="text-gray-600 mb-4">We believe successful modernization requires balancing three key elements:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Technology", desc: "Selecting the right tools and platforms for your needs" },
              { title: "Process", desc: "Optimizing workflows to take advantage of new capabilities" },
              { title: "People", desc: "Helping users adapt to and embrace the changes" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4" style={{ borderLeft: '3px solid #0B4F88' }}>
                <h5 className="font-tektur text-[#0B4F88] mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future-Proofing */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaRocket />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Building for the Future, Not Just Today</h2>
        </div>

        <p className="text-gray-600 mb-6">
          When we modernize your applications, we're not just solving today's problems—we're preparing your systems
          for future growth and innovation.
        </p>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Embracing Modern Technology</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <FaBrain />, title: "AI and Machine Learning", desc: "Intelligent capabilities that learn and improve over time" },
            { icon: <FaCloud />, title: "Cloud-Native Architecture", desc: "Scalable, resilient systems that grow with your business" },
            { icon: <FaCode />, title: "Low-Code Platforms", desc: "Faster adaptation to changing business requirements" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <h4 className="font-tektur text-[#0B4F88] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Continuous Modernization</h3>
        <p className="text-gray-600 mb-4">
          Instead of treating modernization as a one-time project, we help you establish a culture of ongoing improvement:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Regular System Assessments", desc: "Scheduled evaluations to ensure your systems continue to meet evolving business needs" },
            { title: "Agile Enhancement Cycles", desc: "Iterative improvements based on user feedback and business value" },
            { title: "Technology Radar Monitoring", desc: "Keeping you informed about relevant technological advancements" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-tektur text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Modernize Your Legacy Systems?</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Don't let outdated applications hold your business back. With our proven modernization approach, you can transform your legacy systems into agile, powerful assets that drive your business forward.
        </p>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's work together to breathe new life into your valuable systems while minimizing risk and disruption.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default LegacyApplicationModernization;
