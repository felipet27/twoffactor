"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, Locale, hasLocale } from "@/i18n/config";

// Picks the visitor's language: their last explicit choice, then the browser languages
function preferredLocale(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && hasLocale(saved)) return saved;
  } catch {
    // Ignore storage errors
  }
  for (const language of navigator.languages ?? [navigator.language]) {
    const base = language.toLowerCase().split("-")[0];
    if (hasLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

// Sends unprefixed URLs (/, /hablemos) to their localized version, keeping ?query and #hash
// so links such as /?hablemos from Instagram keep working
export function LocaleRedirect({ path = "" }: { path?: string }) {
  useEffect(() => {
    const { search, hash } = window.location;
    const locale = preferredLocale();
    const dest = path || "";
    window.location.replace(`/${locale}${dest}${search}${hash}`);
  }, [path]);

  return (
    <main className="flex min-h-svh items-center justify-center gap-4 text-sm text-muted">
      <a className="hover:text-chrome" href={`/es${path || ""}`}>
        Español
      </a>
      <span aria-hidden>·</span>
      <a className="hover:text-chrome" href={`/en${path || ""}`}>
        English
      </a>
    </main>
  );
}
