import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SectionReport = () => {
  const { t } = useTranslation();

  return (
    <div id="throwback" className="logo_section">
      <h3>
        {t("reportFromTheEvent")} <strong>_</strong>
      </h3>
      <div className="report">
        <Link to="/2025/gallery">
          <button className="gallery-button">{t("gallery2025")}</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionReport;
