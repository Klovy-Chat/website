import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "pl" | "en";
type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType>({
  lang: "pl",
  setLang: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});


export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("klovy_lang");
      if (stored === "en" || stored === "pl") return stored;
    }
    return "pl";
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("klovy_lang", lang);
  }, [lang]);

  if (!mounted) return null;
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
