import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
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

      <nav aria-label="Breadcrumb" className="text-left mb-10">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          We're here to answer your questions and discuss how we can help your business succeed.
        </p>
      </header>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <aside className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-tektur text-gray-800 mb-5">Contact Information</h2>

              <address className="space-y-5 not-italic">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-700">Location</h3>
                    <p className="text-gray-600 text-sm">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-700">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+918050522809" className="hover:text-blue-600 focus:outline-none focus:underline">
                        +91 80 5052 2809
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
                  <div className="overflow-hidden">
                    <h3 className="font-medium text-sm text-gray-700">Email</h3>
                    <p className="text-gray-600 text-sm break-all">
                      <a href="mailto:amarnath@greyquill.io" className="hover:text-blue-600 focus:outline-none focus:underline">
                        amarnath@greyquill.io
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
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
        <section className="bg-gray-50 rounded-lg p-8 mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-tektur text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">What is your typical response time?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 1 business day. For urgent matters, please mention this in your message.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">Do you offer remote consultations?</h3>
              <p className="text-gray-600">Yes, we conduct most of our consultations remotely via video conferencing to accommodate clients nationwide.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">How do I request a quote for my project?</h3>
              <p className="text-gray-600">Use our contact form and select "Request a Quote" as the inquiry type. Provide details about your project for an accurate estimate.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">What information should I prepare for our first call?</h3>
              <p className="text-gray-600">Having a brief overview of your business, current challenges, and goals will help us make the most of our initial conversation.</p>
            </article>
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default Contact;
