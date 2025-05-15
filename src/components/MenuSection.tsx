"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MenuSection() {
  const [showAllMenus, setShowAllMenus] = useState(false);
  
  const featuredMenus = [
    {
      name: "귀빈 한상차림",
      price: "50,000원",
      description: "한국의 전통 귀빈상을 현대적으로 재해석한 프리미엄 코스",
      includes: "전체요리 + 소갈비찜 + 민어굴비 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 +청된장찌개 + 솥밥",
      image: "/image/menu/menu1.jpg"
    },
    {
      name: "코다리찜 한상차림",
      price: "25,000원",
      description: "제철 코다리와 함께 즐기는 담백한 한상 차림",
      includes: "전체요리 + 코다리찜 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/menu2.jpg"
    },
    {
      name: "갈비찜 한상차림",
      price: "40,000원",
      description: "특제 양념으로 맛을 낸 갈비찜과 조화로운 한상 차림",
      includes: "전체요리 + 소갈비삠 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/menu3.jpg"
    },
    {
      name: "VIP 한상차림",
      price: "70,000원",
      description: "특별한 손님을 위한 최고급 식재료로 구성된 풀코스 한정식",
      includes: "전체요리 + 소갈비찜 + 민어굴비 + 제주금게장 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/menu4.jpg"
    }
  ];
  
  const allMenus = [
    ...featuredMenus,
    {
      name: "평일점심특선 한상차림",
      price: "19,500원",
      description: "합리적인 가격의 알찬 점심 메뉴",
      includes: "전체요리 + 직화제육 + 제주금게장 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/lunch.jpg"
    },
    {
      name: "직화제육 한상차림",
      price: "30,000원",
      description: "불맛 가득한 제육볶음과 함께하는 한상",
      includes: "전체요리 + 직화제육 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/jikwa.jpg"
    },
    {
      name: "제주금계 한상차림",
      price: "30,000원",
      description: "제주도 흑돼지와 신선한 해물을 함께 즐기는 상차림",
      includes: "전체요리 + 제주금게 + 바베큐보쌈 + 궁중잡채 + 토마토청샐러드 + 가지버섯탕수육 + 청된장찌개 + 솥밥",
      image: "/image/menu/jeju.jpg"
    },
    {
      name: "민어굴비 한상차림",
      price: "35,000원",
      description: "고소한 민어와 굴비를 동시에 맛볼 수 있는 특별 상차림",
      includes: "민어 + 굴비 + 맑은탕 + 돌솥밥 + 계절찬",
      image: "/image/menu/mineo.jpg"
    },
    {
      name: "어린이메뉴",
      price: "12,000원",
      description: "아이들도 즐길 수 있는 한식 메뉴",
      includes: "미니불고기 + 계란말이 + 미니잡채 + 공기밥 + 과일",
      image: "/image/menu/kids.jpg"
    },
    {
      name: "코다리찜 단품",
      price: "15,000원",
      description: "담백하고 깊은 맛의 코다리찜",
      includes: "코다리찜 + 공기밥 + 기본반찬",
      image: "/image/menu/kodari_single.jpg"
    },
    {
      name: "직화제육 단품",
      price: "18,000원",
      description: "매콤한 양념의 직화 제육볶음",
      includes: "직화제육 + 공기밥 + 기본반찬",
      image: "/image/menu/jikwa_single.jpg"
    },
    {
      name: "민어굴비 단품",
      price: "30,000원",
      description: "담백한 민어와 굴비 구이",
      includes: "민어 + 굴비 + 공기밥 + 기본반찬",
      image: "/image/menu/mineo_single.jpg"
    },
    {
      name: "소갈비찜 단품",
      price: "38,000원",
      description: "특제 양념으로 맛을 낸 소갈비찜",
      includes: "소갈비찜 + 공기밥 + 기본반찬",
      image: "/image/menu/galbi_single.jpg"
    },
    {
      name: "해물모둠장 단품",
      price: "28,000원",
      description: "신선한 해산물을 특제 양념으로 볶아낸 요리",
      includes: "해물모둠장 + 공기밥 + 기본반찬",
      image: "/image/menu/seafood_single.jpg"
    },
    {
      name: "가지버섯탕수육 단품",
      price: "10,000원",
      description: "바삭한 가지와 버섯으로 만든 탕수육",
      includes: "가지버섯탕수육 + 공기밥 + 기본반찬",
      image: "/image/menu/eggplant.jpg"
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
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif tracking-wide">특별한 한상 차림</h2>
          <motion.div 
            className="h-0.5 bg-amber-500 mx-auto mb-6" 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            수라채움의 모든 메뉴는 신선한 제철 식재료로 정성껏 준비합니다
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredMenus.map((menu, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex flex-col md:flex-row h-auto md:h-64">
                <div className="h-56 md:h-auto md:w-2/5 relative">
                  <Image
                    src={menu.image}
                    alt={menu.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/image/menu/default-food.jpg";
                    }}
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="border-b border-amber-100 pb-3 mb-3">
                      <h3 className="text-xl font-bold text-amber-900 font-serif tracking-wide mb-2">{menu.name}</h3>
                      <p className="text-gray-600 text-sm">{menu.description}</p>
                    </div>
                    <div className="bg-amber-50/50 p-3 rounded-md mb-3">
                      <p className="text-gray-700 text-sm font-medium">
                        <span className="text-amber-800">구성:</span> {menu.includes.replace(/\s\+\s/g, ' + ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <p className="text-amber-900 font-bold">{menu.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.button 
            onClick={() => setShowAllMenus(true)}
            className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            전체 메뉴 보기
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* 모달 */}
      {showAllMenus && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div 
            className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-900 font-serif">수라채움 전체 메뉴</h2>
              <motion.button 
                onClick={() => setShowAllMenus(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMenus.map((menu, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-amber-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-48 relative">
                    <Image
                      src={menu.image}
                      alt={menu.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/image/menu/default-food.jpg";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="border-b border-amber-100 pb-2 mb-2">
                      <h3 className="text-lg font-bold text-amber-900 font-serif tracking-wide mb-1">{menu.name}</h3>
                      <p className="text-gray-600 text-xs">{menu.description}</p>
                    </div>
                    <div className="bg-amber-50/50 p-2 rounded-md mb-2 text-xs">
                      <p className="text-gray-700 font-medium">
                        <span className="text-amber-800">구성:</span> {menu.includes.replace(/\s\+\s/g, ' + ')}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-amber-900 font-bold text-sm">{menu.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-4 border-t text-center">
              <motion.button 
                onClick={() => setShowAllMenus(false)}
                className="px-6 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                닫기
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
} 