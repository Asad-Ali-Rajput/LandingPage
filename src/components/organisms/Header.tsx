// components/organisms/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full">
      <div className="text-white flex items-center justify-between px-6 py-4">
        {/* Left section: Logo and hyperhire text */}
        <div className="flex items-center space-x-2">
          {/* Logo (replace with an actual image if available) */}
          <div className="">
            <Image src={logo} alt="Hyperhire Logo" />
          </div>
          {/* <span className="text-white font-semibold">hyperhire</span> */}
        </div>

        {/* Center navigation links */}
        <nav className="flex space-x-4">
          {/* 채용 with dropdown menu */}
          <div className="relative group">
            <a href="#" className="text-white flex justify-center items-center">
              채용
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Menu Item 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Menu Item 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Menu Item 3</a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#" className="text-white">
            해외 개발자 활용서비스
          </a>
        </nav>

        {/* Right section: Inquiry button */}
        <button className="bg-white text-blue-500 font-medium px-4 py-2 rounded-full">
          문의하기
        </button>
      </div>
    </header>
  );
};

export default Header;
