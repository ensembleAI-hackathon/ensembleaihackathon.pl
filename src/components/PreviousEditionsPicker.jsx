import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const PreviousEditionsPicker = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <li className="previous-editions-picker">
      <span className="dropdown-span">{t("previousEditions")}</span>
      <ul className="dropdown-content">
        <li>
          <Link to="/2024" onClick={onClick}>
            2024
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default PreviousEditionsPicker;
