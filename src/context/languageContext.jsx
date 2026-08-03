import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { useTranslation } from "react-i18next";


export const LanguageContext = createContext(undefined);

export const LanguageContextProvider = ({ children }) => {
  const languages = {
    es: { nativeName: "Español" },
    en: { nativeName: "English" },
  };
  const { t, i18n } = useTranslation();

  const [currentLang, setCurrentLang] = useState(() => {
    const browserLang = navigator.language || "es";
    return browserLang.split("-")[0]; // fallback a "es"
  });

  const onClickLanguageChange = (eventOrObj) => {
    const value = eventOrObj.target ? eventOrObj.target.value : eventOrObj.value;
    setCurrentLang(value);
    i18n.changeLanguage(value);
  };
  
  //const onClickLanguageChange = (e) => {
  //  const language = e.target.value;
  //  i18n.changeLanguage(language); //change the language
  //};

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages, currentLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);