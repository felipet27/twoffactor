"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#pilares", label: "Cómo trabajamos" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#contratar", label: "Cómo contratar" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
  { href: "#nosotros", label: "Quiénes somos" },
];

/** Menú desplegable que solo se muestra en pantallas ≤ 640px (ver .taller-mobile-only en globals.css). */
export function TallerMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="taller-mobile-only">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="taller-menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1px solid rgba(250,248,244,0.3)", borderRadius: 8, color: "#FAF8F4", cursor: "pointer", padding: 0 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>
      {open && (
        <nav
          id="taller-menu-movil"
          aria-label="Menú"
          style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#0B0C10", borderTop: "1px solid rgba(250,248,244,0.16)", borderBottom: "1px solid rgba(250,248,244,0.16)", padding: "8px 24px 16px", display: "flex", flexDirection: "column" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 18, minHeight: 48, display: "flex", alignItems: "center", borderBottom: "1px solid rgba(250,248,244,0.08)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
