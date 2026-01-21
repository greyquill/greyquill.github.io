import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaRobot, FaShieldAlt, FaCloud, FaServer, FaCheckCircle, FaBalanceScale,
  FaLock, FaClipboardCheck, FaSearch, FaCogs, FaChartLine, FaUsers,
  FaFileContract, FaBrain, FaNetworkWired, FaExclamationTriangle
} from 'react-icons/fa';

const EnterpriseAIEnablement = () => {
  const deploymentOptions = [
    {
      title: "Cloud-Based AI",
      icon: <FaCloud />,
      description: "Leverage managed AI services from leading providers for rapid deployment and scalability.",
      best: "Organizations seeking fast time-to-value, elastic scaling, and reduced infrastructure management.",
      providers: ["AWS Bedrock", "Azure OpenAI", "Google Vertex AI", "Anthropic API"],
      considerations: [
        "Data leaves your environment to third-party servers",
        "Shared responsibility model for security",
        "Pay-per-use pricing with variable costs",
        "Automatic updates and model improvements"
      ]
    },
    {
      title: "On-Premise AI",
      icon: <FaServer />,
      description: "Deploy AI models within your own data centers for maximum control over data and operations.",
      best: "Regulated industries, government agencies, and organizations with strict data residency requirements.",
      providers: ["Llama 3", "Mistral", "Falcon", "Self-hosted fine-tuned models"],
      considerations: [
        "Complete control over data residency and security",
        "Air-gapped deployments for sensitive environments",
        "Higher upfront infrastructure investment",
        "Full customization and model ownership"
      ]
    },
    {
      title: "Hybrid Approach",
      icon: <FaNetworkWired />,
      description: "Combine cloud and on-premise deployments to optimize for different use cases and risk profiles.",
      best: "Enterprises balancing innovation velocity with compliance requirements across diverse workloads.",
      providers: ["Mix of cloud APIs and self-hosted models", "Edge deployment for latency-sensitive tasks"],
      considerations: [
        "Route sensitive data to on-premise, general tasks to cloud",
        "Optimize cost-performance across workloads",
        "Flexible architecture that evolves with needs",
        "Recommended by 75% of enterprises by 2027 (IDC)"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: "EU AI Act",
      icon: <FaBalanceScale />,
      status: "Enforcement begins August 2026",
      description: "The world's first comprehensive AI regulation with risk-based classification system.",
      requirements: [
        "Risk assessment and classification for AI systems",
        "Transparency requirements for AI-generated content",
        "Human oversight mechanisms for high-risk AI",
        "Technical documentation and audit trails"
      ],
      penalty: "Up to €35M or 7% of global annual turnover"
    },
    {
      name: "ISO/IEC 42001",
      icon: <FaFileContract />,
      status: "International standard for AI management",
      description: "First international standard for AI management systems, becoming the de facto certification.",
      requirements: [
        "Establish AI management system policies",
        "Define roles and responsibilities for AI governance",
        "Implement risk management processes",
        "Continuous improvement of AI practices"
      ],
      penalty: "Loss of competitive advantage and trust"
    },
    {
      name: "SOC 2 + AI Criteria",
      icon: <FaShieldAlt />,
      status: "Updated with AI-specific controls",
      description: "SOC 2 now includes AI governance criteria for model governance and training data provenance.",
      requirements: [
        "Algorithmic bias detection and mitigation",
        "Data poisoning prevention controls",
        "AI decision-making explainability",
        "Model training data lineage documentation"
      ],
      penalty: "Failed audits and lost enterprise contracts"
    },
    {
      name: "HIPAA AI Compliance",
      icon: <FaLock />,
      status: "Healthcare-specific safeguards",
      description: "HIPAA safeguards extended to protect patient information in medical AI models.",
      requirements: [
        "Administrative safeguards for AI workforce training",
        "Physical security for AI infrastructure",
        "Technical encryption and audit controls",
        "Access management for GPU clusters"
      ],
      penalty: "Up to $1.5M per violation category per year"
    },
    {
      name: "GDPR for AI",
      icon: <FaUsers />,
      status: "Data protection in AI systems",
      description: "GDPR requirements for AI systems processing personal data of EU residents.",
      requirements: [
        "Right to explanation for automated decisions",
        "Data minimization in model training",
        "Purpose limitation for AI processing",
        "Privacy by design in AI development"
      ],
      penalty: "Up to €20M or 4% of global annual turnover"
    },
    {
      name: "NIST AI RMF",
      icon: <FaClipboardCheck />,
      status: "US Federal AI risk framework",
      description: "Comprehensive framework emphasizing governance, accountability, and risk management.",
      requirements: [
        "Map AI risks across the organization",
        "Measure and assess AI system impacts",
        "Manage risks with appropriate controls",
        "Govern with clear accountability structures"
      ],
      penalty: "Required for federal contracts"
    }
  ];

  const aiSafetyPillars = [
    {
      title: "Responsible AI Framework",
      icon: <FaBalanceScale />,
      description: "We implement comprehensive responsible AI practices that ensure your AI systems are ethical, fair, and aligned with your values.",
      practices: [
        "Bias detection and mitigation in models and training data",
        "Fairness metrics and regular algorithmic audits",
        "Transparency in AI decision-making processes",
        "Human oversight mechanisms for critical decisions"
      ]
    },
    {
      title: "AI Governance & Oversight",
      icon: <FaUsers />,
      description: "Establish clear accountability structures and governance processes for AI systems across your organization.",
      practices: [
        "AI governance committee and policy frameworks",
        "Defined roles: AI owners, operators, and auditors",
        "Model lifecycle management and version control",
        "Regular governance reviews and updates"
      ]
    },
    {
      title: "Security & Access Control",
      icon: <FaLock />,
      description: "Protect your AI systems and data with enterprise-grade security measures and Zero Trust architecture.",
      practices: [
        "Zero Trust AI security with strict access controls",
        "Encrypted model storage and secure inference",
        "API security with rate limiting and authentication",
        "Adversarial attack detection and prevention"
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: <FaChartLine />,
      description: "Continuous monitoring of AI systems to detect drift, performance degradation, and anomalies.",
      practices: [
        "Real-time model performance monitoring",
        "Data drift and concept drift detection",
        "Automated alerting for anomalous behavior",
        "Comprehensive audit trails and logging"
      ]
    }
  ];

  const implementationApproach = [
    {
      phase: 1,
      title: "AI Readiness Assessment",
      icon: <FaSearch />,
      duration: "2-3 weeks",
      description: "We evaluate your organization's current state, data maturity, and AI opportunities to create a prioritized roadmap.",
      deliverables: [
        "AI readiness scorecard across key dimensions",
        "Data quality and availability assessment",
        "Use case identification and prioritization matrix",
        "Risk assessment and regulatory gap analysis"
      ]
    },
    {
      phase: 2,
      title: "Strategy & Architecture",
      icon: <FaBrain />,
      duration: "3-4 weeks",
      description: "Design your AI architecture, select optimal models, and establish governance frameworks tailored to your needs.",
      deliverables: [
        "AI strategy aligned with business objectives",
        "Model selection recommendations (cloud/on-premise/hybrid)",
        "Technical architecture and integration design",
        "Governance framework and policy templates"
      ]
    },
    {
      phase: 3,
      title: "Pilot Implementation",
      icon: <FaCogs />,
      duration: "6-8 weeks",
      description: "Deploy your first AI use case with full safety guardrails, demonstrating value while building organizational capability.",
      deliverables: [
        "Working AI pilot with measurable outcomes",
        "Safety guardrails and monitoring in place",
        "User training and change management",
        "Lessons learned and scaling playbook"
      ]
    },
    {
      phase: 4,
      title: "Scale & Optimize",
      icon: <FaChartLine />,
      duration: "Ongoing",
      description: "Expand AI across the organization, optimize performance, and ensure continuous compliance and improvement.",
      deliverables: [
        "AI center of excellence establishment",
        "Cross-functional AI deployment playbooks",
        "Continuous compliance monitoring",
        "ROI measurement and optimization"
      ]
    }
  ];

  const modelSelectionCriteria = [
    { criterion: "Data Sensitivity", cloud: "Medium-Low", onPremise: "High", hybrid: "Variable" },
    { criterion: "Regulatory Requirements", cloud: "Standard", onPremise: "Strict/Specialized", hybrid: "Mixed" },
    { criterion: "Customization Needs", cloud: "Limited", onPremise: "Full Control", hybrid: "Balanced" },
    { criterion: "Time to Deploy", cloud: "Fast (days)", onPremise: "Slower (weeks)", hybrid: "Moderate" },
    { criterion: "Upfront Investment", cloud: "Low", onPremise: "High", hybrid: "Medium" },
    { criterion: "Operating Costs", cloud: "Variable", onPremise: "Predictable", hybrid: "Optimized" },
    { criterion: "Scalability", cloud: "Elastic", onPremise: "Capacity-bound", hybrid: "Flexible" }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Enterprise AI Enablement - Safe, Compliant AI Transformation | Greyquill Software</title>
        <meta name="description" content="Transform your organization with enterprise AI that's safe, compliant, and effective. Expert guidance on model selection (cloud or on-premise), AI governance, and regulatory compliance including EU AI Act, ISO 42001, SOC 2, and HIPAA." />
        <link rel="canonical" href="https://greyquill.io/enterprise-ai-enablement" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Services</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          Enterprise AI Enablement
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform every aspect of your organization with AI that's safe, compliant, and delivers real business value.
        </p>
      </header>

      {/* Value Proposition */}
      <section className="mb-12">
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B4F88]/10 flex items-center justify-center">
              <FaRobot className="text-2xl text-[#0B4F88]" />
            </div>
            <div>
              <h2 className="text-xl font-tektur text-gray-800 mb-2">AI-Enable Your Entire Organization</h2>
              <p className="text-gray-600">
                The AI landscape is evolving rapidly, with enforcement of the EU AI Act beginning in 2026 and organizations
                under growing pressure to prove AI value while managing risk. We help you navigate this complexity with
                confidence—selecting the right models, deploying them securely, and ensuring full regulatory compliance.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#0B4F88]">60%</p>
              <p className="text-sm text-gray-600">of organizations will have formalized AI governance by 2026 (Gartner)</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#0B4F88]">75%</p>
              <p className="text-sm text-gray-600">of enterprises adopting hybrid AI deployment by 2027 (IDC)</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#0B4F88]">€35M</p>
              <p className="text-sm text-gray-600">maximum EU AI Act penalty for non-compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Model Deployment</p>
          <h2 className="text-3xl font-tektur text-gray-800">The Right AI for Your Requirements</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We help you choose between cloud, on-premise, or hybrid AI deployment based on your security requirements,
            regulatory constraints, and business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div
                className="p-4 text-center"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <div className="text-3xl text-[#0B4F88] mb-2">{option.icon}</div>
                <h3 className="text-lg font-tektur text-gray-800">{option.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#0B4F88] uppercase mb-2">Best For</p>
                  <p className="text-sm text-gray-600">{option.best}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#0B4F88] uppercase mb-2">Options</p>
                  <div className="flex flex-wrap gap-1">
                    {option.providers.map((provider, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}
                      >
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0B4F88] uppercase mb-2">Key Considerations</p>
                  <ul className="space-y-1">
                    {option.considerations.map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-[#0B4F88] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Model Selection Comparison Table */}
        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <h3 className="text-lg font-tektur text-gray-800 mb-4 text-center">Deployment Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.15)' }}>
                  <th className="text-left py-2 px-3 text-gray-700 font-semibold">Criterion</th>
                  <th className="text-center py-2 px-3 text-[#0B4F88] font-semibold">Cloud</th>
                  <th className="text-center py-2 px-3 text-[#0B4F88] font-semibold">On-Premise</th>
                  <th className="text-center py-2 px-3 text-[#0B4F88] font-semibold">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {modelSelectionCriteria.map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}>
                    <td className="py-2 px-3 text-gray-700 font-medium">{row.criterion}</td>
                    <td className="text-center py-2 px-3 text-gray-600">{row.cloud}</td>
                    <td className="text-center py-2 px-3 text-gray-600">{row.onPremise}</td>
                    <td className="text-center py-2 px-3 text-gray-600">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Safety & Governance */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Safety & Governance</p>
          <h2 className="text-3xl font-tektur text-gray-800">AI You Can Trust</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We build safety into every AI implementation, ensuring your systems are secure, ethical, and aligned with your values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiSafetyPillars.map((pillar, index) => (
            <div
              key={index}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl text-[#0B4F88]">{pillar.icon}</div>
                <h3 className="text-lg font-tektur text-gray-800">{pillar.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.practices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Regulatory Compliance</p>
          <h2 className="text-3xl font-tektur text-gray-800">Navigate the Compliance Landscape</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            AI regulations are now real, enforceable, and fast-moving. We ensure your AI implementations
            meet all applicable requirements across jurisdictions and industries.
          </p>
        </div>

        <div
          className="rounded-xl p-4 mb-6 flex items-center gap-3"
          style={{
            background: 'rgba(234, 179, 8, 0.1)',
            boxShadow: 'inset 0 0 0 1px rgba(234, 179, 8, 0.3)'
          }}
        >
          <FaExclamationTriangle className="text-yellow-600 text-xl flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Only 25% of companies have a fully implemented AI governance program.
            Non-compliance can result in fines up to €35M or 7% of global annual turnover under the EU AI Act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {complianceFrameworks.map((framework, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <div className="text-xl text-[#0B4F88]">{framework.icon}</div>
                <div>
                  <h3 className="font-tektur text-gray-800">{framework.name}</h3>
                  <p className="text-xs text-[#0B4F88]">{framework.status}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">{framework.description}</p>
                <p className="text-xs font-semibold text-[#0B4F88] uppercase mb-2">Key Requirements</p>
                <ul className="space-y-1 mb-3">
                  {framework.requirements.map((req, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-[#0B4F88]">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded p-2 text-xs"
                  style={{ background: 'rgba(239, 68, 68, 0.08)' }}
                >
                  <span className="font-semibold text-red-700">Non-compliance risk:</span>
                  <span className="text-gray-700 ml-1">{framework.penalty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Approach</p>
          <h2 className="text-3xl font-tektur text-gray-800">From Assessment to AI-Enabled</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A structured approach that balances speed with safety, ensuring you realize AI value while maintaining
            full compliance and governance.
          </p>
        </div>

        <div className="space-y-6">
          {implementationApproach.map((phase, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div
                className="px-6 py-4"
                style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.08)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B4F88] text-white flex items-center justify-center font-bold text-lg">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[#0B4F88] text-xl">{phase.icon}</span>
                      <h3 className="text-xl font-tektur text-gray-800">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {phase.duration}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div
                  className="rounded-lg p-4"
                  style={{
                    background: 'rgba(34, 197, 94, 0.08)',
                    boxShadow: 'inset 0 0 0 1px rgba(34, 197, 94, 0.15)'
                  }}
                >
                  <h4 className="text-green-700 font-semibold mb-2">What You Get</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* CTA Section */}
      <section
        className="rounded-xl p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
        }}
      >
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Become AI-Enabled?</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Whether you're exploring your first AI use case or scaling across the enterprise, we'll help you
          navigate model selection, ensure compliance, and build AI systems you can trust.
        </p>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Schedule a discovery call to discuss your AI objectives and learn how we can help you achieve them safely and effectively.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default EnterpriseAIEnablement;
