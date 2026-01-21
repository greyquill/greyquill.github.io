import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

    setIsSubmitted(true);

    setTimeout(() => {
      navigate('/login');
    }, 5000);
  };

  return (
    <main className="pt-10 min-h-screen flex flex-col">
      <Helmet>
        <title>Login Assistance - Greyquill Software</title>
        <meta name="description" content="Get help accessing your Greyquill Software customer account. Our team will assist you with account recovery." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/login" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Login
        </Link>
      </nav>

      <div className="flex-grow mt-10 flex flex-col items-center justify-start">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-tektur text-gray-800 text-center mb-8">
            Login Assistance
          </h1>

          {isSubmitted ? (
            <div
              className="rounded-xl p-8 text-center"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
              }}
              role="status"
              aria-live="polite"
            >
              <div className="text-green-600 text-xl mb-4">
                <i className="fas fa-check-circle text-3xl mb-4" aria-hidden="true"></i>
                <p>Request Received!</p>
              </div>
              <p className="text-gray-600 mb-4">
                Our team will contact you shortly at your email address
                to assist with account access.
              </p>
              <p className="text-gray-500 text-sm">
                Redirecting to login page in a few seconds...
              </p>
            </div>
          ) : (
            <div
              className="rounded-xl p-8"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
              }}
            >
              <p className="text-gray-600 mb-6">
                Enter your email address and our team will get in touch with you to assist with your account access.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Login assistance form">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="assistance-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="assistance-email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0B4F88]"
                    placeholder="Enter your email"
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm" role="alert" aria-live="polite">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0B4F88] text-white py-2 rounded-lg hover:bg-[#083d6a] transition-colors"
                >
                  Request Login Assistance
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default LoginAssistance;
