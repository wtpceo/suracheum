import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수라채움 - 400평 규모의 고급 한정식",
  description: "수라채움에서 전통과 현대가 어우러진 고품격 한정식을 경험하세요. 400평 규모의 넓은 공간에서 특별한 시간을 보내세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
