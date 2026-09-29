import Image from "next/image";
import dive1 from "../../public/images/dive-1-robot.jpg";
import dive2 from "../../public/images/dive-2-servers.jpg";
import dive3 from "../../public/images/dive-3-brain.jpg";
import dive4 from "../../public/images/dive-4-nexus.jpg";

export function DiveSequence() {
  return (
    <section id="top" className="dive">
      <div className="dive__stage">
        {/* Fotogramas */}
        <div className="dive__frame dive__frame--1">
          <Image
            src={dive1}
            alt="Robot de dos cabezas de TwoFFactor junto al logo TWO FFACTOR"
            placeholder="blur"
            priority
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="dive__frame dive__frame--2">
          <Image
            src={dive2}
            alt="Acercamiento a la consola de TwoFFactor con el mapa de servidores emergiendo"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="dive__frame dive__frame--3">
          <Image
            src={dive3}
            alt="Núcleo de IA con forma de cerebro y pantallas de análisis de amenazas"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="dive__frame dive__frame--4">
          <Image
            src={dive4}
            alt="Nexo de gestión del núcleo de IA de TwoFFactor con el procesador central"
            placeholder="blur"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Scrim para legibilidad */}
        <div aria-hidden className="dive__scrim" />

        {/* Textos por etapa */}
        <div className="mx-auto max-w-7xl px-6">
          {/* Etapa 1 — Hero */}
          <div className="dive__cap dive__cap--1">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-surface/50 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-bright backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              Advanced Technology &amp; Security
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-chrome sm:text-6xl lg:text-7xl">
              Predicción y prevención,{" "}
              <span className="text-gradient">justas y veloces</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Sumérgete en el núcleo de TwoFFactor: de la ingesta de datos al
              análisis de amenazas en tiempo real.
            </p>
            <p className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-4 w-px bg-cyan" />
              Haz scroll para descender
            </p>
          </div>

          {/* Etapa 2 — Ingesta de datos */}
          <div className="dive__cap dive__cap--2">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
              01 · Ingesta
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-chrome sm:text-6xl">
              Ingesta de datos
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Capturamos y mapeamos cada señal —clústeres de servidores,
              registros y accesos— en un flujo seguro y continuo.
            </p>
          </div>

          {/* Etapa 3 — Análisis de amenazas */}
          <div className="dive__cap dive__cap--3">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
              02 · Inteligencia
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-chrome sm:text-6xl">
              Análisis de amenazas
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              El núcleo de IA correlaciona patrones y anticipa riesgos antes de
              que ocurran, con generación de claves y verificación de integridad.
            </p>
          </div>

          {/* Etapa 4 — Nexo del núcleo */}
          <div className="dive__cap dive__cap--4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-bright">
              03 · Control
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-chrome sm:text-6xl">
              Nexo de gestión del núcleo de IA
            </h2>
            <p className="mt-4 max-w-lg text-lg text-muted">
              Rendimiento por nodo, protocolos de auto-reparación y control total
              del sistema. El PC del futuro, en funcionamiento.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#soluciones"
                className="rounded-full bg-gradient-to-r from-cyan to-blue px-7 py-3 font-semibold text-ink transition-transform hover:scale-[1.03] hover:ring-glow"
              >
                Ver soluciones
              </a>
              <a
                href="#brochure"
                className="rounded-full border border-chrome/15 px-7 py-3 font-medium text-chrome transition-colors hover:border-cyan/40 hover:text-cyan-bright"
              >
                Descargar brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
