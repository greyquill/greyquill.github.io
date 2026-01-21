import React, { useEffect } from 'react';

function BookDiscoveryCallButton() {
  useEffect(() => {
    // Add Calendly widget script
    const head = document.querySelector('head');

    const styleLink = document.createElement('link');
    styleLink.href = 'https://assets.calendly.com/assets/external/widget.css';
    styleLink.rel = 'stylesheet';
    head.appendChild(styleLink);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    // Clean up on component unmount
    return () => {
      head.removeChild(styleLink);
      head.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // Make sure Calendly is loaded
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/greyquill/30min'
      });
    } else {
      // Fallback if Calendly is not loaded
      window.open('https://calendly.com/greyquill/30min', '_blank');
    }
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={openCalendly}
        className="bg-[#0B4F88] text-white px-6 py-3 rounded-full active:bg-[#083d6a] active:shadow-lg transition duration-300 active:translate-y-1 hover:bg-[#0a4577] hover:shadow-md"
      >
        Book a free discovery session with Us
      </button>
    </div>
  );
}

export default BookDiscoveryCallButton;
