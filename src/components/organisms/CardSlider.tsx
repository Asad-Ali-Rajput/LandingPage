import React, { useState } from "react";
import Card from "../molecules/Card";

interface CardProps {
  cards: object,
}

const Slider: React.FC<CardProps> = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      experience: "3 years",
      skills: ["React", "JavaScript", "CSS"],
      image: "path/to/image1",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      experience: "5 years",
      skills: ["Node.js", "Express", "MongoDB"],
      image: "path/to/image2",
    },
    {
      name: "Sarah Lee",
      role: "UI/UX Designer",
      experience: "4 years",
      skills: ["Figma", "Sketch", "Prototyping"],
      image: "path/to/image3",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 text-white p-2 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
        </svg>

      </button>

      <div className="flex">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + cards.length) % cards.length;
          const isNext = index === (activeIndex + 1) % cards.length;

          // Define styles for active, previous, and next cards
          const scale = isActive ? 1.2 : 0.8;
          const zIndex = isActive ? 10 : 1;
          const position = isActive ? "relative" : "absolute";
          const translateX = isActive
            ? "translateX(0)"
            : isPrev
            ? "translateX(-30%)" // Move previous card back and to the left
            : isNext
            ? "translateX(30%)"  // Move next card back and to the right
            : "translateX(0)";
          const opacity = isActive ? 1 : 0.6;

          return (
            <div
              key={index}
              className="transition-all duration-300 transform"
              style={{
                transform: `${translateX} scale(${scale})`,
                zIndex,
                position,
                opacity,
              }}
            >
              <Card {...card} />
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 text-white p-2 rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>

      </button>
    </div>
  );
};

export default Slider;
