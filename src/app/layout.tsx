import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design House Global | Sanat ve Tasarım Eğitimi",
  description:
    "Uluslararası standartlarda sanat ve tasarım eğitimi, portfolyo hazırlığı, sanat terapisi ve yaratıcılık programları.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <div className="grain" aria-hidden="true" />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
