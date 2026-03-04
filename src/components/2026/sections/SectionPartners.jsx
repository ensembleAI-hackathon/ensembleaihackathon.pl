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
          href="https://www.facebook.com/pw.cinn/?locale=pl_PL"
        >
          <img src="images/logos_partners/PW_Centrum Innowacji.png" alt="" />
        </a>
        <div className="short_img"></div>
      </div>

      <div className="logo_mini">
        <div className="short_img"></div>
        <a className="long_img" target="" href="https://jobs.allegro.eu/pl/e-xperience-2/">
          <img src="images/logos_partners/allegro.jpg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://pl.asseco.com/"
        >
          <img src="images/logos_partners/asseco.jpg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.kogito-ventures.com/"
        >
          <img src="images/logos_partners/kognito.jpg" alt="" />
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
          href="https://www.facebook.com/ailabagh/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/ai_lab_logo.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
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
          href="https://www.facebook.com/GradientPG/"
        >
          <img src="images/logos_medialni/gradient_kolo_naukowe.jpg" alt="" />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="short_img"
          target="_blank"
          href="https://www.facebook.com/knum.atlas/"
        >
          <img src="images/logos_medialni/Atlas_logotyp_biale.svg" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.informatyka.agh.edu.pl/pl/"
        >
          <img src="images/logos_medialni/wi_agh.png" alt="" />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/KNIKernel"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/kn_kernel.jpg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/RAIswps"
        >
          <img src="images/logos_medialni/KN_rai.png" alt="" />
        </a>
      </div>
      <div className="logo_mini">
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
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/SKNDataScience/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/DATA_SCIENCE_SLASK.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/SKNDataScienceSGH/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/skn_data_science.jpg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/wrseitipw/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/WRS_EiTI.png"
            alt=""
          />
        </a>
      </div>
      <div className="logo_mini">
        <a
          className="long_img"
          target="_blank"
          href="https://www.facebook.com/rknpw/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/PW_RKN_biale.svg"
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
        <a
          className="medium_img"
          target="_blank"
          href="https://solvro.pwr.edu.pl/pl/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/solvro.png"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://www.facebook.com/wrss.wi"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/wrs_wii.png"
            alt=""
          />
        </a>
      </div>

      <div className="logo_mini">
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://knneuron.pwr.edu.pl/pl"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/kn_neuron.svg"
            alt=""
          />
        </a>
        <div className="short_img"></div>
        <a
          className="medium_img"
          target="_blank"
          href="https://credibleai.eu/"
        >
          <img
            className="rounded_corners"
            src="images/logos_medialni/centre_credible_ai_logo.jpg"
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
        {t("partners")} &apos;26 <strong>_</strong>
      </h3>
      <div className="logo_mini">TBA</div>
    </div>
  );
};

const SectionPartners = () => {
  return (
    <>
      {/* <SectionPartnersTBA /> */}
      <SectionPartnerMain />
      {/* <SectionPartnerMerit /> */}
      {/* <SectionStrategicPartner /> */}
      <SectionSponsor />
      {/* <SectionMediaPatron /> */}
      <SectionSocialPatrons />
    </>
  );
};

export default SectionPartners;
