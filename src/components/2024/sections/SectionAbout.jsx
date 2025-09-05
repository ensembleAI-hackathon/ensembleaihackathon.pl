import { Trans, useTranslation } from "react-i18next";

const SectionAbout = () => {
  const { t } = useTranslation(); // eslint-disable-line no-unused-vars
  return (
    <div id="about">
      <Trans i18nKey="aboutHackathonText24" />
    </div>
  );
};

export default SectionAbout;
