import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import PracticeAreas from "@/components/PracticeAreas";
import HelpStats from "@/components/HelpStats";
import HistorySkills from "@/components/HistorySkills";
import Testimonials from "@/components/Testimonials";
import Attorneys from "@/components/Attorneys";
import ConsultationCTA from "@/components/ConsultationCTA";
import ConsultationForm from "@/components/ConsultationForm";
import BlogSection from "@/components/BlogSection";

/* Section order is the forensic reconstruction's strongest contribution and is
   CONFIRMED by the screenshots end to end. Preserve it.
   H-1: the pre-footer full-bleed image band (section 12 of 13) is absent from the
   baseline entirely and is added in Stage 2. */
export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <PracticeAreas />
      <HelpStats />
      <HistorySkills />
      <Testimonials />
      <Attorneys />
      <ConsultationCTA />
      <ConsultationForm />
      <BlogSection />
    </>
  );
}
