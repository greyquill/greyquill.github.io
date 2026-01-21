import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaHandshake, FaClipboardCheck, FaUsers, FaBrain, FaSearch,
  FaLaptopCode, FaRocket, FaCheckCircle, FaCode, FaCogs, FaChartLine
} from 'react-icons/fa';

const CustomSoftwareDevelopment = () => {
  const phases = [
    {
      icon: <FaHandshake />,
      title: "Initial Engagement",
      subtitle: "Getting to Know You and Your Business",
      timeframe: "1-2 weeks",
      description: "Every great software solution starts with a conversation. We sit down with you to hear your story—what's working, what's not, and where you want to go.",
      activities: [
        "We sit down with you (virtually or in person) to hear your story",
        "Our team asks thoughtful questions to uncover the root causes of challenges",
        "We look at your current systems to understand what we're working with",
        "Together, we start sketching a vision of what success looks like"
      ],
      deliverable: "A clear project brief that captures your vision and sets us up for success"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Requirements",
      subtitle: "Turning Conversations into Clear Requirements",
      timeframe: "2-3 weeks",
      description: "Now we get down to details, creating a roadmap that will guide the entire project.",
      stakeholders: ["Your leadership team", "End users who'll use the software", "IT staff who'll support it", "Other key stakeholders"],
      captures: ["User personas and journeys", "Current process maps", "Pain points and opportunities", "Technical constraints"],
      deliverable: "A comprehensive Business Requirements Document (BRD) that becomes the single source of truth"
    },
    {
      icon: <FaUsers />,
      title: "Workshops",
      subtitle: "Bringing Everyone Together",
      timeframe: "1-2 weeks",
      description: "Great ideas emerge when minds connect. Our collaborative workshops bring your team together with ours to refine our understanding and spark innovation.",
      activities: [
        "Open dialogue where everyone's voice matters—from executives to end users",
        "Creative exercises to explore different approaches to your challenges",
        "Priority setting to determine what features deliver the most value first"
      ],
      deliverable: "Validated requirements, detailed use cases, and process flow diagrams that everyone agrees on"
    },
    {
      icon: <FaBrain />,
      title: "Analysis",
      subtitle: "Deep Dive Analysis",
      timeframe: "2-3 weeks",
      description: "Now we put on our detective hats, analyzing your requirements from both business and technical perspectives.",
      business: ["Aligning features with your strategic goals", "Identifying potential ROI and business impact", "Ensuring compliance with industry regulations", "Considering scalability for future growth"],
      technical: ["Evaluating your current infrastructure", "Researching optimal technology stacks", "Identifying potential technical challenges", "Planning for security and performance"],
      deliverable: "A Technical Feasibility Report, risk assessment plan, and high-level system architecture"
    },
    {
      icon: <FaSearch />,
      title: "Prototyping",
      subtitle: "Seeing is Believing",
      timeframe: "3-4 weeks",
      optional: true,
      description: "For many projects, we create a prototype or proof of concept—a working model that lets you experience key aspects of your solution before full development.",
      benefits: ["Test key features with actual users", "Validate technical approaches", "Identify potential issues early", "Get a tangible feel for the final product"],
      deliverable: "A functional prototype that demonstrates key aspects of your solution"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Documentation",
      subtitle: "Creating the Blueprint",
      timeframe: "2-3 weeks",
      description: "At this stage, we bring everything together into a detailed Project Requirements Document (PRD)—the master plan for your software's development.",
      includes: ["Functional Requirements: What the software will do, feature by feature", "Non-Functional Requirements: Performance, security, and quality attributes", "Project Roadmap: Timeline, milestones, and development phases", "Budget Plan: Detailed cost breakdown and resource allocation"],
      deliverable: "A comprehensive project plan that serves as the blueprint for development"
    },
    {
      icon: <FaCheckCircle />,
      title: "Review & Sign-off",
      subtitle: "Final Alignment Before We Build",
      timeframe: "1 week",
      description: "Before we start building, we want to make sure we're all on the same page—that's what this final review is all about.",
      activities: ["We walk through the entire project plan, explaining our approach", "We answer any questions and address concerns to ensure complete clarity", "Your formal approval signals we're ready to start building"],
      deliverable: "Peace of mind knowing that we're aligned on expectations and ready to begin development"
    },
    {
      icon: <FaLaptopCode />,
      title: "Development",
      subtitle: "Bringing Your Software to Life",
      timeframe: "3-6 months (typical)",
      description: "Now the exciting part begins—we start building your software using Agile methods that keep you involved every step of the way.",
      agile: ["Sprint Planning: We break the work into 2-4 week sprints, focusing on the most valuable features first", "Daily Stand-ups: Quick 15-minute meetings keep everyone synchronized", "Sprint Reviews: At the end of each sprint, we show you what we've built and get your feedback", "Retrospectives: We continuously improve our process based on what's working"],
      quality: ["Code reviews ensure best practices and maintainability", "Automated testing catches issues before they become problems", "Continuous integration keeps everything running smoothly", "Security reviews protect your data and users"],
      deliverable: "A high-quality, fully functional software solution delivered on time and within budget"
    },
    {
      icon: <FaRocket />,
      title: "Continuous Improvement",
      subtitle: "Your Software's Journey Continues",
      timeframe: "Ongoing",
      description: "Our relationship doesn't end at launch—it's just beginning. We stay with you to ensure your software continues to deliver value.",
      support: ["Responsive technical support when you need it", "Bug fixes and security updates", "Performance monitoring and optimization", "User training and documentation"],
      growth: ["Regular strategy sessions to plan enhancements", "New feature development as your needs evolve", "Technology updates to keep your system current", "Scaling support as your business grows"],
      deliverable: "A software solution that continues to adapt and deliver value as your business grows"
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Custom Software Development - Greyquill Software</title>
        <meta name="description" content="Transform your business challenges into powerful digital solutions. Collaborative, client-centered custom software development with comprehensive documentation and ongoing support." />
        <link rel="canonical" href="https://greyquill.io/custom-software-development" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Services</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          Custom Software Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Turning your business challenges into powerful digital solutions through a collaborative, client-centered approach.
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
            Wondering how custom software could transform your business? At Greyquill Software, we've perfected a
            development process that's all about you—your goals, your challenges, and your vision for the future.
          </p>
          <p className="text-gray-600 mb-4">
            We don't just write code; we solve problems. Our approach combines cutting-edge technology with
            old-fashioned attention to detail, creating solutions that not only work beautifully but grow with your business.
          </p>
          <p className="text-gray-600">
            Let's explore how we turn your ideas into powerful, practical software solutions—from that first
            conversation all the way to launch day and beyond.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Process</p>
          <h2 className="text-3xl font-tektur text-gray-800">From Idea to Implementation</h2>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              {/* Phase Header */}
              <div
                className="px-6 py-4"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[#0B4F88] text-xl">{phase.icon}</span>
                      <h3 className="text-xl font-tektur text-gray-800">{phase.title}</h3>
                      {phase.optional && (
                        <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-[#0B4F88] italic">"{phase.subtitle}"</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {phase.timeframe}
                  </div>
                </div>
              </div>

              {/* Phase Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{phase.description}</p>

                {/* Different content layouts based on phase data */}
                {phase.activities && (
                  <ul className="space-y-2 mb-4">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {phase.stakeholders && phase.captures && (
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Who We Talk To</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {phase.stakeholders.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">What We Capture</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {phase.captures.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {phase.business && phase.technical && (
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Business Analysis</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {phase.business.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Technical Analysis</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {phase.technical.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {phase.benefits && (
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {phase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-600">
                        <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {phase.includes && (
                  <ul className="space-y-2 mb-4">
                    {phase.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {phase.agile && phase.quality && (
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Our Agile Approach</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {phase.agile.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Quality at Every Step</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {phase.quality.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {phase.support && phase.growth && (
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Ongoing Support</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {phase.support.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'rgba(11, 79, 136, 0.04)',
                        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
                      }}
                    >
                      <h4 className="font-tektur text-[#0B4F88] mb-3">Continuous Growth</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {phase.growth.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Deliverable */}
                <div
                  className="rounded-lg p-4 mt-4"
                  style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    boxShadow: 'inset 0 0 0 1px rgba(34, 197, 94, 0.15)'
                  }}
                >
                  <h4 className="text-green-700 font-semibold mb-1">What You Get</h4>
                  <p className="text-gray-600 text-sm">{phase.deliverable}</p>
                </div>
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
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Build Something Amazing?</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Ready to bring your software idea to life? Let's work together to create a solution that's perfectly tailored to your needs.
        </p>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          At Greyquill Software, we don't just build software—we build partnerships. Our team is ready to guide you through every step of the journey.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default CustomSoftwareDevelopment;
