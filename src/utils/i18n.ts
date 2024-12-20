import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "@/locales/en/common.json";
import ukTranslation from "@/locales/uk/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uk: {
      translation: ukTranslation,
    },
  },
  lng: "uk",
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
