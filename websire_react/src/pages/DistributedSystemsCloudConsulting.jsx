import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaCloud, FaServer, FaNetworkWired, FaLayerGroup, FaCogs, FaShieldAlt,
  FaRocket, FaCheckCircle, FaLightbulb, FaUsers, FaCode, FaDatabase,
  FaSitemap, FaHandshake, FaBrain, FaLaptopCode, FaChartLine
} from 'react-icons/fa';

const DistributedSystemsCloudConsulting = () => {
  return (
    <main className="py-10">
      <Helmet>
        <title>Distributed Systems & Cloud Consulting - Greyquill Software</title>
        <meta name="description" content="Build scalable, resilient systems with Greyquill. Cloud strategy, migration, architecture design, security by design, and operational excellence across AWS, Azure, and GCP." />
        <link rel="canonical" href="https://greyquill.io/distributed-systems-cloud-consulting" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Our Services</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">
          Distributed Systems & Cloud Consulting
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building scalable, resilient systems that power your business transformation.
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
            Ever wonder what makes some companies scale effortlessly while others struggle under growing demand?
            The secret often lies in how their systems are designed behind the scenes.
          </p>
          <p className="text-gray-600 mb-4">
            At Greyquill Software, we specialize in building systems that don't just work today—they're designed to grow
            with your business, handle unpredictable demands, and recover gracefully when things go wrong.
          </p>
          <p className="text-gray-600">
            Our distributed systems and cloud consulting helps you navigate the complexity of modern
            architecture—turning technical challenges into business advantages that keep you ahead of competitors.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaSitemap />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Business Goals Drive Technical Decisions</h2>
        </div>

        <p className="text-gray-600 mb-6">
          We don't believe in technology for technology's sake. Our consultation approach starts with understanding
          your business objectives, then works backwards to design systems that support them.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <FaLightbulb />, title: "Business-First Thinking", desc: "We build systems that solve real business challenges, not just technical puzzles" },
            { icon: <FaUsers />, title: "Stakeholder Alignment", desc: "We bring technical and business teams together with a common language and goals" },
            { icon: <FaRocket />, title: "Future-Ready Design", desc: "We build for your needs today and your growth tomorrow" }
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

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Our Consultation Framework</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <FaLightbulb />, title: "Discovery", desc: "We learn about your business goals, current challenges, and existing infrastructure" },
            { icon: <FaSitemap />, title: "Assessment", desc: "We evaluate your current systems against industry best practices and your business needs" },
            { icon: <FaLayerGroup />, title: "Architecture Planning", desc: "We design a system architecture that aligns with your business objectives" },
            { icon: <FaRocket />, title: "Implementation Roadmap", desc: "We create a practical, phased plan to build or transform your systems" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-tektur text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
          "Greyquill's approach to our cloud migration was refreshing. Instead of starting with technology choices, they began by understanding our business goals and pain points. The resulting architecture wasn't just technically sound—it directly supported our growth strategy." — Financial Services Client
        </div>
      </section>

      {/* Cloud Strategies */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaCloud />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Finding Your Path to the Cloud</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Thinking about moving to the cloud? The journey looks different for every business. We help you navigate
          the options to find the strategy that best supports your specific goals.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
              borderTop: '3px solid #0B4F88'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">Cloud Migration Strategy</h3>
            <p className="text-gray-600 mb-3">Moving existing systems to the cloud requires careful planning:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Assessment of applications for cloud readiness</li>
              <li>• Choosing between rehost, refactor, or rebuild approaches</li>
              <li>• Data migration planning and execution</li>
              <li>• Minimizing disruption during transition</li>
            </ul>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
              borderTop: '3px solid #0B4F88'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">Multi-Cloud Strategy</h3>
            <p className="text-gray-600 mb-3">Sometimes one cloud provider isn't enough:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Evaluating which workloads fit best on which platforms</li>
              <li>• Creating consistent governance across providers</li>
              <li>• Managing costs effectively across multiple clouds</li>
              <li>• Implementing unified monitoring and management</li>
            </ul>
          </div>
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Choosing the Right Model for Your Business</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: <FaServer />, title: "Infrastructure (IaaS)", desc: "Virtual servers and storage without hardware headaches", best: "Organizations that want more control over their infrastructure but without managing physical hardware" },
            { icon: <FaLayerGroup />, title: "Platform (PaaS)", desc: "Development environments without infrastructure complexity", best: "Development teams focusing on application development without managing servers" },
            { icon: <FaCode />, title: "Serverless", desc: "Run code without thinking about servers at all", best: "Event-driven applications with variable workloads that benefit from automatic scaling" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#0B4F88] text-white flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <h4 className="font-tektur text-[#0B4F88]">{item.title}</h4>
              </div>
              <p className="text-gray-600 mb-2 text-sm">{item.desc}</p>
              <p className="text-xs text-gray-500"><strong>Best for:</strong> {item.best}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-5"
          style={{
            background: 'rgba(11, 79, 136, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h4 className="font-tektur text-[#0B4F88] mb-3">Our Cloud Strategy Approach</h4>
          <p className="text-gray-600 mb-4">
            We help you balance factors like cost, performance, security, and vendor lock-in to find your optimal cloud mix.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Identify which workloads should move to the cloud first",
              "Match workloads to the right cloud service models",
              "Create future-proof architecture patterns",
              "Build a practical migration roadmap with minimal risk"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributed Systems */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaNetworkWired />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Breaking Down Monoliths into Manageable Pieces</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Is your system becoming too complex to manage or scale effectively? Distributed systems architecture can help—but
          it requires careful planning to avoid creating more problems than it solves.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-4">When to Distribute Your Systems</h3>
            <ul className="space-y-3">
              {[
                "When you need to scale beyond what a single system can handle",
                "When different parts of your system have different resource needs",
                "When your team structure benefits from more modular codebases",
                "When you need to improve fault isolation and system resilience"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
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
            <h3 className="font-tektur text-[#0B4F88] mb-4">Common Distributed Patterns We Implement</h3>
            <ul className="space-y-3">
              {[
                { pattern: "Microservices", desc: "Breaking systems into focused, independent services" },
                { pattern: "Event-driven architecture", desc: "Systems that respond to events as they happen" },
                { pattern: "CQRS", desc: "Separating read and write operations for better performance" },
                { pattern: "API Gateway patterns", desc: "Simplifying client access to multiple services" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <FaCheckCircle className="text-[#0B4F88] mt-1 flex-shrink-0" />
                  <span><strong className="text-gray-800">{item.pattern}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Real-World Business Benefits</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: <FaRocket />, title: "Improved Scalability", desc: "Grow specific parts of your system as needed without having to scale everything" },
            { icon: <FaShieldAlt />, title: "Greater Resilience", desc: "Isolate failures to prevent one problem from affecting your entire system" },
            { icon: <FaUsers />, title: "Development Agility", desc: "Enable teams to work independently on different parts of your system" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-tektur text-[#0B4F88]">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
          "We were hitting the limits of our monolithic application's performance. Greyquill helped us break it down into microservices that could scale independently. Now our team can deploy updates faster, and we've eliminated the performance bottlenecks that were frustrating our customers." — E-commerce Client
        </div>
      </section>

      {/* Architecture Design */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaLayerGroup />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">System Design That Aligns With Business Goals</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Great architecture isn't just about technology—it's about creating a foundation that helps your business
          achieve its goals. Our architects design systems that balance technical excellence with practical business needs.
        </p>

        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          <h3 className="font-tektur text-[#0B4F88] mb-4">Our System Design Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-tektur text-gray-700 mb-3 flex items-center gap-2">
                <FaUsers className="text-[#0B4F88]" /> Stakeholder Workshops
              </h4>
              <p className="text-gray-600 text-sm mb-4">We bring together business and technical teams to understand requirements from all angles</p>

              <h4 className="font-tektur text-gray-700 mb-3 flex items-center gap-2">
                <FaLightbulb className="text-[#0B4F88]" /> Design Principles
              </h4>
              <p className="text-gray-600 text-sm">We establish clear principles that guide architecture decisions throughout your project</p>
            </div>
            <div>
              <h4 className="font-tektur text-gray-700 mb-3 flex items-center gap-2">
                <FaSitemap className="text-[#0B4F88]" /> System Modeling
              </h4>
              <p className="text-gray-600 text-sm mb-4">We create visual models of your system that help everyone understand how it will work</p>

              <h4 className="font-tektur text-gray-700 mb-3 flex items-center gap-2">
                <FaChartLine className="text-[#0B4F88]" /> Growth Planning
              </h4>
              <p className="text-gray-600 text-sm">We design with future scale in mind so your architecture can grow with your business</p>
            </div>
          </div>
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Architecture Decision Records</h3>
        <p className="text-gray-600 mb-4">
          We don't just create designs—we document the "why" behind them. This helps your team understand the reasoning
          and makes future decisions more consistent.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Context", desc: "What business problem are we trying to solve?" },
            { title: "Options", desc: "What alternatives did we consider?" },
            { title: "Decision", desc: "What approach did we choose and why?" },
            { title: "Consequences", desc: "What are the trade-offs and implications?" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0B4F88] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-tektur text-[#0B4F88] mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg p-5"
          style={{
            background: 'rgba(11, 79, 136, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h4 className="font-tektur text-[#0B4F88] mb-3">Architecture Deliverables</h4>
          <p className="text-gray-600 mb-4 text-sm">
            Our architecture consultation provides clear, practical documentation that guides your implementation:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "System context and container diagrams",
              "Component and interaction diagrams",
              "Technology selection rationale",
              "Data flow and storage design",
              "Security and compliance plans",
              "Implementation and migration roadmap"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaCogs />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Working Smarter with Automation</h2>
        </div>

        <p className="text-gray-600 mb-6">
          In today's complex systems, manual processes aren't just inefficient—they're unsustainable. We help you identify
          and implement automation that reduces errors, accelerates delivery, and lets your team focus on higher-value work.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: "Infrastructure Automation",
              items: ["Infrastructure as Code (IaC) implementation", "Self-healing system design", "Auto-scaling configurations"]
            },
            {
              title: "Delivery Automation",
              items: ["CI/CD pipeline design and implementation", "Automated testing strategies", "Zero-downtime deployment patterns"]
            },
            {
              title: "Operational Automation",
              items: ["Proactive monitoring and alerting", "Incident response automation", "Security compliance checks"]
            }
          ].map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
                borderTop: '3px solid #0B4F88'
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

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">AI-Enhanced Automation</h3>
        <p className="text-gray-600 mb-4">
          We go beyond basic automation by incorporating AI and machine learning to create systems that not just
          repeat tasks—but actually learn and improve over time.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Intelligent Scaling", desc: "Systems that predict traffic patterns and scale resources before they're needed—not after" },
            { title: "Predictive Maintenance", desc: "Identifying potential system issues before they affect users" },
            { title: "Automated Code Generation", desc: "Accelerating development with AI-assisted coding and testing" },
            { title: "Cost Optimization", desc: "AI-driven resource allocation to minimize cloud spending" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <h4 className="font-tektur text-[#0B4F88] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
          "The automation Greyquill implemented reduced our deployment time from days to minutes and virtually eliminated the configuration errors that used to plague our releases. Our developers can now focus on creating value instead of fighting with infrastructure." — Technology Client
        </div>
      </section>

      {/* Security */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaShieldAlt />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">Security by Design, Not Afterthought</h2>
        </div>

        <p className="text-gray-600 mb-6">
          In today's threat landscape, security can't be bolted on later—it must be woven into the fabric of your systems
          from day one. Our approach integrates security at every level of your architecture.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
              borderTop: '3px solid #0B4F88'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">Security Architecture</h3>
            <p className="text-gray-600 mb-3 text-sm">We design security controls across all system layers:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Network security zones and traffic control</li>
              <li>• Identity and access management strategies</li>
              <li>• Data encryption (in transit and at rest)</li>
              <li>• Secrets management and key rotation</li>
            </ul>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)',
              borderTop: '3px solid #0B4F88'
            }}
          >
            <h3 className="font-tektur text-[#0B4F88] mb-3">DevSecOps Integration</h3>
            <p className="text-gray-600 mb-3 text-sm">We build security into your development workflow:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Automated security testing in CI/CD pipelines</li>
              <li>• Infrastructure security scanning</li>
              <li>• Dependency vulnerability monitoring</li>
              <li>• Security policy as code</li>
            </ul>
          </div>
        </div>

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Compliance Without Compromise</h3>
        <p className="text-gray-600 mb-4">
          Meeting regulatory requirements doesn't have to slow you down. We help you design systems that satisfy
          compliance needs while maintaining the agility your business demands.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { icon: <FaDatabase />, title: "Data Governance", desc: "Ensuring proper handling of sensitive data across systems" },
            { icon: <FaSitemap />, title: "Audit Readiness", desc: "Comprehensive logging and monitoring for auditability" },
            { icon: <FaShieldAlt />, title: "Compliance as Code", desc: "Automated verification of security and compliance controls" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
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
          className="rounded-lg p-5"
          style={{
            background: 'rgba(11, 79, 136, 0.06)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h4 className="font-tektur text-[#0B4F88] mb-3">Our Security-First Mindset</h4>
          <p className="text-gray-600 mb-4 text-sm">We apply these principles in every system we design:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Zero-trust architecture by default",
              "Defense in depth with multiple security layers",
              "Least privilege access control",
              "Regular security assessments"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <FaCheckCircle className="text-[#0B4F88] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaRocket />
          </div>
          <h2 className="text-2xl font-tektur text-gray-800">From Planning to Production</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Great designs only create value when they're implemented effectively. We don't just help you plan—we guide
          you through turning those plans into reality with minimal risk and disruption.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <FaLayerGroup />, title: "Phased Approach", desc: "Breaking complex changes into manageable, lower-risk increments" },
            { icon: <FaUsers />, title: "Knowledge Transfer", desc: "Ensuring your team can confidently support what we build" },
            { icon: <FaChartLine />, title: "Clear Milestones", desc: "Defined checkpoints to measure progress and adjust course if needed" }
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

        <h3 className="font-tektur text-[#0B4F88] text-xl mb-4">Implementation Models</h3>
        <p className="text-gray-600 mb-4">We offer flexible engagement models to match your needs:</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            { icon: <FaLaptopCode />, title: "Advisory Support", desc: "We guide your internal team through implementation with expert advice" },
            { icon: <FaUsers />, title: "Embedded Expertise", desc: "Our specialists work alongside your team, providing hands-on support" },
            { icon: <FaRocket />, title: "Full Implementation", desc: "We manage the entire process from start to finish, then hand over to your team" },
            { icon: <FaHandshake />, title: "Ongoing Partnership", desc: "Long-term support to help your systems evolve with your business needs" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-tektur text-[#0B4F88] mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pl-4 italic text-gray-600" style={{ borderLeft: '3px solid #0B4F88' }}>
          "What impressed me most about Greyquill was their focus on making sure we could maintain the systems they built for us. They didn't just implement and leave—they invested time in training our team and created documentation that we still reference today." — Healthcare Client
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
        <h2 className="text-2xl font-tektur text-gray-800 mb-4">Ready to Transform Your Systems?</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Don't let outdated or inefficient systems hold your business back. With our expert consulting, you can build robust, scalable architectures that give you a competitive edge.
        </p>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          At Greyquill Software, we combine deep technical expertise with business acumen to help you navigate the complexities of modern distributed systems and cloud architecture.
        </p>
        <BookDiscoveryCallButton />
        <p className="mt-6">
          <Link to="/" className="text-[#0B4F88] hover:underline">Back to Home</Link>
        </p>
      </section>
    </main>
  );
};

export default DistributedSystemsCloudConsulting;
