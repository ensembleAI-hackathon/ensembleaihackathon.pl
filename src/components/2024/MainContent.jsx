import SectionMain from "./sections/SectionMain";
import SectionPartners from "./sections/SectionPartners";
import SectionAdmins from "./sections/SectionAdmins";
import SectionReport from "./sections/SectionReport";
import SectionWrapper from "../SectionWrapper";

const MainContent2024 = () => {
  return (
    <main>
      <SectionWrapper direction="fade-down">
        <SectionMain />
      </SectionWrapper>
      <SectionWrapper direction="fade-right">
        <SectionReport />
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

export default MainContent2024;
