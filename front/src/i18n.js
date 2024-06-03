import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./Assets/translation/fr.json";
import translationEN from "./Assets/translation/en.json";

i18n.use(initReactI18next).init({
  ressources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: "fr",
  fallBackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
