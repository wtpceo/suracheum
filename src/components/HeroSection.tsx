"use client";

import Image from 'next/image';

export default function HeroSection() {
  const naverBookingUrl = "https://booking.naver.com/booking/6/bizes/1312309";

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

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 및 오버레이 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero/main.jpg"
          alt="수라채움 메인 배경"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* 콘텐츠 컨테이너 */}
      <div className="relative z-10 text-center text-white p-5 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif tracking-wider">
          수라채움
        </h1>
        <div className="h-0.5 w-16 bg-amber-400 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl mb-10 font-light tracking-wide">
          고품격 한정식의 품격을 담아내다
        </p>
        
        {/* 버튼 그룹 */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* 예약하기 버튼 - 직접 링크만 사용 */}
          <a
            href="https://booking.naver.com/booking/6/bizes/1312309"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition duration-300 cursor-pointer"
          >
            예약하기
          </a>
          
          {/* 메뉴 보기 버튼 - 직접 onClick 이벤트만 사용 */}
          <button
            onClick={scrollToMenu}
            className="inline-block px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-amber-900 transition duration-300 cursor-pointer"
          >
            메뉴 보기
          </button>
        </div>
      </div>
    </div>
  );
} 