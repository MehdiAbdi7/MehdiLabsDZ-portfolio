import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactBand from "@/components/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStats />
      <Skills />
      <FeaturedProjects />
      <ContactBand />
    </>
  );
}
