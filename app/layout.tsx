import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIRST PAGE",
  description: "작은 브랜드의 온라인 시작을 돕는 한 페이지 예제 홈페이지",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
