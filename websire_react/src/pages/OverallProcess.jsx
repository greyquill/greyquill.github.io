import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaLightbulb, FaHandshake, FaCheckCircle, FaRocket, FaLaptopCode,
  FaSitemap, FaCogs, FaShieldAlt, FaUsers, FaChartLine, FaArrowRight
} from 'react-icons/fa';

const OverallProcess = () => {
  const philosophy = [
    { icon: <FaLightbulb />, title: "Process-First Approach", desc: "We understand and optimize your business processes before implementing technology solutions." },
    { icon: <FaHandshake />, title: "Long-term Partnership", desc: "We walk alongside you throughout your journey, providing ongoing support as your business evolves." },
    { icon: <FaCheckCircle />, title: "Ownership & Accountability", desc: "We take full responsibility for the solutions we deliver, standing behind our work with confidence." }
  ];

  const processSteps = [
    { icon: <FaLightbulb />, title: "Discovery Phase", desc: "We begin with a structured discovery process to understand your business goals, challenges, and requirements.", link: "/discovery-process" },
    { icon: <FaSitemap />, title: "Solution Design", desc: "We craft tailored solutions based on your unique business needs and technical requirements." },
    { icon: <FaLaptopCode />, title: "Implementation", desc: "We implement solutions with careful planning, quality assurance, and ongoing communication." },
    { icon: <FaRocket />, title: "Continuous Support", desc: "We provide ongoing support and ensure your solution evolves with your changing business needs." }
  ];

  const services = [
    { title: "Business Process Optimization", path: "/business-process-optimization", icon: <FaChartLine />, items: ["Streamline core business practices", "Optimize team performance", "Identify and eliminate bottlenecks"] },
    { title: "Custom Software Development", path: "/custom-software-development", icon: <FaLaptopCode />, items: ["Tailored solutions for your needs", "Collaborative development approach", "Comprehensive documentation"] },
    { title: "Legacy Application Modernization", path: "/legacy-application-modernization", icon: <FaCogs />, items: ["Business-driven modernization", "Value preservation", "Phased, low-risk implementation"] },
    { title: "Distributed Systems & Cloud", path: "/distributed-systems-cloud-consulting", icon: <FaSitemap />, items: ["Business-aligned architecture", "Cloud strategy and implementation", "Security and compliance by design"] }
  ];

  const practices = [
    { icon: <FaSitemap />, title: "Architecture & Design", desc: "Business-aligned system design with comprehensive documentation" },
    { icon: <FaCogs />, title: "Automation", desc: "CI/CD pipelines, self-healing systems, and zero-downtime deployments" },
    { icon: <FaShieldAlt />, title: "Security", desc: "Security by design with comprehensive controls and ongoing testing" },
    { icon: <FaUsers />, title: "Change Management", desc: "People-centered approach to technological change" }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Our Methodology - Greyquill Software | Process-First Approach</title>
        <meta name="description" content="Discover the Greyquill methodology for transforming business challenges into effective solutions. Our process-first approach ensures technology serves your business goals." />
        <link rel="canonical" href="https://greyquill.io/overall-process" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">How We Work</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">The Greyquill Methodology</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          How we transform your business challenges into effective solutions through our comprehensive, client-centered approach.
        </p>
      </header>

      {/* Core Philosophy */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Our Core Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {philosophy.map((item, idx) => (
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
      </section>

      {/* End-to-End Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Our End-to-End Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-tektur text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{step.desc}</p>
                {step.link && (
                  <Link to={step.link} className="text-[#0B4F88] text-sm hover:underline flex items-center gap-1">
                    Learn more <FaArrowRight className="text-xs" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Our Service Areas</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="font-tektur text-gray-800">{service.title}</h3>
              </div>
              <ul className="space-y-1 mb-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.path} className="text-[#0B4F88] text-sm hover:underline flex items-center gap-1">
                Learn more <FaArrowRight className="text-xs" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Implementation Best Practices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {practices.map((practice, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#0B4F88]">{practice.icon}</span>
                <h3 className="font-tektur text-[#0B4F88] text-sm">{practice.title}</h3>
              </div>
              <p className="text-xs text-gray-600">{practice.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Outcomes & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Business Impact", items: ["Improved operational efficiency", "Reduced costs through optimization", "Enhanced customer satisfaction", "Increased market agility"] },
            { title: "Technical Advantages", items: ["Scalable, future-proof systems", "Improved reliability and performance", "Enhanced security and compliance", "Reduced technical debt"] },
            { title: "Organizational Benefits", items: ["Better team collaboration", "Improved knowledge transfer", "Reduced resistance to change", "Greater operational visibility"] }
          ].map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <h3 className="font-tektur text-[#0B4F88] mb-3">{category.title}</h3>
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
      </section>

      {/* CTA */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Schedule a discovery call to discuss how Greyquill can help you achieve your business goals.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>

      {/* Testimonial */}
      <div className="mt-8 pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
        <p>
          "Greyquill's approach to our digital transformation was refreshing. They started by understanding our business processes before proposing solutions. The result was technology that truly supported our strategic goals."
        </p>
        <p className="mt-2 font-semibold not-italic text-gray-800">— Financial Services Client</p>
      </div>
    </main>
  );
};

export default OverallProcess;
