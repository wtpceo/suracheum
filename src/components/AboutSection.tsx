"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
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
  
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  return (
    <section id="about" className="py-24 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 relative"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-400"></div>
              <div className="relative z-10 h-[500px]">
                <Image
                  src="/image/about/main.jpg"
                  alt="수라채움 식당 내부"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-400"></div>
            </div>
            <motion.div 
              className="absolute -bottom-8 -left-8 w-36 h-36 md:w-48 md:h-48 bg-amber-50 rounded-lg shadow-lg z-0 hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -top-12 -right-12 w-24 h-24 bg-amber-100 rounded-lg shadow-lg z-0 hidden md:block"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 font-serif tracking-wide"
              variants={itemVariants}
            >
              수라채움은 집밥에<br />요리의 개념을 더했습니다.
            </motion.h2>
            
            <motion.div 
              className="h-0.5 w-16 bg-amber-500 mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              수라채움은 한국 전통음식의 참맛을 지키면서 현대적인 감각으로 재해석한 프리미엄 한식당입니다. 고품격 다이닝 공간에서 정갈하고 품격 있는 한정식을 즐기실 수 있습니다.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              최고의 식재료만을 사용하여 조리하며, 조미료를 최소화하고 전통 조리법에 충실하면서도 현대인의 입맛에 맞게 완성된 건강한 음식을 제공합니다. 자연과 사람 모두에 이로운 음식을 담아내는 것이 수라채움의 철학입니다.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 md:gap-6 mb-8"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-amber-50 p-4 md:p-6 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-amber-800 mb-2">전통과 현대의 조화</h3>
                <p className="text-gray-600 text-sm">한국 음식의 전통을 지키면서도 현대적 감각으로 재해석합니다.</p>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 p-4 md:p-6 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-amber-800 mb-2">신선한 제철 식재료</h3>
                <p className="text-gray-600 text-sm">계절마다 가장 맛있고 영양 가득한 식재료만을 선별합니다.</p>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 p-4 md:p-6 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-amber-800 mb-2">정성을 담은 상차림</h3>
                <p className="text-gray-600 text-sm">한 상에 정성과 마음을 담아 최상의 경험을 제공합니다.</p>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 p-4 md:p-6 rounded-lg"
                whileHover={{ y: -5, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold text-amber-800 mb-2">품격 있는 공간</h3>
                <p className="text-gray-600 text-sm">전통과 현대가 어우러진 고급스러운 공간에서 식사를 즐기세요.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 