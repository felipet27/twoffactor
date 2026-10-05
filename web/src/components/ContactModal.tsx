"use client";

import { useEffect, useState } from "react";

const WA_TEXT = encodeURIComponent(
  "Hola TwoFFactor, me gustaría conocer más sobre sus servicios."
);
const CALENDLY_URL = "https://calendly.com/twoffactor"; // reemplaza con tu URL real

const FOUNDERS = [
  {
    initials: "JP",
    name: "Juan Pablo Hurtado",
    role: "Backend & Seguridad",
    wa: "XXXXXXXXXXX", // reemplaza con número real (sin + ni espacios)
    email: "pablo@twoffactor.com",
  },
  {
    initials: "FT",
    name: "Felipe Tangarife",
    role: "Producto & Frontend",
    wa: "XXXXXXXXXXX", // reemplaza con número real (sin + ni espacios)
    email: "felipe@twoffactor.com",
  },
];

function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.552 4.1 1.515 5.824L.057 23.18a.75.75 0 0 0 .916.917l5.355-1.457A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.832 9.832 0 0 1-5.012-1.371l-.36-.214-3.717 1.011 1.011-3.716-.215-.361A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2.5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 transition-transform duration-200 ${className}`}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-contact", onOpen);
    return () => window.removeEventListener("open-contact", onOpen);
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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="shrink-0 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan-bright transition-all hover:bg-cyan/20 hover:ring-glow"
      >
        Hablemos
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <div
            onClick={close}
            style={{ transition: "opacity 220ms ease", opacity: visible ? 1 : 0 }}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />

          {/* Panel */}
          <div
            style={{
              transition: "opacity 220ms ease, transform 220ms cubic-bezier(0.22,1,0.36,1)",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(16px)",
            }}
            className="relative w-full max-w-md rounded-2xl border border-chrome/10 bg-ink-2 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* Glow superior */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan/8 blur-3xl"
            />

            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4">
              <div>
                <h2 id="modal-title" className="text-lg font-semibold text-chrome">
                  Conectemos
                </h2>
                <p className="mt-0.5 text-sm text-muted">
                  Elige cómo prefieres contactarnos
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Cerrar"
                className="ml-4 rounded-lg p-1.5 text-muted-dim transition-colors hover:bg-surface hover:text-chrome"
              >
                <IconClose />
              </button>
            </div>

            {/* Opciones */}
            <div className="flex flex-col gap-3 px-6 pb-6">

              {/* WhatsApp — sección con los dos cofunders */}
              <div className="rounded-xl border border-chrome/10 bg-surface/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-chrome/8 px-4 py-2.5">
                  <span className="text-green-400">
                    <IconWhatsApp className="h-4 w-4" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    WhatsApp · Respuesta en minutos
                  </p>
                </div>
                {FOUNDERS.map((f) => (
                  <div
                    key={f.email}
                    className="flex items-center gap-3 px-4 py-3 last:pb-4"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan/25 bg-surface font-mono text-sm font-bold text-cyan-bright">
                      {f.initials}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-chrome">{f.name}</p>
                      <p className="text-xs text-muted">{f.role}</p>
                    </div>
                    <div className="flex shrink-0 flex-row items-center gap-1">
                      <a
                        href={`https://wa.me/${f.wa}?text=${WA_TEXT}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        aria-label={`WhatsApp de ${f.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-green-400 transition-all duration-150 hover:bg-green-500/15 hover:text-green-300"
                      >
                        <IconWhatsApp />
                      </a>
                      <a
                        href={`mailto:${f.email}`}
                        onClick={close}
                        aria-label={`Email de ${f.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-dim transition-all duration-150 hover:bg-surface hover:text-cyan-bright"
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
                className="group/card flex items-center gap-4 rounded-xl border border-chrome/10 bg-surface/60 p-4 transition-all duration-200 hover:border-cyan/40 hover:bg-surface"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan-bright transition-colors group-hover/card:bg-cyan/20">
                  <IconCalendar />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-chrome">Agenda una reunión</p>
                  <p className="text-sm text-muted">Selecciona día y hora · Videollamada</p>
                </div>
                <span className="text-muted-dim">
                  <IconArrow className="group-hover/card:translate-x-1" />
                </span>
              </a>

              {/* Email footer */}
              <p className="pt-1 text-center text-xs text-muted-dim">
                ¿Prefieres correo?{" "}
                <a
                  href="mailto:admin@twoffactor.com"
                  className="text-muted transition-colors hover:text-chrome"
                  onClick={close}
                >
                  admin@twoffactor.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
