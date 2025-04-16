"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/image/here/hero1.jpg",
    "/image/here/hero2.jpg",
    "/image/here/hero3.jpg"
  ];

  // 메뉴 섹션으로 스크롤하는 함수
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`수라채움 이미지 ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                quality={90}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-wide">
          수라채움
        </h1>
        <div className="h-0.5 w-24 bg-amber-500 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
          400평 규모의 고급 한정식 다이닝에서 펼쳐지는 품격 있는 맛과 멋
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToMenu}
            className="px-8 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300 text-lg">
            메뉴 보기
          </button>
          <a 
            href="https://booking.naver.com/booking/6/bizes/1312309"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition duration-300 text-lg inline-block">
            예약하기
          </a>
        </div>
      </div>
      
      {/* 슬라이더 인디케이터 */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentImage === index ? 'bg-amber-500' : 'bg-white/50'
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </section>
  );
} 