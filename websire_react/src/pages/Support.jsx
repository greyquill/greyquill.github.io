import React, { useState } from 'react';
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
      answer: "Greyquill Software offers Business Process Optimization, Custom Software Development, Legacy Application Modernization, and Distributed Systems & Cloud Consulting. Our solutions are tailored to meet the specific needs of your business."
    },
    {
      id: 2,
      question: "How does your discovery process work?",
      answer: "Our discovery process begins with an initial engagement to understand your business goals and challenges. We then conduct stakeholder interviews, collaborative workshops, and business and technical analysis. This thorough approach ensures we understand your needs before implementation begins."
    },
    {
      id: 3,
      question: "What are your typical project timelines?",
      answer: "Project timelines vary based on scope and complexity. A typical custom software project might take 3-6 months from discovery to deployment. During our discovery phase, we'll provide a detailed timeline specific to your project."
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we believe in building long-term partnerships with our clients. We offer various support options including maintenance agreements, enhancement services, and training for your team."
    },
    {
      id: 5,
      question: "How do you approach data security and privacy?",
      answer: "We prioritize data security and privacy in all our projects. We implement industry best practices for secure development, use encryption for sensitive data, and ensure compliance with relevant regulations like GDPR and CCPA."
    },
    {
      id: 6,
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems and technologies. Our team has experience with a wide range of platforms, databases, and frameworks."
    }
  ];

  return (
    <main className="py-10">
      <Helmet>
        <title>Support Center - Greyquill Software | Help & FAQs</title>
        <meta name="description" content="Get help from Greyquill Software. Find answers to frequently asked questions, contact our support team, or provide feedback." />
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

      <nav aria-label="Breadcrumb" className="text-left mb-8">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Help & Support</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Support Center</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, get in touch with our team, or provide feedback.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="mb-12" aria-labelledby="faq-heading">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaQuestionCircle />
          </div>
          <h2 id="faq-heading" className="text-2xl font-tektur text-gray-800">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={expandedFaq === faq.id}
              >
                <h3 className="font-tektur text-gray-800 pr-4">{faq.question}</h3>
                <FaChevronDown
                  className={`text-[#0B4F88] flex-shrink-0 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFaq === faq.id && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-12" aria-labelledby="contact-heading">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaEnvelopeOpenText />
          </div>
          <h2 id="contact-heading" className="text-2xl font-tektur text-gray-800">Contact Us</h2>
        </div>

        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="text-5xl text-green-500 mb-4">✓</div>
              <h3 className="text-2xl font-tektur text-gray-800 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your message has been received. We'll get back to you within 1 business day.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="bg-[#0B4F88] text-white px-6 py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="support-name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="support-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="support-email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="support-inquiryType" className="block text-gray-700 mb-2">Inquiry Type</label>
                <select
                  id="support-inquiryType"
                  name="inquiryType"
                  value={contactForm.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                >
                  <option value="general">General Question</option>
                  <option value="services">Services Information</option>
                  <option value="quote">Request a Quote</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="support-message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="support-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                  placeholder="Please tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#0B4F88] text-white px-6 py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="mb-12" aria-labelledby="feedback-heading">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0B4F88] text-white flex items-center justify-center">
            <FaComments />
          </div>
          <h2 id="feedback-heading" className="text-2xl font-tektur text-gray-800">Website Feedback</h2>
        </div>

        <div
          className="rounded-xl p-6"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
          }}
        >
          {feedbackGiven ? (
            <div className="text-center">
              <h3 className="text-xl font-tektur text-[#0B4F88] mb-4">Thanks for your feedback!</h3>
              <p className="text-gray-600">We appreciate you taking the time to help us improve.</p>
            </div>
          ) : (
            <form onSubmit={submitFeedback}>
              <h3 className="font-tektur text-[#0B4F88] mb-4 text-center">Did you find this website helpful?</h3>

              <div className="flex justify-center gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setFeedback(true)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    feedbackType === true
                      ? 'bg-green-100 border-2 border-green-500'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <FaThumbsUp className="text-green-500 mr-2" />
                  Yes, helpful
                </button>
                <button
                  type="button"
                  onClick={() => setFeedback(false)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    feedbackType === false
                      ? 'bg-red-100 border-2 border-red-500'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <FaThumbsDown className="text-red-500 mr-2" />
                  Needs improvement
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="feedbackText" className="block text-gray-700 mb-2">
                  Tell us more (optional)
                </label>
                <textarea
                  id="feedbackText"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                  placeholder="What could we improve?"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={feedbackType === null}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    feedbackType === null
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#0B4F88] text-white hover:bg-[#083d6a]'
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
      <section className="mb-8">
        <h3 className="text-xl font-tektur text-[#0B4F88] mb-4 text-center">Additional Resources</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { to: "/policies", title: "Policies", desc: "Review our privacy and terms policies" },
            { to: "/discovery-process", title: "Discovery Process", desc: "Learn about our approach" },
            { to: "/news", title: "News & Updates", desc: "Latest announcements and insights" }
          ].map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="rounded-lg p-4 text-center hover:bg-[#0B4F88]/5 transition-colors"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)' }}
            >
              <h4 className="font-tektur text-gray-800 mb-1">{link.title}</h4>
              <p className="text-gray-600 text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Support;
