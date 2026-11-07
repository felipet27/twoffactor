"use client";

import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/admin-twoffactor";

const FOUNDERS = [
  {
    initials: "JP",
    name: "Juan Pablo Hurtado",
    firstName: "Juan Pablo",
    role: "Arquitectura y Seguridad",
    wa: "573113627287",
    email: "pablo@twoffactor.com",
  },
  {
    initials: "FT",
    name: "Felipe Tangarife",
    firstName: "Felipe",
    role: "Producto y Experiencia",
    wa: "573173780801",
    email: "felipe@twoffactor.com",
  },
];

// Colores del Taller
const C = {
  bg: "#0B0C10",
  surface: "#14151A",
  surface2: "#1C1E25",
  copper: "#B87333",
  copperDark: "#8C5524",
  cream: "#FAF8F4",
  muted: "#A9ABB1",
  dim: "#5B6670",
  border: "rgba(250,248,244,0.1)",
  borderMid: "rgba(250,248,244,0.14)",
};

function IconWA({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
    </svg>
  );
}

function IconMail({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconCalendar({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2.5" />
    </svg>
  );
}

function IconClose({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconArrow({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function TallerContactModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) requestAnimationFrame(() => setVisible(true));
    else setVisible(false);
  }, [open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-contact", onOpen);
    return () => window.removeEventListener("open-contact", onOpen);
  }, []);

  useEffect(() => {
    const check = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.has("hablemos") || window.location.hash === "#hablemos") {
        setOpen(true);
        history.replaceState(null, "", window.location.pathname);
      }
    };
    if (document.readyState === "complete") check();
    else window.addEventListener("load", check, { once: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function close() {
    setVisible(false);
    setTimeout(() => setOpen(false), 220);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="taller-modal-title"
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(11,12,16,0.85)",
          backdropFilter: "blur(6px)",
          transition: "opacity 220ms ease",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 440,
          borderRadius: 20,
          border: `1px solid ${C.borderMid}`,
          background: C.surface,
          boxShadow: "0 24px 80px -12px rgba(0,0,0,0.75)",
          overflow: "hidden",
          transition: "opacity 220ms ease, transform 220ms cubic-bezier(0.22,1,0.36,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(16px)",
        }}
      >
        {/* Glow cobre superior */}
        <div
          aria-hidden
          style={{
            position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
            width: 320, height: 160,
            background: `radial-gradient(ellipse, rgba(184,115,51,0.18) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "24px 24px 16px" }}>
          <div>
            <h2
              id="taller-modal-title"
              style={{ margin: 0, fontSize: 18, fontWeight: 600, color: C.cream, fontFamily: "inherit" }}
            >
              Conectemos
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.muted }}>
              Elige cómo prefieres contactarnos
            </p>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar"
            style={{
              marginLeft: 16, padding: 6, borderRadius: 8, border: 0,
              background: "transparent", color: C.dim, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color 150ms, background 150ms",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = C.surface2; (e.currentTarget as HTMLButtonElement).style.color = C.cream; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = C.dim; }}
          >
            <IconClose />
          </button>
        </div>

        {/* Contenido */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 24px 24px" }}>

          {/* WhatsApp section */}
          <div style={{ borderRadius: 12, border: `1px solid ${C.border}`, background: C.surface2, overflow: "hidden" }}>
            {/* Label WhatsApp */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              borderBottom: `1px solid ${C.border}`,
              padding: "10px 16px",
            }}>
              <span style={{ color: "#4ADE80", display: "flex" }}>
                <IconWA size={16} />
              </span>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, fontFamily: "'Ubuntu Mono', monospace" }}>
                WhatsApp · Respuesta en minutos
              </p>
            </div>

            {/* Cofundadores */}
            {FOUNDERS.map((f) => (
              <div
                key={f.email}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}
              >
                {/* Iniciales con acento cobre */}
                <span style={{
                  display: "grid", placeItems: "center",
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  border: `1px solid rgba(184,115,51,0.4)`,
                  background: "rgba(184,115,51,0.12)",
                  fontFamily: "'Ubuntu Mono', monospace",
                  fontSize: 13, fontWeight: 700, color: C.copper,
                }}>
                  {f.initials}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: C.cream }}>{f.name}</p>
                  <p style={{ margin: 0, fontSize: 12, color: C.dim }}>{f.role}</p>
                </div>

                <div style={{ display: "flex", flexShrink: 0, flexDirection: "row", alignItems: "center", gap: 4 }}>
                  <a
                    href={`https://wa.me/${f.wa}?text=${encodeURIComponent(`Hola ${f.firstName}, me gustaría contactarme contigo para conocer más sobre los servicios de TwoFFactor.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    aria-label={`WhatsApp de ${f.name}`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 32, height: 32, borderRadius: 8,
                      color: "#4ADE80", textDecoration: "none",
                      transition: "background 150ms",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(74,222,128,0.12)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
                  >
                    <IconWA />
                  </a>
                  <a
                    href={`mailto:${f.email}`}
                    onClick={close}
                    aria-label={`Correo de ${f.name}`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 32, height: 32, borderRadius: 8,
                      color: C.dim, textDecoration: "none",
                      transition: "background 150ms, color 150ms",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = C.surface; (e.currentTarget as HTMLAnchorElement).style.color = C.copper; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = C.dim; }}
                  >
                    <IconMail />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Calendly */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{
              display: "flex", alignItems: "center", gap: 16,
              borderRadius: 12, border: `1px solid ${C.border}`,
              background: C.surface2, padding: 16,
              textDecoration: "none",
              transition: "border-color 200ms, background 200ms",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.copper; (e.currentTarget as HTMLAnchorElement).style.background = "#20222A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.border; (e.currentTarget as HTMLAnchorElement).style.background = C.surface2; }}
          >
            <span style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: 48, height: 48, flexShrink: 0, borderRadius: 12,
              background: "rgba(184,115,51,0.12)", color: C.copper,
              transition: "background 200ms",
            }}>
              <IconCalendar />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: 500, fontSize: 15, color: C.cream }}>Agenda una reunión</p>
              <p style={{ margin: 0, fontSize: 13, color: C.muted }}>Selecciona día y hora · Videollamada</p>
            </div>
            <span style={{ color: C.dim, flexShrink: 0 }}>
              <IconArrow />
            </span>
          </a>

          {/* Footer email */}
          <p style={{ margin: 0, textAlign: "center", fontSize: 12, color: C.dim, paddingTop: 4 }}>
            ¿Prefieres correo?{" "}
            <a
              href="mailto:admin@twoffactor.com"
              style={{ color: C.muted, textDecoration: "none", transition: "color 150ms" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = C.cream}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = C.muted}
              onClick={close}
            >
              admin@twoffactor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
