import SectionMain from "./sections/SectionMain";
import SectionAbout from "./sections/SectionAbout";
import SectionAdmins from "./sections/SectionAdmins";
import SectionTimeline from "./sections/SectionTimeline";
import SectionFaq from "./sections/SectionFaq";
import SectionPartners from "./sections/SectionPartners";
import SectionWrapper from "../SectionWrapper";

const MainContent2026 = () => {
  return (
    <main>
      <SectionWrapper direction="fade-down">
        <SectionMain />
      </SectionWrapper>
      <SectionWrapper direction="fade-right">
        <SectionAbout />
      </SectionWrapper>
      <SectionWrapper direction="fade-left">
        <SectionTimeline />
      </SectionWrapper>
      <SectionWrapper direction="fade-right">
        <SectionFaq />
      </SectionWrapper>
      <SectionWrapper direction="fade-left">
        <SectionPartners />
      </SectionWrapper>
      <SectionWrapper direction="fade-up">
        <SectionAdmins />
      </SectionWrapper>
    </main>
  );
};

export default MainContent2026;
