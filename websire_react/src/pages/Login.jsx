import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [loginStep, setLoginStep] = useState(1);
  const [credentials, setCredentials] = useState({
    email: '',
    verificationCode: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateEmail = () => {
    if (!credentials.email) {
      setError('Please enter your email');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginStep === 1 && validateEmail()) {
      setLoginStep(2);
    } else if (loginStep === 2) {
      if (!credentials.verificationCode) {
        setError('Please enter the verification code');
        return;
      }
      console.log('Login attempted with:', credentials);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pt-10 min-h-screen flex flex-col"
    >
      <Helmet>
        <title>Customer Login - Greyquill Software</title>
        <meta name="description" content="Login to your Greyquill Software customer portal to access your projects and support." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <div className="flex-grow mt-10 flex flex-col items-center justify-start">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-tektur text-gray-800 text-center mb-8">
            Customer Login
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Login form">
              {loginStep === 1 ? (
                <>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby="email-help"
                    />
                    <p id="email-help" className="text-gray-600 text-sm mt-2">
                      We'll send you a verification code to login securely.
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <h2 className="text-xl font-tektur text-gray-800 mb-4">
                    Verify Your Email
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We've sent a verification code to {credentials.email}
                  </p>
                  <label className="sr-only" htmlFor="verificationCode">Verification Code</label>
                  <input
                    type="text"
                    id="verificationCode"
                    name="verificationCode"
                    value={credentials.verificationCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter verification code"
                    maxLength="6"
                    autoComplete="one-time-code"
                    aria-required="true"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                  <button
                    type="button"
                    onClick={() => setLoginStep(1)}
                    className="text-blue-500 hover:underline text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Change email address
                  </button>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-sm mt-2" role="alert" aria-live="polite">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {loginStep === 1 ? 'Send Code' : 'Login'}
              </button>
            </form>

            {loginStep === 1 && (
              <div className="mt-6 text-center">
                <Link to="/login-assistance" className="text-blue-500 hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                  Having trouble logging in?
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Login;
