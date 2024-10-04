import React, { useState, useEffect } from "react";

function Pre(props) {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingText, setLoadingText] = useState("Javascript elements loading");
  const [gradientProgress, setGradientProgress] = useState(0);

  useEffect(() => {
    if (!props.load) {
      setFadeOut(true);
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
      }, 500);
    } else {
      const textInterval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev === "Javascript and React elements loading..") return "Javascript and React elements loading";
          return prev + ".";
        });
      }, 500);

      const gradientInterval = setInterval(() => {
        setGradientProgress((prev) => (prev < 100 ? prev + 1 : prev));
      }, 50);

      return () => {
        clearInterval(textInterval);
        clearInterval(gradientInterval);
      };
    }
  }, [props.load]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, #0000ff ${gradientProgress}%, #ffffff ${gradientProgress}%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader-content">
        <div className="loading-text" style={gradientStyle}>{loadingText}</div>
      </div>
    </div>
  );
}

export default Pre;
