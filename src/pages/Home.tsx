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
import PreFooterBand from "@/components/PreFooterBand";

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
      <PreFooterBand />
    </>
  );
}
