"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 240;
const frameSrc = (i: number) => `/frames/f${String(i).padStart(3, "0")}.webp`;

export function ScrollVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capRefs = useRef<Array<HTMLDivElement | null>>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Precarga de fotogramas
    imagesRef.current = Array.from({ length: FRAME_COUNT }, (_, k) => {
      const img = new Image();
      img.src = frameSrc(k + 1);
      if (k === 0) img.onload = () => draw(0);
      return img;
    });

    let lastFrame = -1;

    const drawCover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (cr > ir) {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      } else {
        dh = ch;
        dw = ch * ir;
        dy = 0;
        dx = (cw - dw) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const draw = (frame: number) => {
      const img = imagesRef.current[frame];
      if (img && img.complete && img.naturalWidth) {
        drawCover(img);
        lastFrame = frame;
      }
    };

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

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.fillStyle = "#050a18";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      lastFrame = -1;
      if (imagesRef.current[0]) draw(0);
    };

    const render = () => {
      const rect = wrap.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p =
        scrollable > 0
          ? Math.min(1, Math.max(0, -rect.top / scrollable))
          : 0;
      const frame = reduce ? 0 : Math.round(p * (FRAME_COUNT - 1));
      if (frame !== lastFrame) draw(frame);
      setCaptions(reduce ? 0 : p);
    };

    let raf = 0;
    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative h-[680vh]">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />

        {/* Scrims para legibilidad */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-ink/25"
        />
        {/* Velo extra en móvil: el robot ocupa toda la pantalla */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-ink/30 md:hidden"
        />

        {/* Textos sincronizados con el scroll */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-[13vh]">
            <div className="relative w-full">
              {/* Etapa 1 — El problema */}
              <div
                ref={(el) => {
                  capRefs.current[0] = el;
                }}
                className="absolute bottom-0 left-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  El problema
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl lg:text-6xl">
                  La mayoría del software{" "}
                  <span className="text-chrome/60">falla en silencio.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-chrome/65 sm:text-lg">
                  No el día que lo entregan — meses después, cuando nadie mira.{" "}
                  <span className="font-semibold text-chrome">
                    Two <span className="text-gradient">FF</span>actor
                  </span>{" "}
                  existe para la otra mitad del trabajo: la que nadie ve, pero{" "}
                  <span className="text-cyan-bright">sostiene todo</span>.
                </p>
                <div className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-2">
                  {["Rápido", "Verificado", "Sin sorpresas"].map((w) => (
                    <span
                      key={w}
                      className="text-2xl font-semibold tracking-tight text-chrome sm:text-3xl"
                    >
                      {w}
                      <span className="text-cyan">.</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Etapa 2 — Cómo trabajamos */}
              <div
                ref={(el) => {
                  capRefs.current[1] = el;
                }}
                className="absolute bottom-0 left-0 opacity-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  Cómo trabajamos
                </p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl">
                  Dos factores,{" "}
                  <span className="text-gradient">un solo resultado.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base text-chrome/65 sm:text-lg">
                  <span className="font-semibold text-chrome">Fast</span>,
                  velocidad de entrega.{" "}
                  <span className="font-semibold text-chrome">Fair</span>,
                  verificación de que quedó bien. Nunca una sin la otra.
                </p>
                <div className="mt-7 max-w-xl space-y-3">
                  {[
                    ["01", "Proyecto", "alcance cerrado, fecha cerrada."],
                    [
                      "02",
                      "Bolsa de horas",
                      "construimos sobre la marcha, sin perder el control del gasto.",
                    ],
                    [
                      "03",
                      "Administración",
                      "sostenemos la operación en el tiempo, no solo el lanzamiento.",
                    ],
                  ].map(([n, name, desc]) => (
                    <div key={n} className="flex gap-4">
                      <span className="font-mono text-xs text-cyan-bright">
                        {n}
                      </span>
                      <p className="text-sm text-chrome/65 sm:text-base">
                        <span className="font-semibold text-chrome">
                          {name}
                        </span>{" "}
                        — {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Etapa 3 — Confianza */}
              <div
                ref={(el) => {
                  capRefs.current[2] = el;
                }}
                className="absolute bottom-0 left-0 opacity-0 will-change-[opacity,transform]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
                  Confianza
                </p>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-chrome sm:text-5xl">
                  No pedimos que nos crean.{" "}
                  <span className="text-gradient">Lo dejamos por escrito.</span>
                </h2>
                <ul className="mt-6 max-w-lg space-y-3">
                  {[
                    "Alcance y entregables definidos antes de empezar.",
                    "Pagos protegidos por hitos, nunca todo por adelantado.",
                    "Soporte real después de la entrega, no solo durante.",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan-bright">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-3.5 w-3.5"
                          aria-hidden
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-chrome sm:text-base">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="mailto:hola@twoffactor.dev?subject=Quiero%20hablar%20con%20Two%20FFactor"
                    className="rounded-full bg-gradient-to-r from-cyan to-blue px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] hover:ring-glow"
                  >
                    Empecemos la conversación
                  </a>
                  <p className="mt-3 text-xs text-chrome/40">
                    Cuéntanos qué te está costando hoy tu proceso actual. Te
                    respondemos nosotros, no un formulario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
