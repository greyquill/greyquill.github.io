import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <main className="py-10">
      <Helmet>
        <title>Contact Us - Greyquill Software | Get in Touch</title>
        <meta name="description" content="Contact Greyquill Software for enterprise software solutions. Located in Bengaluru, India. Call +91 80 5052 2809 or email us. We respond within 1 business day." />
        <link rel="canonical" href="https://greyquill.io/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Greyquill Software",
              "telephone": "+91-80-5052-2809",
              "email": "amarnath@greyquill.io",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressCountry": "IN"
              }
            }
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
        <p className="text-[#0B4F88] font-semibold uppercase tracking-wide text-sm mb-2">Reach Out</p>
        <h1 className="text-4xl font-tektur text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to answer your questions and discuss how we can help your business succeed.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Contact Information */}
        <aside className="col-span-1">
          <div
            className="rounded-xl p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
            }}
          >
            <h2 className="text-xl font-tektur text-gray-800 mb-5">Contact Information</h2>

            <address className="space-y-5 not-italic">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#0B4F88] text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-sm text-gray-700">Location</h3>
                  <p className="text-gray-600 text-sm">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-[#0B4F88] text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-sm text-gray-700">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+918050522809" className="hover:text-[#0B4F88]">
                      +91 80 5052 2809
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-[#0B4F88] text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                <div className="overflow-hidden">
                  <h3 className="font-medium text-sm text-gray-700">Email</h3>
                  <p className="text-gray-600 text-sm break-all">
                    <a href="mailto:amarnath@greyquill.io" className="hover:text-[#0B4F88]">
                      amarnath@greyquill.io
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-[#0B4F88] text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-sm text-gray-700">Business Hours</h3>
                  <p className="text-gray-600 text-sm">Monday - Saturday: 9AM - 6PM IST</p>
                </div>
              </div>
            </address>
          </div>
        </aside>

        {/* Contact Form */}
        <section className="col-span-2" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
          <ContactForm showTitle={false} />
        </section>
      </div>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { q: "What is your typical response time?", a: "We aim to respond to all inquiries within 1 business day. For urgent matters, please mention this in your message." },
            { q: "Do you offer remote consultations?", a: "Yes, we conduct most of our consultations remotely via video conferencing to accommodate clients worldwide." },
            { q: "How do I request a quote for my project?", a: "Use our contact form and select 'Request a Quote' as the inquiry type. Provide details about your project for an accurate estimate." },
            { q: "What information should I prepare for our first call?", a: "Having a brief overview of your business, current challenges, and goals will help us make the most of our initial conversation." }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-lg p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.08)'
              }}
            >
              <h3 className="font-tektur text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
