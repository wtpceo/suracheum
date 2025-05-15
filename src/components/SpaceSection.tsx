"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SpaceSection() {
  // 애니메이션 변수
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const spaceImages = [
    {
      src: "/image/space/main.jpg",
      alt: "청사초롱이 장식된 한옥 입구",
      desc: "청사초롱의 은은한 불빛이 맞이하는 고풍스러운 입구"
    },
    {
      src: "/image/space/space1.jpg",
      alt: "한옥 내부 다이닝 공간",
      desc: "전통 한옥의 아름다움과 현대적 편안함이 어우러진 다이닝 공간"
    },
    {
      src: "/image/space/space2.jpg",
      alt: "프라이빗 다이닝룸",
      desc: "특별한 날을 위한 프라이빗 다이닝 공간"
    }
  ];
  
  return (
    <section id="space" className="py-24 bg-amber-50/30 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 text-center font-serif tracking-wide"
            variants={itemVariants}
          >
            임금님의 수라상처럼
          </motion.h2>
          <motion.div 
            className="h-0.5 w-16 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="text-gray-600 max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <p className="mb-2">수라채움의 공간은 전통 한옥의 정취와 현대적 감각이 어우러진 곳입니다.</p>
            <p>청사초롱의 은은한 불빛 아래, 임금님의 수라상을 받는 듯한 고급스러운 경험을 선사합니다.</p>
          </motion.div>
        </motion.div>
        
        {/* 공간 이미지 갤러리 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaceImages.map((image, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-md bg-white"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2 font-serif">{image.alt}</h3>
                <p className="text-gray-600">{image.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 한옥 문화 소개 */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-amber-900/10 to-amber-700/5 p-8 rounded-xl"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image
                  src="/image/space/space3.jpg"
                  alt="임금님의 수라상"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-amber-800 mb-4 font-serif">
                옛 궁중의 품격을 담은 다이닝
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                수라채움은 임금님께 진상되던 수라상의 정성과 품격을 현대적 감각으로 재해석했습니다.
                한국 전통 건축의 아름다움과 정교함이 느껴지는 공간에서 음식은 더욱 풍요로운 경험으로 승화됩니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                청사초롱의 은은한 불빛, 정갈한 한옥의 선, 그리고 현대적 편안함을 더한 인테리어는 음식의 맛을 더욱 깊게 만들어줍니다.
                수라채움에서는 음식뿐만 아니라 공간까지 함께 즐기는 오감만족의 경험을 선사합니다.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* 예약 안내 */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-amber-900 mb-4 font-serif">특별한 공간 예약</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            가족 모임, 기업 행사, 중요한 손님 접대를 위한 프라이빗 공간을 예약하실 수 있습니다.
            특별한 날에는 미리 연락주시면 더욱 정성을 다해 준비해 드립니다.
          </p>
          <a 
            href="https://booking.naver.com/booking/6/bizes/1312309"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300 text-lg"
          >
            공간 예약하기
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 