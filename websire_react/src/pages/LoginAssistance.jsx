import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const LoginAssistance = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Here you would typically make an API call to trigger password reset
    // For now, we'll simulate success
    setIsSubmitted(true);

    // Redirect to login page after 5 seconds
    setTimeout(() => {
      navigate('/login');
    }, 5000);
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col">
      <div className="text-left mb-6">
        <Link to="/login" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Login
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow mt-10 flex flex-col items-center justify-start"
      >
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-tektur text-gray-800 text-center mb-8">
            Login Assistance
          </h1>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="text-green-600 text-xl mb-4">
                <i className="fas fa-check-circle text-3xl mb-4"></i>
                <p>Request Received!</p>
              </div>
              <p className="text-gray-600 mb-4">
                Our team will contact you shortly at your email address
                to assist with account access.
              </p>
              <p className="text-gray-500 text-sm">
                Redirecting to login page in a few seconds...
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <p className="text-gray-600 mb-6">
                Enter your email address and our team will get in touch with you to assist with your account access.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Request Login Assistance
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LoginAssistance;