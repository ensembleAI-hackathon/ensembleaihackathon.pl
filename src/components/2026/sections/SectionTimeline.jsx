import { useTranslation } from "react-i18next";

const SectionTimeline = () => {
  const { t } = useTranslation();

  return (
    <div id="timeline" className="logo_section">
      <h3>
        {t("timeline")} <strong>_</strong>
      </h3>
      <div className="logo_mini">{t("timelineSoon")}</div>
    </div>
  );
};

export default SectionTimeline;
