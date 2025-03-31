import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="py-10">
      <div className="text-left mb-10 left-0">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-tektur text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-xl font-titillium max-w-2xl mx-auto">
          We're here to answer your questions and discuss how we can help your business succeed.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-tektur text-gray-800 mb-5">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-700">Location</h3>
                    <p className="text-gray-600 text-sm">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-700">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 80 5052 2809</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <h3 className="font-medium text-sm text-gray-700">Email</h3>
                    <p className="text-gray-600 text-sm break-all">amarnath@greyquill.io</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-blue-500 text-lg mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-700">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-2">
            <ContactForm showTitle={false} />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-tektur text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">What is your typical response time?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 1 business day. For urgent matters, please mention this in your message.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">Do you offer remote consultations?</h3>
              <p className="text-gray-600">Yes, we conduct most of our consultations remotely via video conferencing to accommodate clients nationwide.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">How do I request a quote for my project?</h3>
              <p className="text-gray-600">Use our contact form and select "Request a Quote" as the inquiry type. Provide details about your project for an accurate estimate.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-tektur text-gray-800 mb-2">What information should I prepare for our first call?</h3>
              <p className="text-gray-600">Having a brief overview of your business, current challenges, and goals will help us make the most of our initial conversation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;