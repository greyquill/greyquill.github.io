import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import {
  FaChartLine, FaUsers, FaCogs, FaLightbulb, FaCheckCircle,
  FaRocket, FaHandshake, FaLaptopCode, FaExchangeAlt, FaShieldAlt,
  FaUniversity, FaSitemap, FaDatabase
} from 'react-icons/fa';

const OverallProcess = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
      <Helmet>
        <title>Our Methodology - Greyquill Software | Process-First Approach</title>
        <meta name="description" content="Discover the Greyquill methodology for transforming business challenges into effective solutions. Our process-first approach ensures technology serves your business goals." />
        <link rel="canonical" href="https://greyquill.io/overall-process" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">The Greyquill Methodology</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          How we transform your business challenges into effective solutions through
          our comprehensive, client-centered approach.
        </p>
      </header>

      {/* Core Philosophy Section */}
      <section className="mb-16" aria-labelledby="philosophy-heading">
        <h2 id="philosophy-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Our Core Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaLightbulb className="mr-2 text-blue-600" aria-hidden="true" /> Process-First Approach
            </h3>
            <p className="text-gray-600">We understand and optimize your business processes before implementing technology solutions.</p>
          </article>

          <article className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaHandshake className="mr-2 text-blue-600" aria-hidden="true" /> Long-term Partnership
            </h3>
            <p className="text-gray-600">We walk alongside you throughout your entire journey, providing ongoing support as your business evolves.</p>
          </article>

          <article className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-tektur text-blue-700 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-blue-600" aria-hidden="true" /> Ownership & Accountability
            </h3>
            <p className="text-gray-600">We take full responsibility for the solutions we deliver, standing behind our work with confidence.</p>
          </article>
        </div>
      </section>

      {/* Process Overview Section */}
      <section className="mb-16" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">Our End-to-End Process</h2>

        <div className="relative pb-12 mb-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" aria-hidden="true"></div>
          <div className="relative z-10 space-y-8">
            <article className="flex items-center">
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4" aria-hidden="true">
                <FaUniversity />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h3 className="font-tektur text-blue-700">Discovery Phase</h3>
                <p>We begin with a structured discovery process to understand your business goals, challenges, and requirements.</p>
                <Link to="/discovery-process" className="text-blue-500 hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">Learn more about our discovery process</Link>
              </div>
            </article>

            <article className="flex items-center flex-row-reverse">
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4" aria-hidden="true">
                <FaSitemap />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h3 className="font-tektur text-blue-700">Solution Design</h3>
                <p>We craft tailored solutions based on your unique business needs and technical requirements.</p>
              </div>
            </article>

            <article className="flex items-center">
              <div className="bg-blue-500 rounded-full p-3 text-white mr-4" aria-hidden="true">
                <FaLaptopCode />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h3 className="font-tektur text-blue-700">Implementation</h3>
                <p>We implement solutions with careful planning, quality assurance, and ongoing communication.</p>
              </div>
            </article>

            <article className="flex items-center flex-row-reverse">
              <div className="bg-blue-500 rounded-full p-3 text-white ml-4" aria-hidden="true">
                <FaRocket />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h3 className="font-tektur text-blue-700">Continuous Support & Evolution</h3>
                <p>We provide ongoing support and ensure your solution evolves with your changing business needs.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="mb-16" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Our Service Areas
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Business Process Optimization</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Streamline core business practices</li>
                <li>Optimize team performance and workflows</li>
                <li>Enhance value creation throughout processes</li>
                <li>Identify and eliminate bottlenecks</li>
              </ul>
              <div className="mt-4">
                <Link to="/business-process-optimization" className="text-blue-500 hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Learn more <FaChartLine className="ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Custom Software Development</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Tailored solutions for your unique business needs</li>
                <li>Collaborative, client-centered development approach</li>
                <li>Comprehensive documentation and knowledge transfer</li>
                <li>Ongoing maintenance and improvement</li>
              </ul>
              <div className="mt-4">
                <Link to="/custom-software-development" className="text-blue-500 hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Learn more <FaLaptopCode className="ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Legacy Application Modernization</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Business-driven modernization strategy</li>
                <li>Value preservation from existing systems</li>
                <li>Phased, low-risk implementation</li>
                <li>Future-proofing with modern architectures</li>
              </ul>
              <div className="mt-4">
                <Link to="/legacy-application-modernization" className="text-blue-500 hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Learn more <FaExchangeAlt className="ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 px-6 py-3">
              <h3 className="text-xl font-tektur text-white">Distributed Systems & Cloud Consulting</h3>
            </div>
            <div className="p-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>Business-aligned architecture design</li>
                <li>Cloud strategy and implementation</li>
                <li>Security and compliance by design</li>
                <li>Automation and operational excellence</li>
              </ul>
              <div className="mt-4">
                <Link to="/distributed-systems-cloud-consulting" className="text-blue-500 hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Learn more <FaCogs className="ml-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Implementation Best Practices */}
      <section className="mb-16" aria-labelledby="practices-heading">
        <h2 id="practices-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Our Implementation Best Practices
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaSitemap className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Architecture & Design</h3>
            </div>
            <p className="text-gray-700">Business-aligned system design with comprehensive documentation and balanced innovation.</p>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaCogs className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Automation</h3>
            </div>
            <p className="text-gray-700">Smart automation with self-healing systems, CI/CD pipelines, and zero-downtime deployments.</p>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Security</h3>
            </div>
            <p className="text-gray-700">Security by design with comprehensive controls, encryption, and ongoing testing.</p>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaUsers className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Change Management</h3>
            </div>
            <p className="text-gray-700">People-centered approach to technological change with comprehensive risk mitigation.</p>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Data-Driven Decision Making</h3>
            </div>
            <p className="text-gray-700">Strategic use of analytics and metrics to guide project direction and measure success.</p>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaRocket className="text-blue-600 text-2xl mr-3" aria-hidden="true" />
              <h3 className="text-xl font-tektur text-blue-700">Future-Proofing</h3>
            </div>
            <p className="text-gray-700">Modern standards with ongoing assessments and agile enhancement cycles.</p>
          </article>
        </div>
      </section>

      {/* Outcomes & Benefits Section */}
      <section className="mb-16" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="text-3xl font-tektur text-gray-800 mb-8 text-center">
          Outcomes & Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Business Impact</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improved operational efficiency</li>
              <li>Reduced costs through optimization</li>
              <li>Enhanced customer satisfaction</li>
              <li>Increased market agility</li>
              <li>Better business-technology alignment</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Technical Advantages</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Scalable, future-proof systems</li>
              <li>Improved reliability and performance</li>
              <li>Enhanced security and compliance</li>
              <li>Reduced technical debt</li>
              <li>Easier system integration</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-tektur text-blue-700 mb-4">Organizational Benefits</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Better team collaboration</li>
              <li>Improved knowledge transfer</li>
              <li>Reduced resistance to change</li>
              <li>Greater operational visibility</li>
              <li>Increased innovation capabilities</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-6 rounded-lg shadow-lg text-center mb-12" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-2xl font-tektur mb-4">Ready to Transform Your Business Challenges?</h2>
        <p className="mb-6 text-lg">
          Schedule a discovery call to discuss how Greyquill can help you achieve your business goals.
        </p>
        <BookDiscoveryCallButton />
      </section>

      {/* Testimonial */}
      <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 mb-10">
        <p className="text-lg">
          "Greyquill's approach to our digital transformation was refreshing. They started by understanding our business processes and challenges before proposing solutions. The result was technology that truly supported our strategic goals, not just a technical upgrade."
        </p>
        <footer className="mt-2 font-semibold not-italic">— Financial Services Client</footer>
      </blockquote>
    </motion.main>
  );
};

export default OverallProcess;
