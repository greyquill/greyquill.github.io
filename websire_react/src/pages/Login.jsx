import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      // Here you would make an API call to send verification code
      // For now, we'll simulate sending the code
      setLoginStep(2);
    } else if (loginStep === 2) {
      if (!credentials.verificationCode) {
        setError('Please enter the verification code');
        return;
      }
      // Here you would verify the code
      // For now, we'll just log the attempt
      console.log('Login attempted with:', credentials);
    }
  };

  return (
    <div className="pt-10 min-h-screen flex flex-col">
      <div className="text-left mb-6">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
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
            Customer Login
          </h1>

          <motion.div
            key={loginStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    We'll send you a verification code to login securely.
                  </p>
                </>
              ) : (
                <div>
                  <h2 className="text-xl font-tektur text-gray-800 mb-4">
                    Verify Your Email
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We've sent a verification code to {credentials.email}
                  </p>
                  <input
                    type="text"
                    name="verificationCode"
                    value={credentials.verificationCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter verification code"
                    maxLength="6"
                  />
                  <button
                    type="button"
                    onClick={() => setLoginStep(1)}
                    className="text-blue-500 hover:underline text-sm mt-2"
                  >
                    Change email address
                  </button>
                </div>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {loginStep === 1 ? 'Send Code' : 'Login'}
              </button>
            </form>

            {loginStep === 1 && (
              <div className="mt-6 text-center">
                <Link to="/login-assistance" className="text-blue-500 hover:underline text-sm">
                  Having trouble logging in?
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;