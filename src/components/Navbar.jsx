import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import PreviousEditionsPicker from "./PreviousEditionsPicker";
import LanguageSwitcher from "./LanguageSwitcher";
import NoStatuteModal from "./NoStatuteModal";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    if (location.pathname.endsWith("/gallery")) {
      navigate(location.pathname.replace("/gallery", ""));
    } else {
      navigate("/");
    }
    if (nav) {
      setNav(!nav);
    }
  };

  const currentEditionNavLinks = [
    { id: 1, link: "#about", text: t("aboutProject") },
    { id: 2, link: "#timeline", text: t("timeline") },
    { id: 3, link: "#throwback", text: t("throwback") },
    { id: 4, link: "#partners", text: t("partners") },
    { id: 5, link: "#admins", text: t("admins") },
  ];

  const previousEditionNavLinks = [
    { id: 1, link: "#throwback", text: t("throwback") },
    { id: 2, link: "#partners", text: t("partners") },
    { id: 3, link: "#admins", text: t("admins") },
    { id: 4, link: "/", text: t("currentEdition") },
  ];

  const isGalleryPage = location.pathname.endsWith("/gallery");
  const isCurrentEdition = location.pathname.startsWith("/2025");

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/" onClick={scrollToTop}>
          <img
            id="logo"
            src="images/logos_25/LOGO_ROK_svg_biale.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="menu-wrapper">
        <ul className="nav-links">
          {isGalleryPage ? (
            <>
              <li className="nav-item">
                <a onClick={handleBackClick}>{t("takeMeBack")}</a>
              </li>
            </>
          ) : isCurrentEdition ? (
            <>
              {currentEditionNavLinks.map(({ id, link, text }) => (
                <li key={id} className="nav-item">
                  <Link to={link} duration={1000}>
                    {text}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <a
                  href="documents/regulamin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("regulations")}
                </a>
                {/* <a onClick={openModal}>{t("regulations")}</a> */}
              </li>
              <PreviousEditionsPicker />
            </>
          ) : (
            previousEditionNavLinks.map(({ id, link, text }) => (
              <li key={id} className="nav-item">
                <Link to={link} duration={1000}>
                  {text}
                </Link>
              </li>
            ))
          )}
        </ul>
        <div
          className={`nav-toggle ${nav ? "nav-open" : "nav-closed"}`}
          onClick={() => setNav(!nav)}
        >
          <span />
          <span />
          <span />
        </div>
        {nav && (
          <ul className="mobile-nav">
            {isGalleryPage ? (
              <>
                <li className="mobile-nav-item">
                  <a onClick={handleBackClick}>{t("takeMeBack")}</a>
                </li>
              </>
            ) : isCurrentEdition ? (
              <>
                {currentEditionNavLinks.map(({ id, link, text }) => (
                  <li key={id} className="mobile-nav-item">
                    <Link
                      to={link}
                      duration={1000}
                      onClick={() => setNav(!nav)}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
                <li className="mobile-nav-item">
                  <a href="documents/regulamin.pdf">{t("regulations")}</a>
                </li>
                <PreviousEditionsPicker onClick={() => setNav(!nav)} />
              </>
            ) : (
              previousEditionNavLinks.map(({ id, link, text }) => (
                <li key={id} className="mobile-nav-item">
                  <Link to={link} duration={1000} onClick={() => setNav(!nav)}>
                    {text}
                  </Link>
                </li>
              ))
            )}
          </ul>
        )}
        <LanguageSwitcher />
      </div>
      <NoStatuteModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default NavBar;
