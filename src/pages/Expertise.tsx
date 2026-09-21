import PageHero from "@/components/PageHero";
import PracticeAreas from "@/components/PracticeAreas";
import HelpStats from "@/components/HelpStats";
import ConsultationCTA from "@/components/ConsultationCTA";
import { pageCopy } from "@/content/group";

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow={pageCopy.expertise.eyebrow}
        title={pageCopy.expertise.title}
        lead={pageCopy.expertise.lead}
      />
      <PracticeAreas />
      <HelpStats />
      <ConsultationCTA />
    </>
  );
}
