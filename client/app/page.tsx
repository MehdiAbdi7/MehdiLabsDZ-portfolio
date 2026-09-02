import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import FeaturedProjects from "../components/FeaturedProjects";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Mehdi Abdi — Développeur Full Stack | MehdiLabsDz",
  description:
    "Portfolio de Mehdi Abdi, développeur full stack MERN en TypeScript basé à Alger. Next.js, React, Node.js, Express, MongoDB.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
