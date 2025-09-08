import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SectionReport = () => {
  const { t } = useTranslation();

  return (
    <div id="throwback" className="logo_section">
      <h3>
        {t("reportFromTheEvent")} <strong>_</strong>
      </h3>
      <div className="report">
        <Trans i18nKey="report2025" />
        <Link to="/2025/gallery">
          <button className="gallery-button">{t("gallery2025")}</button>
        </Link>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/KuHh_BRdWwo?si=z1qAnRrurgJEmyl7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/tmEnQVzp-eM?si=kKQY4v6PUSHx5gdb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SectionReport;
