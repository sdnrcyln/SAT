import type { Metadata } from "next";
import { Syne, DM_Sans, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ArtisticCanvas from "@/components/ArtisticCanvas";
import FloatingArt from "@/components/FloatingArt";
import CursorAura from "@/components/CursorAura";
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Design House Global | Sanat ve Tasarım Eğitimi",
  description:
    "Uluslararası standartlarda sanat ve tasarım eğitimi, portfolyo hazırlığı, sanat terapisi ve yaratıcılık programları.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${syne.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <ArtisticCanvas />
        <FloatingArt />
        <div className="grain" aria-hidden="true" />
        <CursorAura />
        <SmoothScroll>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
