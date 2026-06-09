import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutPreview from "@/components/AboutPreview";
import ProgramGrid from "@/components/ProgramGrid";
import PortfolioSection from "@/components/PortfolioSection";
import TechPreview from "@/components/TechPreview";
import AbroadSection from "@/components/AbroadSection";
import ArtTherapySection from "@/components/ArtTherapySection";
import StudentWorks from "@/components/StudentWorks";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <Stats />
      <Marquee reverse />
      <ProgramGrid />
      <PortfolioSection />
      <TechPreview />
      <AbroadSection />
      <ArtTherapySection />
      <StudentWorks />
      <BlogSection />
      <Testimonials />
      <CTA />
    </>
  );
}
