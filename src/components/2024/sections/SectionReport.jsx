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
        <Trans i18nKey="report2024" />
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/hb80MlI7XhI?si=ZkU-TqhqnqIRYJva"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/4L242eKbB10?si=6VK8cvHIkhuEAP7J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Link to="/2024/gallery">
          <button className="gallery-button">{t("gallery2024")}</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionReport;
