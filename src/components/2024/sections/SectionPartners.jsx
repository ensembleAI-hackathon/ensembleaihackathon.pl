import { useTranslation } from "react-i18next";

const SectionPartnerMain = () => {
  const { t } = useTranslation();
  return (
    <div id="partners" className="logo_section">
      <h3>
        {t("mainPartner")}
        <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.mbank.pl/indywidualny/"
        >
          <img src="images/logos_partners/mBank.png" alt="" />
        </a>
      </div>
    </div>
  );
};

const SectionPartnersMerit = () => {
  const { t } = useTranslation();
  return (
    <div id="partners_merit" className="logo_section">
      <h3>
        {t("meritPartners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://cvlab.ii.pw.edu.pl/"
        >
          <img src="images/logos_partners/CVLab.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://cispa.de/en">
          <img src="images/logos_partners/cispa.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://sprintml.com/">
          <img src="images/logos_partners/sprintML.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

const SectionStrategicPartner = () => {
  const { t } = useTranslation();
  return (
    <div id="partners_strategic" className="logo_section">
      <h3>
        {t("strategicPartner")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://ww2.mini.pw.edu.pl/"
        >
          <img src="images/logos/MiNI_PW.png" alt="" />
        </a>
      </div>
    </div>
  );
};

const SectionSponsors = () => {
  const { t } = useTranslation();
  return (
    <div id="sponsors" className="logo_section">
      <h3>
        {t("partners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="medium_img"
          target="_blank"
          href="https://www.esatto.se/en/"
        >
          <img src="images/logos_partners/Esatto.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="medium_img" target="" href="https://www.aiclearing.com">
          <img src="images/logos_partners/ai_clearing.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/kmdpl/"
        >
          <img src="images/logos_partners/KMD.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.trumpf.com/pl_PL/"
        >
          <img src="images/logos_partners/trumpf_medium.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/pw.cinn/?locale=pl_PL"
        >
          <img src="images/logos_partners/PW_Centrum Innowacji.png" alt="" />
        </a>
        <div className=" short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://websensa.com/en/home/"
        >
          <img src="images/logos_partners/websensa.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a className="long_img" target="" href="https://theprotocol.it/">
          <img src="images/logos_partners/theprotocol.png" alt="" />
        </a>
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
      <div className="logos">
        <div className="short_img"></div>
        <div className="short_img"></div>
        <a className="long_img" target="_blank" href="https://tvpw.pl/">
          <img src="images/logos_medialni/tvpw_kolor.png" alt="" />
        </a>
        <div className="short_img"></div>
        <div className="short_img"></div>
      </div>
    </div>
  );
};

const SectionSocialPatron = () => {
  const { t } = useTranslation();
  return (
    <div id="social_patrons" className="logo_section">
      <h3>
        {t("socialPartners")} <strong>_</strong>
      </h3>
      <div className="logo_mini">
        <a
          className="short_img"
          target="_blank"
          href="https://www.bpmcenter.edu.pl/"
        >
          <img src="images/logos_medialni/BPM.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
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
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/Informatyka.AGH"
        >
          <img src="images/logos_medialni/wi_agh.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.linkedin.com/company/kozminski-ai-club/"
        >
          <img src="images/logos_medialni/knai_kozmin.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/ksi.uj"
        >
          <img src="images/logos_medialni/kni_uj.png" alt="" />
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
          href="https://www.facebook.com/wrsminipw"
        >
          <img src="images/logos_medialni/wrs_mini.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/pp.ghost"
        >
          <img src="images/logos_medialni/ghost.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/knad.uek"
        >
          <img src="images/logos_medialni/knad_ue_krakow.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/wfiis"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/wrs_wfiis.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/RAIswps"
        >
          <img src="images/logos_medialni/KN_rai.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/SKNZastosowaniaMetodSztucznejInteligencji"
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
          className="long_img"
          target="_blank"
          href="https://www.elka.pw.edu.pl/"
        >
          <img src="images/logos_medialni/WEiTI_PW.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/wrss.wi"
        >
          <img src="images/logos_medialni/wrs_wii.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/EESTEC.AGH.Krakow"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/eestec_agh.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

const SectionPartners = () => {
  return (
    <>
      <SectionPartnerMain />
      <SectionPartnersMerit />
      <SectionStrategicPartner />
      <SectionSponsors />
      <SectionMediaPatron />
      <SectionSocialPatron />
    </>
  );
};

export default SectionPartners;
