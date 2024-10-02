import React from 'react';

function Description() {
  return (
    <div className="company-description p-5 rounded-lg mt-10" style={{ backgroundColor: '#0B4F88', color: '#eefbff' }}> {/* Updated background and text color */}
      <div className="title text-l font-bold mb-6 text-center"> {/* Title styling with smaller text size */}
        Key Operating Principles
      </div>
      <div className="content flex"> {/* Flexbox for left and right alignment */}
        <div className="left-side w-1/2 pr-4"> {/* Left side styling with padding */}
          <p className="mb-4 text-xs"><strong>#</strong> We offer predictability at the core of our services. Our systems and consultants work together to ensure that you always know what to expect, from start to finish.</p>
          <p className="text-xs"><strong>#</strong> We're all about results. If we don't deliver, you don't pay. It's that simple.</p>
        </div>
        <div className="right-side w-1/2 pl-4"> {/* Right side styling with padding */}
          <p className="mb-4 text-xs"><strong>#</strong> We invest in research and development to ensure that we are always at the forefront of technology. This allows us to offer our customers the most innovative and cutting-edge solutions.</p>
          <p className="text-xs"><strong>#</strong> Goal of our partnership - We plan and ideate alongside you, to make YOU successful</p>
        </div>
      </div>
    </div>
  );
}

export default Description;