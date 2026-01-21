import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaUniversity, FaHeartbeat, FaIndustry, FaTruck,
  FaCheckCircle, FaRobot, FaShieldAlt, FaChartLine
} from 'react-icons/fa';

const Industries = () => {
  const location = useLocation();

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const industries = [
    {
      id: "financial-services",
      name: "Financial Services",
      icon: <FaUniversity className="text-4xl" />,
      tagline: "Secure, compliant solutions for modern finance",
      description: "Financial institutions face unique challenges: stringent regulatory requirements, legacy system dependencies, and the need to deliver seamless digital experiences. We help banks, insurance companies, and fintech firms modernize their infrastructure while maintaining the highest security standards.",
      challenges: [
        "Complex regulatory compliance (SOX, PCI-DSS, Basel III)",
        "Legacy core banking systems limiting agility",
        "Real-time fraud detection and prevention needs",
        "Customer demand for seamless digital experiences"
      ],
      solutions: [
        "AI-powered fraud detection and risk assessment",
        "Secure cloud migration with compliance automation",
        "Core banking modernization without service disruption",
        "Customer-facing AI assistants for 24/7 support"
      ],
      aiUseCases: [
        "Automated compliance monitoring and reporting",
        "Intelligent document processing for loan applications",
        "Predictive analytics for customer churn prevention",
        "Real-time transaction anomaly detection"
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <FaHeartbeat className="text-4xl" />,
      tagline: "HIPAA-compliant innovation for better patient outcomes",
      description: "Healthcare organizations must balance innovation with strict privacy requirements. We deliver solutions that improve patient care, streamline operations, and maintain full HIPAA compliance—whether deploying AI on-premise or in secure cloud environments.",
      challenges: [
        "HIPAA compliance and patient data protection",
        "Interoperability between disparate health systems",
        "Clinical workflow inefficiencies and burnout",
        "Rising costs with pressure to improve outcomes"
      ],
      solutions: [
        "HIPAA-compliant AI deployment (on-premise or cloud)",
        "Healthcare data integration and interoperability",
        "Clinical workflow automation and optimization",
        "Patient engagement platforms with AI assistants"
      ],
      aiUseCases: [
        "Medical imaging analysis and diagnostic support",
        "Predictive patient risk stratification",
        "Automated clinical documentation (ambient AI)",
        "Intelligent appointment scheduling and resource allocation"
      ]
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: <FaIndustry className="text-4xl" />,
      tagline: "Smart manufacturing for the AI era",
      description: "Manufacturing is being transformed by AI and IoT. We help manufacturers implement predictive maintenance, optimize production processes, and build the digital infrastructure needed for Industry 4.0—all while integrating with existing operational technology.",
      challenges: [
        "Aging equipment and unplanned downtime costs",
        "Quality control at scale across production lines",
        "Supply chain visibility and demand forecasting",
        "IT/OT convergence security concerns"
      ],
      solutions: [
        "Predictive maintenance using AI and IoT sensors",
        "Computer vision for automated quality inspection",
        "Supply chain optimization with demand forecasting",
        "Secure IT/OT integration architectures"
      ],
      aiUseCases: [
        "Equipment failure prediction and maintenance scheduling",
        "Real-time production optimization",
        "Automated visual defect detection",
        "Demand forecasting and inventory optimization"
      ]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: <FaTruck className="text-4xl" />,
      tagline: "Intelligent logistics for a connected world",
      description: "Modern supply chains require real-time visibility, predictive capabilities, and the flexibility to adapt to disruptions. We build intelligent logistics platforms that optimize routes, predict delays, and automate warehouse operations.",
      challenges: [
        "Last-mile delivery cost and efficiency pressures",
        "Real-time visibility across complex supply networks",
        "Warehouse labor shortages and capacity constraints",
        "Demand volatility and inventory optimization"
      ],
      solutions: [
        "AI-powered route optimization and fleet management",
        "Real-time supply chain visibility platforms",
        "Warehouse automation and robotics integration",
        "Demand sensing and inventory optimization"
      ],
      aiUseCases: [
        "Dynamic route optimization considering traffic and weather",
        "Predictive ETA and delay notification",
        "Automated warehouse pick path optimization",
        "Demand forecasting with external signal integration"
      ]
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Industries We Serve - Greyquill Software</title>
        <meta name="description" content="Greyquill Software delivers AI-enabled solutions for Financial Services, Healthcare, Manufacturing, and Logistics. Industry-specific expertise with compliant, secure implementations." />
        <link rel="canonical" href="https://greyquill.io/industries" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Industry Expertise</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Industries We Serve</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Deep domain knowledge combined with technical excellence. We understand the unique challenges,
          regulations, and opportunities in your industry.
        </p>
      </header>

      {/* Why Industry Expertise Matters */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h2 className="text-xl font-tektur text-gray-800 mb-4 text-center">Why Industry Expertise Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-3">
                <FaShieldAlt className="text-xl text-[#0B4F88]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Compliance Built-In</h3>
              <p className="text-sm text-gray-600">
                We understand your regulatory landscape—HIPAA, SOX, PCI-DSS, EU AI Act—and build compliance into every solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-3">
                <FaRobot className="text-xl text-[#0B4F88]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Relevant AI Use Cases</h3>
              <p className="text-sm text-gray-600">
                We know which AI applications deliver real ROI in your industry, avoiding hype-driven investments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center mx-auto mb-3">
                <FaChartLine className="text-xl text-[#0B4F88]" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Proven Patterns</h3>
              <p className="text-sm text-gray-600">
                Leverage architectures and approaches that have succeeded in organizations like yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="space-y-10">
        {industries.map((industry) => (
          <div
            key={industry.id}
            id={industry.id}
            className="rounded-xl overflow-hidden scroll-mt-24"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            {/* Industry Header */}
            <div
              className="p-6"
              style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#0B4F88]/10 flex items-center justify-center text-[#0B4F88]">
                  {industry.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-tektur text-gray-800">{industry.name}</h2>
                  <p className="text-[#0B4F88] italic">"{industry.tagline}"</p>
                </div>
              </div>
            </div>

            {/* Industry Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">{industry.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Challenges */}
                <div
                  className="rounded-lg p-5"
                  style={{
                    background: 'rgba(239, 68, 68, 0.05)',
                    boxShadow: 'inset 0 0 0 1px rgba(239, 68, 68, 0.1)'
                  }}
                >
                  <h3 className="font-tektur text-gray-800 mb-3">Common Challenges</h3>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div
                  className="rounded-lg p-5"
                  style={{
                    background: 'rgba(34, 197, 94, 0.05)',
                    boxShadow: 'inset 0 0 0 1px rgba(34, 197, 94, 0.1)'
                  }}
                >
                  <h3 className="font-tektur text-gray-800 mb-3">How We Help</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* AI Use Cases */}
              <div
                className="rounded-lg p-5"
                style={{
                  background: 'rgba(11, 79, 136, 0.04)',
                  boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaRobot className="text-[#0B4F88]" />
                  <h3 className="font-tektur text-gray-800">AI Use Cases</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {industry.aiUseCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#0B4F88]">→</span>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        className="mt-12 rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Don't See Your Industry?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our methodology and technical expertise translate across industries. If you're facing complex
          software challenges and need a partner who takes the time to understand your business, let's talk.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default Industries;
