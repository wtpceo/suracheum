"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero/main.jpg"
          alt="수라채움 메인 이미지"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
        {/* 이미지 오버레이 */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* 움직이는 그래픽 요소들 */}
      <motion.div 
        className="absolute top-20 left-20 w-16 h-16 border-t-2 border-l-2 border-amber-300 opacity-60 hidden md:block"
        initial={{ x: -50, y: -50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-16 h-16 border-b-2 border-r-2 border-amber-300 opacity-60 hidden md:block"
        initial={{ x: 50, y: 50, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-32 w-3 h-3 rounded-full bg-amber-400 opacity-70 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-32 w-3 h-3 rounded-full bg-amber-400 opacity-70 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            수라채움
          </motion.h1>
          
          <motion.div 
            className="h-0.5 w-16 bg-amber-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-10 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            고품격 한정식의 품격을 담아내다
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a 
              href="#reservation" 
              className="px-8 py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition duration-300 mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              예약하기
            </motion.a>
            <motion.a 
              href="#menu" 
              className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-amber-900 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              메뉴 보기
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 스크롤 다운 표시 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">스크롤</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 