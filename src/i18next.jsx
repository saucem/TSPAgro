import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./Translation/English.json";
import Spanish from "./Translation/Spanish.json";

const resources = {
  es: {
    translation: Spanish,
  },
  en: {
    translation: English,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "es", //default language
});

export default i18next;
