import { useTranslation } from "react-i18next";

/* eslint-disable no-unused-vars */
const SectionPartnerMain = () => {
  const { t } = useTranslation();

  return (
    <div id="partners" className="logo_section">
      <h3>
        {t("mainPartner")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.mbank.pl/indywidualny/"
        >
          <img src="images/logos_partners/mBank.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.jetbrains.com/"
        >
          <img src="images/logos_partners/jetbrains.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

const SectionPartnerMerit = () => {
  const { t } = useTranslation();

  return (
    <div id="partners" className="logo_section">
      {/* <div id="partners_merit" className="logo_section"> */}
      <h3>
        {t("meritPartners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        {/* <a className="long_img" target="_blank" href="https://cvlab.ii.pw.edu.pl/">
          <img src="images/logos_partners/CVLab.png" alt="" />
        </a> */}
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://cispa.de/en">
          <img src="images/logos_partners/cispa.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://sprintml.com/">
          <img src="images/logos_partners/sprintML.svg" alt="" />
        </a>
        <div className="short_img"></div>
      </div>
    </div>
  );
};

const SectionStrategicPartner = () => {
  const { t } = useTranslation();

  return (
    <div id="partners" className="logo_section">
      <h3>
        {t("strategicPartner")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.informatyka.agh.edu.pl/pl/"
        >
          <img src="images/logos_medialni/wi_agh.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://www.cyfronet.pl/">
          <img src="images/logos_medialni/cyfronet.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="medium_img" target="_blank" href="https://www.plgrid.pl/">
          <img src="images/logos_medialni/PLGrid_1.png" alt="" />
        </a>
      </div>
    </div>
  );
};

const SectionSponsor = () => {
  const { t } = useTranslation();

  return (
    <div id="sponsors" className="logo_section">
      <h3>
        {t("partners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <div className="short_img"></div>
        <a className="medium_img" target="" href="https://www.aiclearing.com">
          <img src="images/logos_partners/ai_clearing.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.trumpf.com/pl_PL/"
        >
          <img src="images/logos_partners/trumpf_medium.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.gresearch.com/"
        >
          <img src="images/logos_partners/g_research.png" alt="" />
        </a>
        <div className="short_img"></div>
      </div>
    </div>
  );
};

const SectionSocialPatrons = () => {
  const { t } = useTranslation();

  return (
    <div id="social_patrons" className="logo_section">
      <h3>
        {t("socialPartners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100093587573194"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/czarna_magia.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/pp.ghost"
        >
          <img src="images/logos_medialni/ghost.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/wrsminipw"
        >
          <img src="images/logos_medialni/wrs_mini.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/SKNAIMETH/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/ai-meth_skn.png"
            alt=""
          />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/smartcitypw"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/Smart_city_white_on_color.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/knm.uam/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/knm_uam.jpg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a className="medium_img" target="_blank" href="https://skni.umcs.pl/">
          <img src="images/logos_medialni/skni-logo_white.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/skni.kod/"
        >
          <img src="images/logos_medialni/kod_logo_color.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a className="medium_img" target="_blank" href="https://hacknarok.pl/">
          <img src="images/logos_medialni/hacknarok.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/GradientPG/"
        >
          <img src="images/logos_medialni/gradient_kolo_naukowe.jpg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/knum.atlas/"
        >
          <img src="images/logos_medialni/Atlas_logotyp_biale.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/SKNDataScienceSGH/"
        >
          <img src="images/logos_medialni/knds_sgh.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/RAIswps"
        >
          <img src="images/logos_medialni/KN_rai.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.linkedin.com/company/polish-ml-community/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/pl_ml_community.jpg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/knimini/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/kni_mini.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.linkedin.com/company/knsolvro/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/kn_solvro.png"
            alt=""
          />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/weitipw/"
        >
          <img src="images/logos_medialni/WEiTI_PW.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/knimini/"
        >
          <img src="images/logos_medialni/wrs_wii.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/WRSSWIET"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/wrs_wieit_agh.jpg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/ailabagh/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/ai_lab_logo.png"
            alt=""
          />
        </a>
      </div>
      <div className="logo_mini">
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/kolo.naukowe.somsiad"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/kn-somsiad.svg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
      </div>
    </div>
  );
};

const SectionMediaPatron = () => {
  const { t } = useTranslation();
  return (
    <div id="media_patrons" className="logo_section">
      <h3>
        {t("mediaPartners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://www.ksaf.pl/">
          <img src="images/logos_medialni/ksaf.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.mine.agh.edu.pl/"
        >
          <img src="images/logos_medialni/mine.png" alt="" />
        </a>
        <div className="short_img"></div>
      </div>
    </div>
  );
};

const SectionPartnersTBA = () => {
  const { t } = useTranslation();
  return (
    <div id="partners" className="logo_section">
      <h3>
        {t("partners")} &apos;25 <strong>_</strong>
      </h3>
      <div className="logo_mini">TBA</div>
    </div>
  );
};

const SectionPartners = () => {
  return (
    <>
      {/* <SectionPartnersTBA /> */}
      {/* NIE USUWAC TEGO KOMENTARZA BO TRZEBA BEDZIE PO COMMITACH SZUKAC KODU */}
      <SectionPartnerMain />
      <SectionPartnerMerit />
      <SectionStrategicPartner />
      <SectionSponsor />
      <SectionMediaPatron />
      <SectionSocialPatrons />
    </>
  );
};

export default SectionPartners;
