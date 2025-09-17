import { createContext, useContext, useState } from "react";

// Create context with default value
const LanguageContext = createContext({
  language: "mar",
  toggleLanguage: () => {}
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("mar");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook with error handling
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Named exports instead of default export with object
export { LanguageProvider, useLanguage };