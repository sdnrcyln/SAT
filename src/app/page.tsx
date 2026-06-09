import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutPreview from "@/components/AboutPreview";
import ProgramGrid from "@/components/ProgramGrid";
import PortfolioSection from "@/components/PortfolioSection";
import TechPreview from "@/components/TechPreview";
import AbroadSection from "@/components/AbroadSection";
import ArtTherapySection from "@/components/ArtTherapySection";
import HorizontalScroll from "@/components/HorizontalScroll";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import InkDivider from "@/components/InkDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee artistic />
      <InkDivider variant="gold" />
      <AboutPreview />
      <Stats />
      <Marquee reverse />
      <InkDivider variant="coral" />
      <ProgramGrid />
      <PortfolioSection />
      <InkDivider variant="sage" />
      <TechPreview />
      <AbroadSection />
      <ArtTherapySection />
      <HorizontalScroll />
      <BlogSection />
      <Testimonials />
      <CTA />
    </>
  );
}
