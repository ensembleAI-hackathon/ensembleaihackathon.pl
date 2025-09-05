import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <hr />
      </div>
      <div id="footer-content">
        <div className="social-icons social-icons-shorter">
          <a
            href="https://discord.gg/wREck5C6qW"
            target="_blank"
            title={t("joinDiscord")}
          >
            <i className="fab fa-discord" style={{ color: "#7289DA" }}></i>
            {t("discord")}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094576702313"
            target="_blank"
            title={t("followTheEventOnFacebook")}
          >
            <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/ensembleaihackathon/"
            target="_blank"
            title={t("followUsOnLinkedIn")}
          >
            <i className="fab fa-linkedin" style={{ color: "#e82e89" }}></i>
            LinkedIn
          </a>
          <a
            href="mailto:contact@ensembleaihackathon.pl"
            title={t("sendUsAnEmail")}
          >
            <i className="fas fa-envelope" style={{ color: "#ffffff" }}></i>
            E-mail
          </a>
        </div>
        <div className="social-icons social-icons-longer">
          <a
            href="https://discord.gg/wREck5C6qW"
            target="_blank"
            title={t("joinDiscord")}
          >
            <i className="fab fa-discord" style={{ color: "#7289DA" }}></i>
            {t("joinDiscord")}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094576702313"
            target="_blank"
            title={t("followTheEventOnFacebook")}
          >
            <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
            {t("followTheEventOnFacebook")}
          </a>
          <a
            href="https://www.linkedin.com/company/ensembleaihackathon/"
            target="_blank"
            title={t("followUsOnLinkedIn")}
          >
            <i className="fab fa-linkedin" style={{ color: "#e82e89" }}></i>
            {t("followUsOnLinkedIn")}
          </a>
          <a
            href="mailto:contact@ensembleaihackathon.pl"
            title={t("sendUsAnEmail")}
          >
            <i className="fas fa-envelope" style={{ color: "#ffffff" }}></i>
            {t("sendUsAnEmail")}
          </a>
        </div>
        <br />
        <p className="rights_reserved" style={{ textAlign: "center" }}>
          {year} &copy; All rights reserved.
        </p>
      </div>
      <div>
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
