/* -----------------------------------------------------------------------------
 * Home page — the confirmed section order from spec §B.
 *
 * Section ordering is the one dimension the forensic reconstruction got right
 * end to end, and is the port's genuine value. Preserve it exactly.
 *
 * Section 12 (PreFooterBand) is the exception: it is present in the screenshots
 * and was missing from the forensic reconstruction entirely (correction H-1).
 * -------------------------------------------------------------------------- */

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
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

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
