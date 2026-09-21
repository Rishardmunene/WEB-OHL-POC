import PageHero from "@/components/PageHero";
import IntroSection from "@/components/IntroSection";
import HistorySkills from "@/components/HistorySkills";
import Attorneys from "@/components/Attorneys";
import ConsultationCTA from "@/components/ConsultationCTA";
import { pageCopy } from "@/content/group";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.about.eyebrow}
        title={pageCopy.about.title}
        lead={pageCopy.about.lead}
      />
      <IntroSection />
      <HistorySkills />
      <Attorneys />
      <ConsultationCTA />
    </>
  );
}
