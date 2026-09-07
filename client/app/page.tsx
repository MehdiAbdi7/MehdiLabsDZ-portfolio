import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import FieldToCode from "@/components/FieldToCode";
import Stack from "@/components/Stack";
import Method from "@/components/Method";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectCarousel />
      <FieldToCode />
      <Stack />
      <Method />
      <CallToAction />
    </>
  );
}
