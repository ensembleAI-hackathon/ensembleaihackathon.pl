import { useTranslation } from "react-i18next";
import "../styles/modal.css";

// eslint-disable-next-line
const NoStatuteModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{t("noRegulationsModalText")}</h2>
      </div>
    </div>
  );
};

export default NoStatuteModal;
