import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRobot, FaBolt, FaChartLine } from 'react-icons/fa';
import serv1 from '../assets/serv1.png';
import serv2 from '../assets/serv2.png';
import serv3 from '../assets/serv3.png';
import serv4 from '../assets/serv4.png';
import serv5 from '../assets/serv5.png';

function Services() {
  const services = [
    {
      title: "Enterprise AI Enablement",
      description: "Transform your organization with safe, compliant AI—from model selection to governance and deployment.",
      path: "/enterprise-ai-enablement",
      image: serv5,
      featured: true
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and eliminate inefficiencies with AI-powered process analysis and automation.",
      path: "/business-process-optimization",
      image: serv1
    },
    {
      title: "Custom Software Development",
      description: "Purpose-built solutions designed for your unique challenges, leveraging modern AI capabilities.",
      path: "/custom-software-development",
      image: serv2
    },
    {
      title: "Legacy Application Modernization",
      description: "Transform outdated systems into modern, AI-ready platforms without disrupting operations.",
      path: "/legacy-application-modernization",
      image: serv3
    },
    {
      title: "Distributed Systems & Cloud",
      description: "Scalable cloud architectures with intelligent resource optimization and AI integration.",
      path: "/distributed-systems-cloud-consulting",
      image: serv4
    }
  ];

  return (
    <section className="py-12">
      {/* AI-First Banner */}
      <div
        className="rounded-2xl p-6 mb-10"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-[#0B4F88]/10 flex items-center justify-center">
              <FaRobot className="text-3xl text-[#0B4F88]" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-tektur text-gray-800 mb-2">
              AI-First Development Approach
            </h3>
            <p className="text-gray-600">
              We integrate artificial intelligence at every stage of development. The Greyquill Method™
              combines rigorous discovery with <b>tried and tested reliable AI-accelerated delivery</b>, consistently producing results
              that outperform traditional approaches.
            </p>
          </div>
          <div className="flex gap-4 text-center">
            <div>
              <FaBolt className="text-2xl text-[#0B4F88] mx-auto mb-1" />
              <p className="text-xs text-gray-500">Faster Delivery</p>
            </div>
            <div>
              <FaChartLine className="text-2xl text-[#0B4F88] mx-auto mb-1" />
              <p className="text-xs text-gray-500">Better Outcomes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-8">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">What We Build</p>
        <h2 className="text-3xl font-tektur text-gray-800 mb-4">Our Services</h2>
      </div>

      {/* Featured Service (AI Enablement) */}
      {services.filter(s => s.featured).map((service, index) => (
        <Link
          key={`featured-${index}`}
          to={service.path}
          className="group block mb-6"
        >
          <div
            className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.12)'
            }}
          >
            <div className="flex flex-col md:flex-row items-start gap-5">
              {/* Service Image */}
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Service Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#0B4F88] text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    New
                  </span>
                  <h3 className="font-tektur text-gray-800 text-xl group-hover:text-[#0B4F88] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}>
                    Cloud & On-Premise
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}>
                    EU AI Act Ready
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}>
                    SOC 2 & HIPAA
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-[#0B4F88] font-medium">
                  Learn more
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.filter(s => !s.featured).map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="group block"
          >
            <div
              className="rounded-xl p-5 h-full transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-start gap-4">
                {/* Service Image */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Service Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-tektur text-gray-800 text-lg mb-2 group-hover:text-[#0B4F88] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#0B4F88] font-medium">
                    Learn more
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Platform Icons */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          We build for <span className="font-semibold text-gray-800">every platform</span>
        </p>
        <div className="flex justify-center gap-8 text-gray-400">
          <div className="text-center">
            <i className="fas fa-globe text-2xl mb-1"></i>
            <p className="text-xs">Web</p>
          </div>
          <div className="text-center">
            <i className="fas fa-mobile-alt text-2xl mb-1"></i>
            <p className="text-xs">Mobile</p>
          </div>
          <div className="text-center">
            <i className="fab fa-apple text-2xl mb-1"></i>
            <p className="text-xs">iOS</p>
          </div>
          <div className="text-center">
            <i className="fab fa-android text-2xl mb-1"></i>
            <p className="text-xs">Android</p>
          </div>
          <div className="text-center">
            <i className="fas fa-desktop text-2xl mb-1"></i>
            <p className="text-xs">Desktop</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
