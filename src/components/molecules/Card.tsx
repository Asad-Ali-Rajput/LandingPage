import React from "react";
import Image from 'next/image';
import image from '@/assets/Ellipse 12.png'

interface CardProps {
  name: string;
  role: string;
  experience: string;
  skills: string[];
}

const Card: React.FC<CardProps> = ({ name, role, experience, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center w-60">
      <Image src={image} alt={`${name}'s profile`} className="w-24 h-24 mx-auto rounded-full"/>
      <h2 className="text-xl font-extrabold text-black mt-4">{name}</h2>
      <p className="text-blue-600 font-medium">{role} • {experience}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
