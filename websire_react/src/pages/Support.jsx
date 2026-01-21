import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaQuestionCircle, FaEnvelopeOpenText, FaComments, FaThumbsUp, FaThumbsDown, FaChevronDown } from 'react-icons/fa';

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', inquiryType: 'general', message: '' });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const setFeedback = (helpful) => {
    setFeedbackType(helpful);
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { helpful: feedbackType, comments: feedbackText });
    setFeedbackGiven(true);
  };

  const faqs = [
    {
      id: 1,
      question: "What services does Greyquill Software offer?",
      answer: "Greyquill Software offers a range of services including Business Process Optimization, Custom Software Development, Legacy Application Modernization, and Distributed Systems & Cloud Consulting. Our solutions are tailored to meet the specific needs of your business, with a focus on driving efficiency and providing measurable value."
    },
    {
      id: 2,
      question: "How does your discovery process work?",
      answer: "Our discovery process begins with an initial engagement to understand your business goals and challenges. We then conduct stakeholder interviews, collaborative workshops, and business and technical analysis. For appropriate projects, we may develop a proof of concept before creating comprehensive documentation and a project roadmap. This thorough approach ensures we understand your needs before implementation begins."
    },
    {
      id: 3,
      question: "What are your typical project timelines?",
      answer: "Project timelines vary based on scope and complexity. A typical custom software project might take 3-6 months from discovery to deployment, while a business process optimization engagement could range from 4-12 weeks. During our discovery phase, we'll provide a detailed timeline specific to your project with key milestones clearly defined."
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we believe in building long-term partnerships with our clients. We offer various support options after project completion, including maintenance agreements, enhancement services, and training for your team. Our commitment to your success extends well beyond the initial implementation."
    },
    {
      id: 5,
      question: "How do you approach data security and privacy?",
      answer: "We prioritize data security and privacy in all our projects. We implement industry best practices for secure development, use encryption for sensitive data, and ensure compliance with relevant regulations like GDPR and CCPA. We also provide clear documentation of all security measures implemented in your solution."
    },
    {
      id: 6,
      question: "Can you work with our existing systems and technologies?",
      answer: "Absolutely. We specialize in integrating with existing systems and technologies. Our team has experience with a wide range of platforms, databases, and frameworks. During the discovery phase, we thoroughly assess your current technology stack to ensure seamless integration and identify any potential challenges early in the process."
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
      <Helmet>
        <title>Support Center - Greyquill Software | Help & FAQs</title>
        <meta name="description" content="Get help from Greyquill Software. Find answers to frequently asked questions, contact our support team, or provide feedback on your experience." />
        <link rel="canonical" href="https://greyquill.io/support" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">Support Center</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          Find answers to common questions, get in touch with our team, or provide feedback on your experience.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="mb-16" aria-labelledby="faq-heading">
        <div className="flex items-center justify-center mb-8">
          <FaQuestionCircle className="text-blue-500 text-3xl mr-3" aria-hidden="true" />
          <h2 id="faq-heading" className="text-3xl font-tektur text-gray-800 text-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expandedFaq === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-xl font-tektur text-gray-800 pr-4">{faq.question}</h3>
                <FaChevronDown
                  className={`w-5 h-5 transform transition-transform flex-shrink-0 ${expandedFaq === faq.id ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  expandedFaq === faq.id ? 'block' : 'hidden'
                }`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16" aria-labelledby="contact-heading">
        <div className="flex items-center justify-center mb-8">
          <FaEnvelopeOpenText className="text-blue-500 text-3xl mr-3" aria-hidden="true" />
          <h2 id="contact-heading" className="text-3xl font-tektur text-gray-800 text-center">
            Contact Us
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="text-5xl text-green-500 mb-4" aria-hidden="true">✓</div>
              <h3 className="text-2xl font-tektur text-gray-800 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your message has been received. We'll get back to you within 1 business day.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="support-name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="support-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="support-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="support-inquiryType" className="block text-gray-700 font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  id="support-inquiryType"
                  name="inquiryType"
                  value={contactForm.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="general">General Question</option>
                  <option value="services">Services Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="support-message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="support-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please tell us how we can help you..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="mb-16" aria-labelledby="feedback-heading">
        <div className="flex items-center justify-center mb-8">
          <FaComments className="text-blue-500 text-3xl mr-3" aria-hidden="true" />
          <h2 id="feedback-heading" className="text-3xl font-tektur text-gray-800 text-center">
            Website Feedback
          </h2>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-8">
          {feedbackGiven ? (
            <div className="text-center">
              <h3 className="text-xl font-tektur text-blue-700 mb-4">Thanks for your feedback!</h3>
              <p className="text-gray-600">
                We appreciate you taking the time to help us improve our website.
              </p>
            </div>
          ) : (
            <form onSubmit={submitFeedback} aria-label="Feedback form">
              <h3 className="text-xl font-tektur text-blue-700 mb-4 text-center">Did you find this website helpful?</h3>
              <p className="text-gray-600 mb-6 text-center">
                We're constantly working to improve our website. Your feedback helps us make it better.
              </p>

              <div className="flex justify-center space-x-4 mb-6" role="group" aria-label="Feedback rating">
                <button
                  type="button"
                  onClick={() => setFeedback(true)}
                  className={`flex items-center px-6 py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    feedbackType === true
                      ? 'bg-green-100 border-2 border-green-500'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-pressed={feedbackType === true}
                >
                  <FaThumbsUp className="text-green-500 mr-2" aria-hidden="true" />
                  Yes, it was helpful
                </button>
                <button
                  type="button"
                  onClick={() => setFeedback(false)}
                  className={`flex items-center px-6 py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    feedbackType === false
                      ? 'bg-red-100 border-2 border-red-500'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-pressed={feedbackType === false}
                >
                  <FaThumbsDown className="text-red-500 mr-2" aria-hidden="true" />
                  No, it needs improvement
                </button>
              </div>

              <div className="mb-6">
                <label htmlFor="feedbackText" className="block text-gray-700 font-medium mb-2">
                  Tell us more about your experience
                </label>
                <textarea
                  id="feedbackText"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What did you like or what could we improve?"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={feedbackType === null}
                  className={`px-8 py-3 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    feedbackType === null
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                  }`}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-white p-6 rounded-lg shadow mb-10" aria-labelledby="resources-heading">
        <h3 id="resources-heading" className="text-xl font-tektur text-blue-700 mb-3 text-center">Additional Resources</h3>
        <nav className="grid md:grid-cols-3 gap-4" aria-label="Additional resources">
          <Link to="/policies" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500">
            <h4 className="font-tektur text-gray-800 mb-2">Policies</h4>
            <p className="text-gray-600 text-sm">Review our policies regarding privacy, intellectual property, and more.</p>
          </Link>
          <Link to="/discovery-process" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500">
            <h4 className="font-tektur text-gray-800 mb-2">Discovery Process</h4>
            <p className="text-gray-600 text-sm">Learn about our approach to understanding your business needs.</p>
          </Link>
          <Link to="/news" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-500">
            <h4 className="font-tektur text-gray-800 mb-2">News & Updates</h4>
            <p className="text-gray-600 text-sm">Stay current with our latest announcements and insights.</p>
          </Link>
        </nav>
      </section>
    </motion.main>
  );
};

export default Support;
