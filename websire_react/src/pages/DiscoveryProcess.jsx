import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';

const DiscoveryProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const STEP_DURATION = 10000; // 10 seconds per step

  // Define steps array before using it
  const steps = [
    {
      title: "1. Initial Engagement & Discovery Kickoff",
      inputs: [
        "High-level business goals and pain points",
        "Existing market insights or preliminary ideas",
        "Stakeholder list and available documentation",
      ],
      outputs: [
        "A project brief outlining objectives, challenges, and the discovery approach",
        "Alignment on key outcomes and success criteria",
        "A preliminary roadmap and engagement plan",
      ]
    },
    {
      title: "2. Stakeholder Interviews & Requirements Elicitation",
      inputs: [
        "Participation from key stakeholders (executives, product owners, end users)",
        "Existing process documents, system reports, and business metrics",
      ],
      outputs: [
        "A consolidated list of business needs and user pain points",
        "Draft user personas and process maps",
        "An initial set of requirements that set the stage for further analysis",
      ]
    },
    {
      title: "3. Collaborative Workshops & Brainstorming Sessions",
      inputs: [
        "The draft requirements and user personas from interviews",
        "Market research findings and competitor analysis insights",
      ],
      outputs: [
        "A refined and validated Business Requirements Document (BRD)",
        "Detailed use cases, process flow diagrams, and prioritization of features",
        "Stakeholder consensus and a common language for success",
      ]
    },
    {
      title: "4. Business & Technical Analysis",
      inputs: [
        "Finalized BRD and workshop outcomes",
        "Client's current technical environment details and constraints",
        "Industry standards and risk assessment data",
      ],
      outputs: [
        "A Technical Feasibility Report with recommended technology stacks",
        "A risk assessment and mitigation plan",
        "A high-level System Architecture document",
      ]
    },
    {
      title: "5. Proof of Concept (POC) / Prototyping",
      subtitle: "(Optional, Based on Project Scope)",
      inputs: [
        "Refined requirements and technical analysis outcomes",
        "Key scenarios and prioritized features for validation",
      ],
      outputs: [
        "A working prototype or POC demo to illustrate critical features",
        "User feedback and validation of technical approach",
        "A clear demonstration of concept viability to de-risk the project",
      ]
    },
    {
      title: "6. Comprehensive Documentation & Project Roadmap",
      inputs: [
        "Combined findings from business and technical assessments",
        "POC feedback (if applicable) and stakeholder approvals",
      ],
      outputs: [
        "A full Project Requirements Document (PRD) detailing functional and non-functional needs",
        "A detailed Project Roadmap with milestones, time estimates, and budget outlines",
        "System design documents, including UI/UX wireframes and technical specifications",
      ]
    },
    {
      title: "7. Presentation, Review & Client Sign-Off",
      inputs: [
        "All finalized documentation (BRD, PRD, Technical Report, Roadmap, etc.)",
        "Feedback from the discovery phase sessions and POC outcomes",
      ],
      outputs: [
        "A comprehensive presentation that clearly articulates the project vision, solution strategy, and roadmap",
        "Final client approval and sign-off to move into the development phase",
        "An agreed-upon plan for continuous communication and change management",
      ]
    },
    {
      title: "Ready to Start Your Journey?",
      description: "Our discovery process blends business requirements gathering, collaborative workshops, technical assessment, and optional prototyping to create a strategic and risk-mitigated project roadmap.",
      callToAction: true
    }
  ];

  // Initialize and clean up timer
  useEffect(() => {
    // Now steps is defined before being used here
    // Define resetAndStartTimer inside useEffect to avoid dependency issues
    const resetAndStartTimer = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setProgress(0);

      if (activeStep === steps.length - 1) {
        return;
      }

      const startTime = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min(100, (elapsedTime / STEP_DURATION) * 100);

        setProgress(newProgress);

        if (newProgress >= 100) {
          if (activeStep < steps.length - 1) {
            setActiveStep(prevStep => prevStep + 1);
          }
        }
      }, 50);
    };

    resetAndStartTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeStep, steps.length, STEP_DURATION]);

  // Create functions for manual navigation
  const goToNextStep = () => {
    // Only go to next step if we're not at the last step
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const goToPreviousStep = () => {
    // Only go to previous step if we're not at the first step
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="py-10">
      <div className="text-left mb-10 left-0">
        <Link to="/" className="text-blue-500 hover:underline">
          <i className="fas fa-arrow-left"></i> Back to Home
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-tektur text-gray-800 text-center mb-6">Our Discovery Process</h1>
        <p className="text-xl font-titillium text-center mb-10">
          The process blends business requirements gathering, collaborative workshops, technical assessment,
          and optional prototyping (POC) to create a strategic and risk‐mitigated project roadmap.
        </p>
      </motion.div>

      {/* Process timeline visualization */}
      <div className="relative mb-12">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        <div className="flex justify-center space-x-4 mb-8">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              {/* SVG Circle Progress */}
              <svg width="40" height="40" viewBox="0 0 40 40">
                {/* Background circle */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="transparent"
                  stroke="#e6f0ff"
                  strokeWidth="3"
                />

                {/* Progress circle - only show for active step */}
                {index === activeStep && (
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * 18}`}
                    strokeDashoffset={`${2 * Math.PI * 18 * (1 - progress / 100)}`}
                    transform="rotate(-90 20 20)"
                    strokeLinecap="round"
                  />
                )}

                {/* Step number */}
                <text
                  x="20"
                  y="20"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                  fontWeight="bold"
                  fill={index === activeStep ? "#3b82f6" : "#3b82f6"}
                >
                  {index + 1}
                </text>
              </svg>

              {/* Clickable button overlay */}
              <button
                className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
                onClick={() => setActiveStep(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current step content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-8"
      >
        {steps[activeStep].callToAction ? (
          <div className="text-center py-10">
            <h2 className="text-3xl font-tektur text-blue-700 mb-6">{steps[activeStep].title}</h2>
            <p className="text-xl mb-8">{steps[activeStep].description}</p>
            <BookDiscoveryCallButton />
            <p className="mt-6">
              <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-tektur text-blue-700 mb-2">
              {steps[activeStep].title}
            </h2>
            {steps[activeStep].subtitle && (
              <p className="text-lg text-blue-500 italic mb-4">{steps[activeStep].subtitle}</p>
            )}

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Input:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {steps[activeStep].inputs?.map((input, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {input}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Output:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {steps[activeStep].outputs?.map((output, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      {output}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </motion.div>

      <div className="text-center mt-8">
        <button
          onClick={goToPreviousStep}
          className={`bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600 transition-colors ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={activeStep === 0}
        >
          Previous Step
        </button>
        <button
          onClick={goToNextStep}
          className={`bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors ml-1 ${activeStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={activeStep === steps.length - 1}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default DiscoveryProcess;