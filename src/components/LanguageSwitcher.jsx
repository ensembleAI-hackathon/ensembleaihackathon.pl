import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { RxChevronDown } from "react-icons/rx";
import { RxChevronUp } from "react-icons/rx";

const LanguageDropdownSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, languages, handleLanguageChange } =
    useContext(LanguageContext);

  return (
    <div className="language-dropdown-container">
      <div
        className="language-dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="language-dropdown-box">
          <span className="language-dropdown-flag">{currentLanguage.flag}</span>
        </div>
        {!isOpen ? (
          <RxChevronDown className="language-dropdown-icon" />
        ) : (
          <RxChevronUp className="language-dropdown-icon" />
        )}
      </div>
      {isOpen && (
        <div className="language-dropdown-list">
          {languages
            .filter((lang) => lang.code !== currentLanguage.code)
            .map((lang) => (
              <div
                key={lang.code}
                className="language-dropdown-item"
                onClick={() => {
                  handleLanguageChange(lang);
                  setIsOpen(false);
                }}
              >
                <span className="language-dropdown-flag">{lang.flag}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdownSwitcher;
