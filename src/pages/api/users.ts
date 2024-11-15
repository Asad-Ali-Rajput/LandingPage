// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

type UserData = {
    name: string;
    role: string;
    experience: string;
    skills: string[];
    image: string;
};

const handler = (_req: NextApiRequest, res: NextApiResponse<UserData[]>) => {
  // Static sample data
  const users = [
    {
        id: 1,
        name: "John Doe",
        role: "Frontend Developer",
        experience: "3 years",
        skills: ["React", "JavaScript", "CSS"],
        image: "path/to/image1",
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "Backend Developer",
        experience: "5 years",
        skills: ["Node.js", "Express", "MongoDB"],
        image: "path/to/image2",
      },
      {
        id: 3,
        name: "Sarah Lee",
        role: "UI/UX Designer",
        experience: "4 years",
        skills: ["Figma", "Sketch", "Prototyping"],
        image: "path/to/image3",
      },
  ];

  res.status(200).json(users);
};

export default handler;
