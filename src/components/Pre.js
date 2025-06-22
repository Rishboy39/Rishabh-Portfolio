import React, { useState, useEffect } from "react";

function Pre(props) {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading");
  const [dots, setDots] = useState("");
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing",
    "Loading assets",
    "Preparing components",
    "Almost ready"
  ];

  useEffect(() => {
    if (!props.load) {
      setFadeOut(true);
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
      }, 800);
    } else {
      // Animate dots
      const dotsInterval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? "" : prev + ".");
      }, 300);

      // Animate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 1;
        });
      }, 40);

      // Animate loading steps
      const stepInterval = setInterval(() => {
        setCurrentStep(prev => {
          const nextStep = (prev + 1) % loadingSteps.length;
          setLoadingText(loadingSteps[nextStep]);
          return nextStep;
        });
      }, 1000);

      return () => {
        clearInterval(dotsInterval);
        clearInterval(progressInterval);
        clearInterval(stepInterval);
      };
    }
  }, [props.load, loadingSteps]);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader-container">
        {/* Animated background */}
        <div className="loader-background">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="loader-content">
          {/* Logo/Icon */}
          <div className="loader-logo">
            <div className="logo-circle">
              <div className="logo-inner">
                <div className="logo-text">R</div>
              </div>
            </div>
          </div>

          {/* Loading text */}
          <div className="loading-text">
            <span className="text-main">{loadingText}</span>
            <span className="text-dots">{dots}</span>
          </div>

          {/* Progress bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{progress}%</div>
          </div>

          {/* Loading animation */}
          <div className="loading-animation">
            <div className="spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pre;
