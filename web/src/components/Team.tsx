const members = [
  {
    initials: "JP",
    name: "Juan Pablo Hurtado",
    role: "Co-fundador · Desarrollador",
    bio: "Arquitectura, backend y seguridad. Diseña los cimientos que hacen a TwoFFactor rápido y confiable.",
  },
  {
    initials: "FT",
    name: "Felipe Tangarife",
    role: "Co-fundador · Desarrollador",
    bio: "Producto, frontend y experiencia. Convierte la tecnología en interfaces que se sienten del futuro.",
  },
];

export function Team() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-7xl px-6 py-28">
      <div className="reveal max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-bright">
          Quiénes somos
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-chrome sm:text-5xl">
          Dos mentes, un mismo{" "}
          <span className="text-gradient">factor</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Somos los desarrolladores detrás de TwoFFactor: fair and fast.
          Combinamos ingeniería y diseño para construir tecnología en la que se
          puede confiar.
        </p>
      </div>

      <div className="cards3d mt-16 grid gap-6 md:grid-cols-2">
        {members.map((m, i) => (
          <article
            key={m.name}
            className={`card3d ${
              i === 0 ? "card3d--left" : "card3d--right"
            } relative z-0 hover:z-30`}
          >
            <div className="group h-full overflow-hidden rounded-3xl border border-chrome/10 bg-surface/40 p-8 backdrop-blur transition-[transform,border-color,box-shadow,background-color] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-2 hover:scale-[1.05] hover:border-cyan/50 hover:bg-surface/70 hover:ring-glow">
              <div className="flex items-center gap-5">
              {/* Avatar (monograma — reemplazable por foto real) */}
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-cyan/30 bg-gradient-to-br from-surface-2 to-ink font-mono text-2xl font-bold tracking-tight text-cyan-bright ring-glow">
                {m.initials}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-chrome">{m.name}</h3>
                <p className="mt-1 text-sm text-cyan">{m.role}</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">{m.bio}</p>

            <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-wide text-muted-dim">
              <a
                href="#"
                className="transition-colors hover:text-cyan-bright"
                aria-label={`LinkedIn de ${m.name}`}
              >
                LinkedIn
              </a>
              <span className="h-3 w-px bg-chrome/15" />
              <a
                href="#"
                className="transition-colors hover:text-cyan-bright"
                aria-label={`GitHub de ${m.name}`}
              >
                GitHub
              </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
