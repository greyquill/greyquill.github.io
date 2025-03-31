import React, { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';

function ContactForm({ showTitle = true }) {
  // Form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      inquiryType: 'general',
      message: ''
    });
  };

  return (
    <section className="mb-16">
      {showTitle && (
        <div className="flex items-center justify-center mb-8">
          <FaEnvelopeOpenText className="text-blue-500 text-3xl mr-3" />
          <h2 className="text-3xl font-tektur text-gray-800 text-center">
            Contact Us
          </h2>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8">
        {formSubmitted ? (
          <div className="text-center py-8">
            <div className="text-5xl text-green-500 mb-4">✓</div>
            <h3 className="text-2xl font-tektur text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been received. We'll get back to you within 1 business day.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="inquiryType" className="block text-gray-700 font-medium mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
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
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please tell us how we can help you..."
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;