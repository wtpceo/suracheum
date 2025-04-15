import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-amber-800 font-serif tracking-wide">
          수라채움
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium">
            소개
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium">
            메뉴
          </Link>
          <Link href="/space" className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium">
            공간
          </Link>
          <Link href="/reservation" className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium">
            예약
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-amber-800 transition duration-200 font-medium">
            오시는 길
          </Link>
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