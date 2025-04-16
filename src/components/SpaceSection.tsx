"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SpaceSection() {
  const spaces = [
    {
      name: "돌잔치",
      description: "고풍스러운 인테리어와 편안한 좌식 공간",
      capacity: "최대 60명",
      features: "전통적인 분위기, 단체 모임에 적합"
    },
    {
      name: "상견례",
      description: "프라이빗한 식사를 위한 독립 공간",
      capacity: "최대 20명",
      features: "완벽한 프라이버시, VIP 모임에 적합"
    },
    {
      name: "가족모임",
      description: "아름다운 정원을 바라보는 특별한 공간",
      capacity: "최대 30명",
      features: "탁 트인 전망, 계절 감상에 좋음"
    },
    {
      name: "기업행사",
      description: "대규모 모임을 위한 넓은 공간",
      capacity: "최대 100명",
      features: "현대적 시설, 각종 행사에 적합"
    }
  ];
  
  // 애니메이션 변수
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const imageHoverVariants = {
    rest: { scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="space" className="py-20 bg-amber-50/50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif tracking-wide">400평 품격 공간</h2>
          <motion.div 
            className="h-0.5 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            다양한 목적에 맞는 고품격 다이닝 공간을 경험하세요
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 이미지 갤러리 */}
          <motion.div 
            className="h-96 relative rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
          >
            <motion.div className="w-full h-full" variants={imageHoverVariants}>
              <Image
                src="/image/space/main.jpg"
                alt="수라채움 메인 공간"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <motion.div 
              className="h-44 relative rounded-lg overflow-hidden"
              whileHover="hover"
              initial="rest"
            >
              <motion.div className="w-full h-full" variants={imageHoverVariants}>
                <Image
                  src="/image/space/space1.jpg"
                  alt="수라채움 공간 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="h-44 relative rounded-lg overflow-hidden"
              whileHover="hover"
              initial="rest"
            >
              <motion.div className="w-full h-full" variants={imageHoverVariants}>
                <Image
                  src="/image/space/space2.jpg"
                  alt="수라채움 공간 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="h-44 relative rounded-lg overflow-hidden"
              whileHover="hover"
              initial="rest"
            >
              <motion.div className="w-full h-full" variants={imageHoverVariants}>
                <Image
                  src="/image/space/space3.jpg"
                  alt="수라채움 공간 3"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="h-44 relative rounded-lg overflow-hidden"
              whileHover="hover"
              initial="rest"
            >
              <motion.div className="w-full h-full" variants={imageHoverVariants}>
                <Image
                  src="/image/space/space4.jpg"
                  alt="수라채움 공간 4"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {spaces.map((space, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <h3 className="text-xl font-bold text-amber-800 mb-3 font-serif tracking-wide">{space.name}</h3>
              <p className="text-gray-600 mb-4">{space.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-amber-800">•</span>
                  <span className="text-gray-700">{space.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-800">•</span>
                  <span className="text-gray-700">{space.features}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 