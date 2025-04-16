"use client";

import { useCallback } from 'react';
import Link from 'next/link';

export default function Header() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-amber-800 font-serif tracking-wide">
          수라채움
        </Link>
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium cursor-pointer"
          >
            소개
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium cursor-pointer"
          >
            메뉴
          </button>
          <button 
            onClick={() => scrollToSection('space')}
            className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium cursor-pointer"
          >
            공간
          </button>
          <button 
            onClick={() => scrollToSection('reservation')}
            className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium cursor-pointer"
          >
            예약
          </button>
          <a 
            href="https://map.naver.com/p/directions/-/14101626.226271,4484462.6856938,%EC%88%98%EB%9D%BC%EC%B1%84%EC%9B%80,1159852496,PLACE_POI/-/transit?c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium"
          >
            오시는 길
          </a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-amber-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 