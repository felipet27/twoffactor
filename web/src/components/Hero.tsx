import Image from "next/image";
import handBg from "../../public/images/hand-bg.jpg";
import cube from "../../public/images/cube-hd.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      {/* Fondo full-bleed: la mano + el cubo, cubriendo toda la pantalla */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="hero-canvas absolute left-1/2 top-1/2">
          {/* Capa base: la mano robótica abierta */}
          <Image
            src={handBg}
            alt="Mano robótica de TwoFFactor abierta"
            placeholder="blur"
            priority
            fill
            sizes="100vw"
            className="hero-scene object-cover brightness-[0.92] saturate-[1.1]"
          />

          {/* Capa cubo: el cristal fF real (transparente), gira y se eleva con el scroll */}
          <div className="hero-cube-holder absolute left-[47%] top-[43%] w-[29%] -translate-x-1/2 -translate-y-1/2">
            <div
              aria-hidden
              className="hero-cube-glow absolute -inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.45),transparent_68%)] blur-2xl"
            />
            <Image
              src={cube}
              alt="Núcleo de datos fF de TwoFFactor"
              className="hero-cube relative w-full drop-shadow-[0_0_25px_rgba(103,232,249,0.35)]"
            />
          </div>
        </div>
      </div>

      {/* Scrim para legibilidad del texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      {/* Contenido */}
      <div className="mx-auto flex min-h-svh max-w-7xl items-center px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <p className="anim-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-surface/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-bright backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Advanced Technology &amp; Security
          </p>

          <h1 className="anim-title text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-chrome sm:text-6xl lg:text-7xl">
            Predicción y prevención,{" "}
            <span className="text-gradient">justas y veloces</span>.
          </h1>

          <p className="anim-sub mt-6 max-w-xl text-lg leading-relaxed text-muted">
            En TwoFFactor combinamos inteligencia artificial y ciberseguridad
            para auditar, anticipar y proteger tu operación en tiempo real, a
            escala global.
          </p>

          <div className="anim-cta mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#soluciones"
              className="rounded-full bg-gradient-to-r from-cyan to-blue px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] hover:ring-glow"
            >
              Ver soluciones
            </a>
          </div>

          <dl className="anim-stats mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-chrome/10 pt-8">
            {[
              { k: "99.99%", v: "Disponibilidad" },
              { k: "<1s", v: "Respuesta en el borde" },
              { k: "24/7", v: "Auditoría en vivo" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-mono text-2xl font-bold text-cyan-bright">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted">
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-chrome/20 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cyan" />
        </span>
      </div>
    </section>
  );
}
