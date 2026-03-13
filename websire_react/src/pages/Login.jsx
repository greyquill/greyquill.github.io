import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState(null); // 'customer' or 'employee'
  const [loginStep, setLoginStep] = useState(1); // 1 = email, 2 = verification code
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginStep === 1 && validateEmail()) {
      setLoginStep(2);
    } else if (loginStep === 2) {
      if (!credentials.verificationCode) {
        setError('Please enter the verification code');
        return;
      }
      // Verification handled by external application
      console.log('Login attempted:', { role: selectedRole, ...credentials });
    }
  };

  const handleBack = () => {
    if (loginStep === 2) {
      setLoginStep(1);
      setCredentials(prev => ({ ...prev, verificationCode: '' }));
      setError('');
    } else {
      setSelectedRole(null);
      setCredentials({ email: '', verificationCode: '' });
      setError('');
      setLoginStep(1);
    }
  };

  const roleLabel = selectedRole === 'customer' ? 'Customer' : 'Employee';

  return (
    <main className="pt-4 min-h-screen flex flex-col">
      <Helmet>
        <title>Login - Greyquill Software</title>
        <meta name="description" content="Login to your Greyquill Software portal to access your projects and support." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-2">
        <Link to="/" className="text-[#0B4F88] hover:underline">
          <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Home
        </Link>
      </nav>

      <div className="flex-grow flex items-start justify-center mt-6 md:mt-10">
        <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg min-h-[500px]">

          {/* Left Side - Graphic */}
          <div
            className="md:w-1/2 w-full flex items-center justify-center p-10 relative"
            style={{ background: 'linear-gradient(135deg, #0B4F88 0%, #1a6bb5 50%, #0B4F88 100%)' }}
          >
            <div className="text-center text-white">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 mx-auto opacity-90"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="10" y="20" width="80" height="60" rx="4" stroke="white" strokeWidth="2" fill="none" />
                  <line x1="10" y1="35" x2="90" y2="35" stroke="white" strokeWidth="2" />
                  <circle cx="20" cy="27.5" r="3" fill="#ff6b6b" />
                  <circle cx="30" cy="27.5" r="3" fill="#ffd93d" />
                  <circle cx="40" cy="27.5" r="3" fill="#6bcb77" />
                  <rect x="25" y="45" width="50" height="4" rx="2" fill="white" opacity="0.5" />
                  <rect x="25" y="55" width="35" height="4" rx="2" fill="white" opacity="0.3" />
                  <rect x="25" y="65" width="42" height="4" rx="2" fill="white" opacity="0.4" />
                </svg>
              </div>
              <h2 className="text-2xl font-tektur mb-3">Greyquill Portal</h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                Access your project dashboards, track progress, and collaborate with our team securely.
              </p>
            </div>
          </div>

          {/* Right Side - Login Options / Form */}
          <div className="md:w-1/2 w-full bg-white flex flex-col items-center justify-center p-8 md:p-10">

            {/* Role Selection */}
            {!selectedRole && (
              <div className="w-full max-w-sm space-y-5">
                <h1 className="text-2xl font-tektur text-gray-800 text-center mb-6">
                  Select Login Type
                </h1>

                <button
                  onClick={() => setSelectedRole('customer')}
                  className="w-full text-left border-2 border-gray-200 rounded-xl p-6 hover:border-[#0B4F88] hover:shadow-md transition-all group"
                  aria-label="Login as a Customer"
                >
                  <h2 className="text-lg font-tektur text-gray-800 group-hover:text-[#0B4F88] transition-colors">
                    Customer Login
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    For clients with active projects. Access your dashboards and project updates.
                  </p>
                </button>

                <a
                  href="https://portal.greyquill.io/"
                  className="w-full text-left border-2 border-gray-200 rounded-xl p-6 hover:border-[#0B4F88] hover:shadow-md transition-all group block"
                  aria-label="Login as an Employee"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-lg font-tektur text-gray-800 group-hover:text-[#0B4F88] transition-colors">
                    Employee Login
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    For Greyquill team members. Access internal tools and workspaces.
                  </p>
                </a>
              </div>
            )}

            {/* Email / Verification Form */}
            {selectedRole && (
              <div className="w-full max-w-sm">
                <button
                  onClick={handleBack}
                  className="text-[#0B4F88] hover:underline text-sm mb-6 inline-flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>
                  {loginStep === 2 ? 'Change email' : 'Back to login options'}
                </button>

                <h1 className="text-2xl font-tektur text-gray-800 mb-2">
                  {roleLabel} Login
                </h1>

                {loginStep === 1 && (
                  <p className="text-gray-500 text-sm mb-6">
                    Enter your email and we'll send you a verification code.
                  </p>
                )}

                {loginStep === 2 && (
                  <p className="text-gray-500 text-sm mb-6">
                    We've sent a verification code to <span className="font-medium text-gray-700">{credentials.email}</span>
                  </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" aria-label={`${roleLabel} login form`}>
                  {loginStep === 1 ? (
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4F88] focus:border-transparent transition-all"
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-required="true"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="verificationCode">
                        Verification Code
                      </label>
                      <input
                        type="text"
                        id="verificationCode"
                        name="verificationCode"
                        value={credentials.verificationCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B4F88] focus:border-transparent transition-all text-center text-xl tracking-widest"
                        placeholder="------"
                        maxLength="6"
                        autoComplete="one-time-code"
                        aria-required="true"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoFocus
                      />
                    </div>
                  )}

                  {error && (
                    <p className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#0B4F88] text-white py-3 rounded-lg hover:bg-[#083d6a] transition-colors font-medium"
                  >
                    {loginStep === 1 ? 'Send Verification Code' : 'Verify & Login'}
                  </button>
                </form>

                {loginStep === 1 && (
                  <div className="mt-6 text-center">
                    <Link to="/login-assistance" className="text-[#0B4F88] hover:underline text-sm">
                      Having trouble logging in?
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
