import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useTranslation } from "react-i18next";



const AppContext = createContext(null);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
    },
  }
);


const AppProvider = ({ children }) => {
  const { t: translations, i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState(i18n.language || "pt");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
}

  useEffect(() => {
    const storeLanguage = localStorage.getItem("language");

    if (storeLanguage) {
        changeLanguage(storeLanguage);
    } else {
        const navLang = navigator.language.split("-")[0];
        changeLanguage(navLang);
    }
}, [])

  const switchLanguage = (locale) => {
    if (["pt", "en", "es"].includes(locale)) {
      setCurrentLocale(locale);
    } else {
      console.error(`Locale ${locale} not supported`);
    }
  };

  const sharedState = {
    supabase,
    translations,
    currentLocale,
    switchLanguage,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default AppProvider;

export { supabase };
