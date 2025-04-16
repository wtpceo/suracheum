"use client";

import { motion } from 'framer-motion';

export default function ReservationSection() {
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
  
  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const naverBookingUrl = "https://booking.naver.com/booking/6/bizes/1312309";
  const naverTalkUrl = "https://talk.naver.com/ct/w18t72y?frm=mnmb&frm=nmb_detail&resizeTo=1588,1000nidref=https%3A%2F%2Fpcmap.place.naver.com%2Frestaurant%2F1159852496%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202504160959%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%25EC%2588%2598%25EB%259D%25BC%25EC%25B1%2584%25EC%259B%2580";
  
  return (
    <section id="reservation" className="py-20 bg-amber-50">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-serif tracking-wide">예약 안내</h2>
          <motion.div 
            className="h-0.5 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            소중한 자리를 더욱 특별하게 만들어 드립니다
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-amber-800 mb-4 font-serif">예약 가능 시간</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">평일</div>
                  <div className="text-gray-700">11:00 - 21:00 (L.O 20:00)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">주말/공휴일</div>
                  <div className="text-gray-700">11:00 - 21:00 (L.O 20:30)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">정기 휴무</div>
                  <div className="text-gray-700">매월 두 번째 월요일</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-amber-800 mb-4 font-serif">단체 예약 안내</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  10인 이상 단체 예약은 별도 문의 바랍니다.
                </p>
                <p className="text-gray-600">
                  돌잔치, 기업행사 모임은 별도 문의 바랍니다.
                </p>
                <p className="text-gray-600">
                  50인 이상 대규모 모임 시 전체 대관도 가능합니다.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-amber-800 mb-4 font-serif">문의 및 예약</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">전화예약</div>
                  <div className="text-gray-700">
                    <motion.span 
                      className="font-medium text-amber-800"
                      whileHover={{ color: "#78350f", x: 2 }}
                    >
                      0507-1326-3322
                    </motion.span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">네이버톡톡</div>
                  <div className="text-gray-700">
                    <motion.a 
                      href={naverTalkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-amber-800 flex items-center"
                      whileHover={{ color: "#78350f", x: 2 }}
                    >
                      <span className="mr-1">실시간 채팅 문의</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10H2V2H6V0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H10C11.1 12 12 11.1 12 10V6H10V10ZM7 0V2H9.59L3.76 7.83L5.17 9.24L11 3.41V6H13V0H7Z" fill="currentColor"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-gray-500 font-medium">네이버 예약</div>
                  <div className="text-gray-700">
                    <motion.a 
                      href={naverBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-amber-800 flex items-center"
                      whileHover={{ color: "#78350f", x: 2 }}
                    >
                      <span className="mr-1">네이버 예약 페이지</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10H2V2H6V0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H10C11.1 12 12 11.1 12 10V6H10V10ZM7 0V2H9.59L3.76 7.83L5.17 9.24L11 3.41V6H13V0H7Z" fill="currentColor"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-amber-100 space-y-3">
                <a 
                  href={naverTalkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <motion.div
                    className="flex items-center justify-center w-full bg-[#03c75a] text-white py-3 px-4 rounded-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.582 0 0 2.896 0 6.467C0 8.72 1.434 10.7 3.59 11.86L2.682 15.066C2.627 15.252 2.813 15.401 2.976 15.302L6.968 12.747C7.302 12.785 7.646 12.804 8 12.804C12.418 12.804 16 9.908 16 6.337C16 2.896 12.418 0 8 0Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="font-medium">네이버톡톡 문의하기</span>
                  </motion.div>
                </a>

                <a 
                  href={naverBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <motion.div
                    className="flex items-center justify-center w-full bg-[#03c75a] text-white py-3 px-4 rounded-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.582 0 0 2.896 0 6.467C0 8.72 1.434 10.7 3.59 11.86L2.682 15.066C2.627 15.252 2.813 15.401 2.976 15.302L6.968 12.747C7.302 12.785 7.646 12.804 8 12.804C12.418 12.804 16 9.908 16 6.337C16 2.896 12.418 0 8 0Z" fill="white"/>
                      </svg>
                    </div>
                    <span className="font-medium">네이버 예약하기</span>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-amber-100"
            variants={formVariants}
          >
            <h3 className="text-xl font-bold text-amber-800 mb-6 font-serif text-center">온라인 예약 문의</h3>
            <form className="space-y-6">
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    성함
                  </label>
                  <motion.input 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    type="text" 
                    id="name" 
                    required
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    연락처
                  </label>
                  <motion.input 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    type="tel" 
                    id="phone" 
                    required
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="date">
                      희망 날짜
                    </label>
                    <motion.input 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      type="date" 
                      id="date" 
                      required
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="time">
                      희망 시간
                    </label>
                    <motion.input 
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      type="time" 
                      id="time" 
                      required
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="people">
                    인원
                  </label>
                  <motion.input 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    type="number" 
                    id="people" 
                    min="1" 
                    required
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="request">
                    요청사항
                  </label>
                  <motion.textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent h-32"
                    id="request"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)" }}
                  ></motion.textarea>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <motion.button 
                  type="submit"
                  className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  예약 문의하기
                </motion.button>
              </motion.div>

              <div className="mt-4 pt-4 border-t border-amber-100 text-center text-gray-500 text-sm">
                <p>빠른 예약을 원하시면 네이버 예약 서비스를 이용해 보세요.</p>
                <motion.a 
                  href={naverBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center mt-2 bg-[#03c75a] text-white py-2 px-4 rounded-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.582 0 0 2.896 0 6.467C0 8.72 1.434 10.7 3.59 11.86L2.682 15.066C2.627 15.252 2.813 15.401 2.976 15.302L6.968 12.747C7.302 12.785 7.646 12.804 8 12.804C12.418 12.804 16 9.908 16 6.337C16 2.896 12.418 0 8 0Z" fill="white"/>
                  </svg>
                  <span className="font-medium">네이버 예약하기</span>
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 