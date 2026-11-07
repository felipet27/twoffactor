import Image from "next/image";
import felipePhoto from "../../public/images/felipe-tangarife.jpg";
import juanPabloPhoto from "../../public/images/juan-pablo-hurtado.jpg";
import type { Locale } from "@/i18n/config";
import { getTranslator } from "@/i18n/translate";

const members = [
  {
    initials: "JP",
    name: "Juan Pablo Hurtado",
    role: "CEO · CTO",
    bio: "Como director de Arquitectura y Seguridad, lidera en TwoFFactor el backend y la infraestructura en la nube. Diseña los cimientos, bases de datos y protocolos de seguridad que hacen que tu plataforma sea resiliente y escalable.",
    photo: juanPabloPhoto,
    linkedin: "https://www.linkedin.com/in/juanpablohz/",
  },
  {
    initials: "FT",
    name: "Felipe Tangarife",
    role: "CEO · COO",
    bio: "Como director de Producto y Experiencia, lidera en TwoFFactor el frontend y la estrategia visual. Transforma procesos de negocio complejos en interfaces intuitivas, garantizando que tu equipo adopte la tecnología sin fricciones.",
    photo: felipePhoto,
    linkedin: "https://www.linkedin.com/in/felipetangarife7",
  },
];

export function Team({ lang }: { lang: Locale }) {
  const t = getTranslator(lang);
  return (
    <section id="quienes-somos" className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-28">
      <div className="reveal max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-bright">
          {t("Quiénes somos")}
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-chrome sm:text-5xl">
          {t("Dos mentes, un mismo")}{" "}
          <span className="text-gradient">{t("factor")}</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {t("Somos los arquitectos detrás de TwoFFactor. Combinamos ingeniería profunda y diseño estratégico para construir tecnología en la que tu negocio puede confiar su operación crítica")}{" "}
          <span className="font-semibold text-chrome">{t("con los ojos cerrados.")}</span>
        </p>
      </div>

      <div className="cards3d mt-10 grid gap-6 sm:mt-16 md:grid-cols-2">
        {members.map((m, i) => (
          <article
            key={m.name}
            className={`card3d ${i === 0 ? "card3d--left" : "card3d--right"} relative z-0 hover:z-30`}
          >
            <div className="group h-full overflow-hidden rounded-3xl border border-chrome/10 bg-surface/40 p-6 backdrop-blur transition-[transform,border-color,box-shadow,background-color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.05] hover:border-cyan/50 hover:bg-surface/70 hover:ring-glow">
              <div className="flex gap-5">

                {/* Foto o monograma */}
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl border border-cyan/20">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={t("Foto de {name}", { name: m.name })}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                      placeholder="blur"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface-2 to-ink">
                      <span className="font-mono text-2xl font-bold text-cyan-bright">
                        {m.initials}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-chrome">{m.name}</h3>
                    <p className="mt-1 text-sm text-cyan">{t(m.role)}</p>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs uppercase tracking-wide text-muted-dim">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-cyan-bright"
                      aria-label={t("LinkedIn de {name}", { name: m.name })}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted">{t(m.bio)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
