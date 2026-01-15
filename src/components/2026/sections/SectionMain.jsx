import { useTranslation } from "react-i18next";

const SectionMain = () => {
  const { t } = useTranslation();

  return (
    <div id="main">
      <div id="img">
        <img src="images/logos_26/www_LOGO.svg" alt="logo" />
      </div>
      <a
        href="https://forms.gle/EvCh8LW3ZMDweqSm9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>{t("signUp")}</button>
      </a>
    </div>
  );
};

export default SectionMain;
