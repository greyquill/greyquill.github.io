import React, { useState } from 'react';

function ContactForm({ showTitle = true }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', contactForm);
    setFormSubmitted(true);
    setContactForm({
      name: '',
      email: '',
      inquiryType: 'general',
      message: ''
    });
  };

  return (
    <div
      className="rounded-xl p-6"
      style={{
        background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
        boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
      }}
    >
      {showTitle && (
        <h2 className="text-2xl font-tektur text-gray-800 mb-6">Contact Us</h2>
      )}

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
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
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
            <label htmlFor="inquiryType" className="block text-gray-700 mb-2">
              Inquiry Type
            </label>
            <select
              id="inquiryType"
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
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
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
  );
}

export default ContactForm;
