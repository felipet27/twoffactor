import Link from "next/link";
import type { Locale } from "@/i18n/config";

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2V7L2.5 12.5A1 1 0 003.35 14h9.3A1 1 0 0013.5 12.5L10 7V2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 2h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="5.5" cy="11" r="0.75" fill="currentColor" opacity="0.7"/>
      <circle cx="8.5" cy="12.5" r="0.5" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 2a3.5 3.5 0 00-3.4 4.3L2.3 11a1.1 1.1 0 000 1.56l1.14 1.14a1.1 1.1 0 001.56 0l4.7-4.8A3.5 3.5 0 1010.5 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10.5" cy="5.5" r="1" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

export function SiteFooter({ lang }: { lang: Locale }) {
  return (
    <footer
      id="contacto"
      className="relative z-10 border-t border-chrome/10 bg-ink-2/60"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        {/* Enlace al Taller */}
        <Link
          href={`/${lang}`}
          className="steampunk-btn steampunk-btn--inactive"
        >
          <span className="steampunk-rivet steampunk-rivet--tl" />
          <span className="steampunk-rivet steampunk-rivet--tr" />
          <span className="steampunk-rivet steampunk-rivet--bl" />
          <span className="steampunk-rivet steampunk-rivet--br" />
          <span className="steampunk-lamp steampunk-lamp--off" />
          <WrenchIcon className="h-3.5 w-3.5 shrink-0" />
          <span>Taller</span>
        </Link>

        <p className="text-xs text-muted-dim">
          © {new Date().getFullYear()} TwoFFactor · Advanced Technology &amp;
          Security Solutions
        </p>
      </div>
    </footer>
  );
}
