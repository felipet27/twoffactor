export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="border-t border-chrome/10 bg-ink-2/60"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan/30 bg-surface/60 font-mono text-sm font-bold text-cyan-bright">
            fF
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-chrome">TwoFFactor</p>
            <p className="text-xs text-muted">Fair and Fast</p>
          </div>
        </div>
        <p className="text-xs text-muted-dim">
          © {new Date().getFullYear()} TwoFFactor · Advanced Technology &amp;
          Security Solutions
        </p>
      </div>
    </footer>
  );
}
