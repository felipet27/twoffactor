"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function ScrollVideo() {
  const { t } = useI18n();
  const wrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const capRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tri = (p: number, a: number, b: number, c: number, d: number) => {
      if (p <= a || p >= d) return 0;
      if (p < b) return (p - a) / (b - a);
      if (p <= c) return 1;
      return (d - p) / (d - c);
    };

    const setCaptions = (p: number) => {
      const o = [
        tri(p, -1, -1, 0.24, 0.32),
        tri(p, 0.36, 0.44, 0.62, 0.7),
        tri(p, 0.74, 0.82, 1.1, 1.2),
      ];
      capRefs.current.forEach((el, i) => {
        if (!el) return;
        const v = Math.max(0, Math.min(1, o[i]));
        el.style.opacity = String(v);
        el.style.transform = `translateY(${(1 - v) * 24}px)`;
        el.style.pointerEvents = v > 0.5 ? "auto" : "none";
      });
    };

    const sticky = stickyRef.current;

    let raf = 0;
    const loop = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = reduce
        ? 0
        : scrollable > 0
        ? Math.min(1, Math.max(0, -rect.top / scrollable))
        : 0;
      setCaptions(reduce ? 0 : p);
      // Desvanece el wrapper sticky al final para evitar superposición con la siguiente sección
      if (sticky) {
        const fade = p < 0.72 ? 1 : Math.max(0, 1 - (p - 0.72) / 0.28);
        sticky.style.opacity = String(fade);
        sticky.style.pointerEvents = fade < 0.05 ? "none" : "auto";
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative z-0 h-[350vh]">
      <div ref={stickyRef} className="sticky top-0 h-svh w-full overflow-hidden">
        {/* Video de fondo en autoplay */}
        <video
          src="/video_twoffactor.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block h-full w-full object-cover"
        />

        {/* Scrims para legibilidad */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-ink/25"
        />
        {/* Velo extra en móvil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-ink/30 md:hidden"
        />
        {/* Fundido inferior → color de fondo de la página */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        />

        {/* Textos controlados por scroll */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-[13vh]">
            <div className="relative w-full">
              {/* Etapa 1 — Software a la medida */}
              <div
                ref={(el) => { capRefs.current[0] = el; }}
                className="absolute bottom-0 left-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  {t("Software a la medida")}
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl lg:text-6xl">
                  {t("Tu negocio no puede detenerse.")}{" "}
                  <span className="text-chrome/60">{t("Tu software tampoco.")}</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-chrome/65 sm:text-lg">
                  {t("Deja de adaptar tu empresa a sistemas genéricos que te hacen perder dinero. Construimos la solución exacta a tu operación y garantizamos su funcionamiento al 100%.")}{" "}
                  <span className="font-semibold text-chrome">
                    {t("Vendemos valor, no horas de código.")}
                  </span>
                </p>
                <div className="mt-8">
                  <a
                    href="https://calendly.com/admin-twoffactor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-gradient-to-r from-cyan to-blue px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] hover:ring-glow"
                  >
                    {t("Agenda tu sesión Discovery →")}
                  </a>
                </div>
              </div>

              {/* Etapa 2 — Cómo trabajamos */}
              <div
                ref={(el) => { capRefs.current[1] = el; }}
                className="absolute bottom-0 left-0 opacity-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  {t("Cómo trabajamos")}
                </p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl">
                  {t("Construimos tu plataforma.")}{" "}
                  <span className="text-gradient">{t("Garantizamos tu operación.")}</span>
                </h2>
                <p className="mt-4 max-w-xl text-base text-chrome/65 sm:text-lg">
                  {t("No somos una agencia tradicional que entrega un código y desaparece. Entendemos tu problema, construimos la solución exacta y sostenemos la operación crítica de tu negocio")}{" "}
                  <span className="font-semibold text-chrome">
                    {t("con la misma dedicación del día uno.")}
                  </span>
                </p>
                <div className="mt-7 max-w-xl space-y-3">
                  {[
                    ["01", "Construcción a la medida", "Anclamos el desarrollo en tus métricas de ahorro o ganancia. Alcance definido y precio de entrada claro, sin sorpresas."],
                    ["02", "Operación Continua", "Tu negocio no se detiene. Infraestructura en la nube, seguridad, soporte prioritario y continuidad garantizada sin importar la conectividad."],
                    ["03", "Evolución y Mejoras", "Tu software crece contigo. Cada plan incluye una bolsa de mejoras mensual para adaptarse a tus nuevos retos."],
                  ].map(([n, name, desc]) => (
                    <div key={n} className="flex gap-4">
                      <span className="font-mono text-xs text-cyan-bright">{n}</span>
                      <p className="text-sm text-chrome/65 sm:text-base">
                        <span className="font-semibold text-chrome">{t(name)}</span>{" "}— {t(desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Etapa 3 — Garantía y Confianza */}
              <div
                ref={(el) => { capRefs.current[2] = el; }}
                className="absolute bottom-0 left-0 opacity-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  {t("Garantía y Confianza")}
                </p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl">
                  {t("No pedimos que nos crean.")}{" "}
                  <span className="text-gradient">{t("Lo dejamos por escrito.")}</span>
                </h2>
                <ul className="mt-6 max-w-lg space-y-3">
                  {[
                    "Alcance cerrado y precio de construcción definido antes de empezar.",
                    "Pagos protegidos por hitos de entrega (40% - 30% - 30%). Nunca todo por adelantado.",
                    "Acuerdos de Nivel de Servicio (SLA) claros para blindar tu operación mensual.",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan-bright">
                        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-chrome sm:text-base">{t(c)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-chrome/40">
                  {t("Cuéntanos qué te está costando hoy tu proceso actual. Te respondemos nosotros, no un formulario.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
