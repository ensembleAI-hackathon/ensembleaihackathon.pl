import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import LanguageProvider from "./contexts/LanguageContext";
import App from "./App.jsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translations.json";
import plTranslations from "./locales/pl/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    pl: { translation: plTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </StrictMode>
);
