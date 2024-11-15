import { useState, useEffect } from "react";

const Tooltip = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the fade-in after 300ms
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300); // 300ms delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div
      className={`absolute z-10 left-20 top-20 transform -translate-x-1/2 text-cyan-300 bg-white text-sm py-1 px-3 rounded shadow-lg transition-opacity duration-300 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      풀타임, 파트타임
      {/* Tooltip arrow */}
      <div className="absolute left-5 bottom-[-4px] transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
    </div>
  );
};

export default Tooltip;
