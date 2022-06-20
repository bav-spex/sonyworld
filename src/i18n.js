import i18next from "i18next";
import HttpApi from 'i18next-http-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "UMhj0rFmaXLB3nzW4YzxMA";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // The default language
    fallbackLng: "en", 
  
    ns: ["default"],
    defaultNS: "default",

    // Tt shows the supported languages
    supportedLngs: ['en', 'ar', 'fr'],
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });
