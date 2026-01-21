import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaRocket, FaUniversity, FaHeartbeat, FaIndustry, FaTruck,
  FaBell, FaEnvelope
} from 'react-icons/fa';

const CaseStudies = () => {
  // Placeholder case studies that will be published soon
  const upcomingCaseStudies = [
    {
      industry: "Financial Services",
      icon: <FaUniversity />,
      title: "AI-Powered Fraud Detection Platform",
      teaser: "How a regional bank reduced fraud losses by implementing real-time transaction monitoring with on-premise AI.",
      tags: ["AI Enablement", "On-Premise Deployment", "Compliance"]
    },
    {
      industry: "Healthcare",
      icon: <FaHeartbeat />,
      title: "Clinical Workflow Automation",
      teaser: "Streamlining patient intake and documentation for a multi-location healthcare provider while maintaining HIPAA compliance.",
      tags: ["Process Optimization", "HIPAA", "AI Assistants"]
    },
    {
      industry: "Manufacturing",
      icon: <FaIndustry />,
      title: "Predictive Maintenance System",
      teaser: "Reducing unplanned downtime by 40% through IoT sensor integration and machine learning-based failure prediction.",
      tags: ["AI/ML", "IoT Integration", "Custom Development"]
    },
    {
      industry: "Logistics",
      icon: <FaTruck />,
      title: "Supply Chain Visibility Platform",
      teaser: "Building real-time tracking and predictive ETA capabilities for a growing logistics company.",
      tags: ["Cloud Architecture", "Real-time Systems", "AI Analytics"]
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Case Studies - Greyquill Software</title>
        <meta name="description" content="Real-world examples of how Greyquill Software helps organizations transform with AI-enabled solutions. Case studies coming soon." />
        <link rel="canonical" href="https://greyquill.io/case-studies" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Client Success</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Case Studies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-world examples of how we help organizations solve complex challenges and achieve measurable results.
        </p>
      </header>

      {/* Coming Soon Banner */}
      <section className="mb-12">
        <div
          className="rounded-xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.12)'
          }}
        >
          <div className="w-16 h-16 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-4">
            <FaRocket className="text-3xl text-[#0B4F88]" />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800 mb-3">Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            As a newly launched consultancy, we're currently working with our first clients on exciting projects.
            Detailed case studies will be published here as engagements are completed and results can be shared.
          </p>
          <p className="text-sm text-gray-500">
            In the meantime, schedule a discovery call to discuss how we can help with your specific challenges.
          </p>
        </div>
      </section>

      {/* Preview of Upcoming Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">What to Expect</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Here's a preview of the types of case studies we'll be publishing as we complete client engagements:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingCaseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden opacity-75"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <span className="text-[#0B4F88] text-lg">{study.icon}</span>
                <span className="text-sm font-medium text-[#0B4F88]">{study.industry}</span>
                <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-tektur text-gray-800 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{study.teaser}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: 'rgba(11, 79, 136, 0.08)', color: '#0B4F88' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notification Sign-up */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center">
                <FaBell className="text-xl text-[#0B4F88]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-tektur text-gray-800 mb-1">Get Notified When Case Studies Are Published</h3>
              <p className="text-sm text-gray-600">
                Be the first to read our detailed case studies with implementation insights and measurable results.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="case-study-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="case-study-email"
                placeholder="Your email"
                className="flex-1 md:w-48 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                required
              />
              <button
                type="submit"
                className="bg-[#0B4F88] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#083d6a] transition-colors flex items-center gap-2"
              >
                <FaEnvelope />
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What Our Case Studies Will Include */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">What Our Case Studies Include</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Business Challenge", description: "The specific problems and pain points the client faced" },
            { title: "Our Approach", description: "How The Greyquill Method™ guided our solution design" },
            { title: "Technical Solution", description: "Architecture decisions, technologies used, and implementation details" },
            { title: "Measurable Results", description: "Quantified outcomes and business impact achieved" }
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-5 text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3 font-bold">
                {index + 1}
              </div>
              <h3 className="font-tektur text-gray-800 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
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
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Become Our Next Success Story?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We'd love to discuss your challenges and explore how we can help you achieve similar results.
          Schedule a discovery call to get started.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default CaseStudies;
