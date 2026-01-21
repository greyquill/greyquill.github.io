import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaLightbulb, FaUsers, FaBrain, FaSearch,
  FaCheckCircle, FaShieldAlt, FaFileAlt, FaClock,
  FaHandshake, FaArrowRight, FaQuoteLeft
} from 'react-icons/fa';

const DiscoveryWorkshop = () => {
  const workshopPhases = [
    {
      phase: "Illuminate",
      icon: <FaLightbulb />,
      description: "We map your business context, goals, and constraints to understand the real problem—not just the symptoms.",
      deliverable: "Business Context Map"
    },
    {
      phase: "Interview",
      icon: <FaUsers />,
      description: "We engage key stakeholders to capture needs, pain points, and success criteria from every perspective that matters.",
      deliverable: "Stakeholder Needs Matrix"
    },
    {
      phase: "Ideate",
      icon: <FaBrain />,
      description: "We explore solution options, evaluate trade-offs, and identify the approach that best fits your constraints.",
      deliverable: "Solution Options Analysis"
    },
    {
      phase: "Investigate",
      icon: <FaSearch />,
      description: "We assess technical feasibility, integration requirements, and potential risks before any commitment.",
      deliverable: "Technical Feasibility Report"
    }
  ];

  const whatYouGet = [
    "Complete understanding of what needs to be built and why",
    "Documented requirements that all stakeholders agree on",
    "Technical approach validated against your constraints",
    "Risk assessment with mitigation strategies",
    "Clear project roadmap with realistic milestones",
    "Fixed-price implementation proposal (if you choose to proceed)"
  ];

  const whoItsFor = [
    "Organizations planning a significant software investment",
    "Teams who've been burned by unclear requirements before",
    "Leaders who need stakeholder alignment before committing budget",
    "Companies evaluating build vs. buy decisions",
    "Organizations modernizing legacy systems"
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Discovery Workshop - Clarity Before Code | Greyquill Software</title>
        <meta name="description" content="Our Discovery Workshop ensures complete clarity on what to build before any development begins. Includes our Clarity Guarantee—if you don't have clarity, we refund the workshop fee." />
        <link rel="canonical" href="https://greyquill.io/discovery-workshop" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">
          The Starting Point for Every Successful Project
        </p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          The Discovery Workshop
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Before we write a single line of code, we ensure absolute clarity on what needs to be built,
          why it matters, and how we'll build it. This is how projects succeed.
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Duration: 2-4 weeks | Engagement: Collaborative | Outcome: Complete Project Blueprint
        </p>
      </header>

      {/* The Clarity Guarantee */}
      <section className="mb-12">
        <div
          className="rounded-xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.1) 0%, rgba(11, 79, 136, 0.02) 100%)',
            boxShadow: 'inset 0 0 0 2px rgba(11, 79, 136, 0.15)'
          }}
        >
          <div className="w-16 h-16 rounded-full bg-[#0B4F88] flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800 mb-4">The Clarity Guarantee</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            If you complete our Discovery Workshop and don't have <strong>absolute clarity</strong> on
            what should be built, why it matters, and how we'll build it—we'll refund the workshop fee.
          </p>
          <p className="text-[#0B4F88] font-semibold">
            No questions asked. No fine print.
          </p>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
            We're confident in our process because we've seen it work. If it doesn't work for you,
            you shouldn't pay for it.
          </p>
        </div>
      </section>

      {/* Why Start Here */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-tektur text-gray-800 mb-3">Why Start with a Discovery Workshop?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            70% of software projects fail—not because of bad code, but because of unclear requirements.
            The Discovery Workshop eliminates this risk before you commit significant resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-4">
              <FaFileAlt className="text-xl text-[#0B4F88]" />
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Reduce Risk</h3>
            <p className="text-sm text-gray-600">
              Identify potential issues, technical constraints, and stakeholder misalignments
              before they become expensive problems.
            </p>
          </div>

          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-xl text-[#0B4F88]" />
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Align Stakeholders</h3>
            <p className="text-sm text-gray-600">
              Get everyone on the same page—from technical teams to business leaders—before
              development begins.
            </p>
          </div>

          <div
            className="rounded-xl p-6 text-center"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-xl text-[#0B4F88]" />
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Save Time & Money</h3>
            <p className="text-sm text-gray-600">
              A small upfront investment prevents costly mid-project pivots and scope changes
              that derail timelines.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">What's Included</h2>

        <div className="space-y-4">
          {workshopPhases.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-tektur text-gray-800 text-lg">{item.phase}</h3>
                      <span className="text-xs bg-[#0B4F88]/10 text-[#0B4F88] px-3 py-1 rounded-full">
                        Deliverable: {item.deliverable}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">
            At the End of the Workshop, You'll Have
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whatYouGet.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Who This Is For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoItsFor.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 flex items-start gap-3"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.06)'
              }}
            >
              <FaArrowRight className="text-[#0B4F88] mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <FaQuoteLeft className="text-[#0B4F88]/20 text-3xl mb-3" />
          <blockquote className="text-lg text-gray-700 italic mb-4">
            "The Discovery Workshop revealed requirements conflicts between our sales and operations teams
            that would have caused major problems mid-development. Worth every penny to find that before
            we started coding."
          </blockquote>
          <cite className="text-sm text-gray-500 not-italic">
            — CTO, Mid-Market Financial Services Company
          </cite>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">What Happens Next</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3 font-bold">
              1
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Discovery Call</h3>
            <p className="text-sm text-gray-600">
              We discuss your situation, understand your challenges, and determine if the workshop
              is the right fit.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3 font-bold">
              2
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Workshop Execution</h3>
            <p className="text-sm text-gray-600">
              Over 2-4 weeks, we work collaboratively through all phases, involving your key
              stakeholders throughout.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center mx-auto mb-3 font-bold">
              3
            </div>
            <h3 className="font-tektur text-gray-800 mb-2">Your Decision</h3>
            <p className="text-sm text-gray-600">
              With complete clarity, you decide whether to proceed with implementation—with us
              or anyone else. No pressure.
            </p>
          </div>
        </div>
      </section>

      {/* No Obligation Note */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6 text-center"
          style={{
            background: 'rgba(34, 197, 94, 0.05)',
            boxShadow: 'inset 0 0 0 1px rgba(34, 197, 94, 0.15)'
          }}
        >
          <h3 className="font-tektur text-gray-800 mb-2">No Obligation to Continue</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Discovery Workshop is a standalone engagement. Once complete, you own all deliverables
            and are free to proceed however you choose. Many clients do continue with us for
            implementation, but there's absolutely no obligation.
          </p>
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
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">
          Ready to Start with Clarity?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Schedule a discovery call to discuss your project. We'll help you determine if the
          Discovery Workshop is the right starting point for your situation.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6 text-sm text-gray-500">
          30-minute call · No commitment · Just clarity on next steps
        </p>
        <p className="mt-4">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default DiscoveryWorkshop;
