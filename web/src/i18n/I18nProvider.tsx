"use client";

import { createContext, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALE_STORAGE_KEY, Locale, localizePath } from "./config";
import { TranslateVars, translate } from "./translate";

interface I18nValue {
  lang: Locale;
  t: (text: string, vars?: TranslateVars) => string;
  switchLang: (next: Locale) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLang(next: Locale) {
    if (next === lang) return;
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
    router.push(`${localizePath(pathname, next)}${window.location.search}${window.location.hash}`, {
      scroll: false,
    });
  }

  return (
    <I18nContext.Provider value={{ lang, t: (text, vars) => translate(lang, text, vars), switchLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
