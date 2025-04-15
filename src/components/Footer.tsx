import Link from 'next/link';

export default function Footer() {
  const naverBookingUrl = "https://booking.naver.com/booking/6/bizes/1312309";
  
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold font-serif text-white mb-4 tracking-wide">수라채움</h3>
            <p className="text-amber-200/80 mb-4">
              400평 규모의 고급 한정식<br />
              품격 있는 맛과 멋의 공간
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-amber-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide">이용 안내</h4>
            <ul className="space-y-2">
              <li><Link href="/menu" className="text-amber-200/80 hover:text-white">메뉴</Link></li>
              <li><Link href="/reservation" className="text-amber-200/80 hover:text-white">예약</Link></li>
              <li><Link href="/space" className="text-amber-200/80 hover:text-white">공간 안내</Link></li>
              <li><Link href="/events" className="text-amber-200/80 hover:text-white">이벤트</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide">고객 지원</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-amber-200/80 hover:text-white">자주 묻는 질문</Link></li>
              <li><Link href="/contact" className="text-amber-200/80 hover:text-white">문의하기</Link></li>
              <li><Link href="/terms" className="text-amber-200/80 hover:text-white">이용약관</Link></li>
              <li><Link href="/policy" className="text-amber-200/80 hover:text-white">개인정보처리방침</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 tracking-wide">연락처</h4>
            <address className="not-italic text-amber-200/80">
              <p className="mb-2">경기도 시흥시 거북섬둘레길 10, 314호</p>
              <p className="mb-2">영업시간: 11:00 - 21:00 (연중무휴)</p>
              <p className="mb-2">전화: 0507-1326-3322</p>
              <p className="mb-2">이메일: info@suracheum.com</p>
              <a 
                href={naverBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-200/80 hover:text-white"
              >
                <span className="mr-1">네이버 예약</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                  <path d="M10 10H2V2H6V0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H10C11.1 12 12 11.1 12 10V6H10V10ZM7 0V2H9.59L3.76 7.83L5.17 9.24L11 3.41V6H13V0H7Z" />
                </svg>
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-amber-800/50 mt-10 pt-6 text-center text-amber-200/60 text-sm">
          <p>© 2024 수라채움. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 