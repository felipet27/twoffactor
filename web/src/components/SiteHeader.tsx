export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-surface/60 font-mono text-lg font-bold tracking-tighter text-cyan-bright ring-glow backdrop-blur">
            fF
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-wide text-chrome">
              TwoFFactor
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Fair and Fast
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="transition-colors hover:text-chrome" href="#top">
            Cómo trabajamos
          </a>
          <a
            className="transition-colors hover:text-chrome"
            href="#quienes-somos"
          >
            Quiénes somos
          </a>
        </nav>

        <a
          href="mailto:hola@twoffactor.dev?subject=Quiero%20hablar%20con%20Two%20FFactor"
          className="rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan-bright transition-all hover:bg-cyan/20 hover:ring-glow"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
