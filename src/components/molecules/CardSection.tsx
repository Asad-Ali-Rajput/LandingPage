// components/CardSection.tsx
import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';

const cards = [
  {
    title: "평균 월 120만원",
    description: "임금을 해당 국가 기준으로로 계산합니다.",
  },
  {
    title: "최대 3회 인력교체",
    description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
  },
  {
    title: "평균 3일, 최대 10일",
    description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
  },
];

const CardSection: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after a short delay
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex space-x-0 justify-center py-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`"bg-black text-white py-6 px-2 rounded-md min-w-md transition-opacity duration-500", ${fadeIn ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: `${index * 500}ms` }}>
          <h2 className="text-lg font-bold mb-2 border-t-2">{card.title}</h2>
          <p className="text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
