import { EN } from "./en/index";
import { Locale } from "./config";

export type TranslateVars = Record<string, string | number>;

// The Spanish text is the key: English comes from the dictionary and anything
// missing is shown as written.
export function translate(locale: Locale, text: string, vars?: TranslateVars): string {
  let out = locale === "en" ? (EN[text] ?? text) : text;
  if (vars) {
    out = out.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
  }
  return out;
}

export function getTranslator(locale: Locale) {
  return (text: string, vars?: TranslateVars) => translate(locale, text, vars);
}
