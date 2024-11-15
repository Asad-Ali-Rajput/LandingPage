// components/organisms/Footer.tsx
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/__덉씠__1.png'; // Replace with the actual path to your logo image

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 min-w-screen">
      <div className="mx-auto grid grid-cols-1 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className='grid grid-cols-2 gap-4 justify-between items-center'>
            <div className="flex flex-col col-span-1 items-center md:items-start">
                <Image src={logo} alt="Hyperhire Logo" />
                <p className="text-sm mt-4 text-gray-500">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                <p className="mt-4 font-medium">010-0000-0000</p>
                <p>aaaaa@naver.com</p>
            </div>
            {/* Center Section - Services */}
            <div className="flex flex-row space-x-4 items-center md:items-start">
                <div className="bg-white shadow-md rounded-lg p-4 w-full">
                    <div className="">
                        <span className="text-gray-600 bg-gray-200 p-2 rounded-md">&#60;/&#62;</span>
                        <p className="text-sm my-2">해외 개발자 원격 채용</p>
                    </div>
                    <a href="#" className="text-blue-500 flex items-center mt-2">바로가기 <span className="ml-2">&rarr;</span></a>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
                    <div className="">
                        <span className="text-gray-600 bg-gray-200 p-2 rounded-md">&#128100;</span>
                        <p className="text-sm my-2">외국인 원격 채용 (비개발)</p>
                    </div>
                    <a href="#" className="text-blue-500 flex items-center mt-2">바로가기 <span className="ml-2">&rarr;</span></a>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
                    <div className="">
                    <span className="text-gray-600 bg-gray-200 p-2 rounded-md">KOR</span>
                    <p className="text-sm my-2">한국어 가능한 외국인 채용</p>
                    </div>
                    <a href="#" className="text-blue-500 flex items-center mt-2">바로가기 <span className="ml-2">&rarr;</span></a>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
                    <div className="">
                        <span className="text-gray-600 bg-gray-200 rounded-md p-1 w-6 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-100 h-100">
                                <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <p className="text-sm my-2">해외 개발자 활용 서비스</p>
                    </div>
                    <a href="#" className="text-blue-500 flex items-center mt-2">바로가기 <span className="ml-2">&rarr;</span></a>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-8 items-center'>
            <div>
                <p>상호명</p>
                <p>하이퍼하이어</p>
                <p>Hyperhire India Private Limited</p>
            </div>
            <div>
                <p>대표 CEO</p>
                <p>김주현</p>
                <p>Juhyun Kim</p>
            </div>
            <div>
                <p>사업자등록번호 CIN</p>
                <p>427-86-01187</p>
                <p>U74110DL2016PTC290812 </p>
            </div>
            <div className="text-sm text-gray-600">
                <p className="mt-4"><strong>주소 ADDRESS</strong>:</p>
                <p>서울특별시 강남대로 479, 지하 1층 238호</p>
                <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
            </div>
        </div>
        {/* Right Section - Company Details */}
        <p className="mt-4">&copy; 2023 Hyperhire</p>
      </div>
    </footer>
  );
};

export default Footer;
