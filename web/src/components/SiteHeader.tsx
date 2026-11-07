"use client";

import { useEffect, useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import { getTranslator } from "@/i18n/translate";

export function SiteHeader({ lang }: { lang: Locale }) {
  const t = getTranslator(lang);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-chrome/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-surface/60 font-mono text-lg font-bold tracking-tighter text-cyan-bright ring-glow backdrop-blur">
            fF
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-wide text-chrome">
              TwoFFactor
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Fair and Fast
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="transition-colors hover:text-chrome" href="#top">
            {t("Cómo trabajamos")}
          </a>
          <a
            className="transition-colors hover:text-chrome"
            href="#quienes-somos"
          >
            {t("Quiénes somos")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="border border-chrome/15 bg-surface/50 backdrop-blur" />
          <ContactModal />
        </div>
      </div>
    </header>
  );
}
