import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const defaultLanguage = {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
  ];

  const savedLanguage = sessionStorage.getItem("appLanguage");

  const initialLanguage = savedLanguage
    ? JSON.parse(savedLanguage)
    : defaultLanguage;

  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    sessionStorage.setItem("appLanguage", JSON.stringify(lang));
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage.code);
  }, [currentLanguage, i18n]);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, languages, handleLanguageChange }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
export default LanguageProvider;
