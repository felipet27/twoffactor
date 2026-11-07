import Image from "next/image";
import Link from "next/link";
import { TallerContactModal } from "@/components/TallerContactModal";
import { RobotsGreeting } from "@/components/RobotsGreeting";
import { TallerHablemosBtn } from "@/components/TallerHablemosBtn";
import felipePhoto from "../../public/images/felipe-tangarife.jpg";
import juanPabloPhoto from "../../public/images/juan-pablo-hurtado.jpg";

function Grano() {
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.18 }}
    >
      <filter id="grano-taller">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grano-taller)" />
    </svg>
  );
}

function TallerLogo() {
  return (
    <svg viewBox="0 0 421.13 104.00" width="180" height="44.5" role="img" aria-label="TwoFFactor" style={{ display: "block" }}>
      <g transform="scale(1.0400)">
        <circle cx="50" cy="50" r="48" fill="#B87333" />
        <g stroke="#0B0C10" strokeWidth="3.5" strokeLinejoin="round">
          <path d="M31 17V25" fill="none" />
          <circle cx="31" cy="13" r="4" fill="#F3EEE4" />
          <rect x="18" y="25" width="26" height="22" rx="6" fill="#F3EEE4" />
          <rect x="56" y="21" width="27" height="26" rx="6" fill="#F3EEE4" />
          <rect x="17" y="51" width="28" height="29" rx="5" fill="#0B0C10" />
          <rect x="55" y="51" width="29" height="29" rx="5" fill="#0B0C10" />
          <rect x="41" y="61" width="18" height="7" rx="3" fill="#F3EEE4" />
        </g>
        <g fill="#0B0C10">
          <circle cx="27" cy="36" r="4" />
          <rect x="61" y="31" width="17" height="6" rx="3" />
          <rect x="28" y="46" width="6" height="6" />
          <rect x="67" y="46" width="6" height="6" />
          <rect x="23" y="79" width="6" height="8" />
          <rect x="34" y="79" width="6" height="8" />
          <rect x="61" y="79" width="6" height="8" />
          <rect x="73" y="79" width="6" height="8" />
        </g>
      </g>
      <path d="M135.08 73.11V39.63H122.56V30.89H156.97V39.63H144.2V73.11Z M162.66 73.11 153.55 42.79H162.42L167.44 60.77L173.27 42.79H180.33L186.16 60.84L191.18 42.79H199.74L190.63 73.11H182.5L176.8 56.31L171.1 73.11Z M215.29 73.86Q210.58 73.86 206.99 71.84Q203.39 69.83 201.41 66.23Q199.42 62.63 199.42 57.98Q199.42 53.27 201.41 49.68Q203.39 46.08 206.99 44.06Q210.58 42.05 215.29 42.05Q220.07 42.05 223.66 44.06Q227.26 46.08 229.27 49.68Q231.29 53.27 231.29 57.98Q231.29 62.63 229.27 66.23Q227.26 69.83 223.66 71.84Q220.07 73.86 215.29 73.86ZM215.29 65.05Q218.33 65.05 220.22 63.1Q222.11 61.15 222.11 57.98Q222.11 54.76 220.22 52.78Q218.33 50.79 215.29 50.79Q212.38 50.79 210.49 52.74Q208.6 54.7 208.6 57.92Q208.6 61.15 210.49 63.1Q212.38 65.05 215.29 65.05Z M292.94 73.92Q289.66 73.92 287.15 72.65Q284.64 71.38 283.27 69.08Q281.91 66.79 281.91 63.75Q281.91 60.53 283.4 58.26Q284.88 56 287.39 54.76Q289.91 53.52 293.01 53.52Q297.41 53.52 300.14 55.44V53.71Q300.14 52.03 298.96 50.79Q297.78 49.55 295.18 49.55Q293.5 49.55 291.33 49.95Q289.16 50.36 286.87 51.47L284.2 45.03Q286.93 43.66 290.06 42.86Q293.19 42.05 296.48 42.05Q300.69 42.05 303.55 43.54Q306.4 45.03 307.79 47.75Q309.19 50.48 309.19 54.08V73.11H301.81L301.19 71Q300.76 71.44 300.26 71.81Q297.47 73.92 292.94 73.92ZM295.73 67.47Q297.78 67.47 298.99 66.42Q300.2 65.36 300.2 63.75Q300.2 62.01 298.99 61.02Q297.78 60.03 295.73 60.03Q293.69 60.03 292.51 61.02Q291.33 62.01 291.33 63.75Q291.33 65.36 292.51 66.42Q293.69 67.47 295.73 67.47Z M327.9 73.86Q323.25 73.86 319.75 71.81Q316.25 69.76 314.33 66.17Q312.4 62.57 312.4 57.92Q312.4 53.27 314.33 49.71Q316.25 46.14 319.75 44.1Q323.25 42.05 327.9 42.05Q332.99 42.05 336.71 44.53Q340.43 47.01 342.04 51.23L333.86 54.88Q332.99 52.96 331.56 51.88Q330.14 50.79 327.97 50.79Q325.24 50.79 323.38 52.68Q321.52 54.57 321.52 57.92Q321.52 61.27 323.38 63.16Q325.24 65.05 327.97 65.05Q330.14 65.05 331.56 64Q332.99 62.94 333.86 61.02L342.04 64.62Q340.43 68.83 336.65 71.34Q332.86 73.86 327.9 73.86Z M358.46 73.61Q353.44 73.61 350.56 71.13Q347.67 68.65 347.67 63.01V51.1H342.96V42.79H347.55L349.41 35.48H356.73V42.79H363.48V51.1H356.73V61.02Q356.73 63.13 357.72 64.03Q358.71 64.93 360.32 64.93Q361.25 64.93 362.09 64.77Q362.93 64.62 363.48 64.43V72.92Q362.43 73.23 361.22 73.42Q360.01 73.61 358.46 73.61Z M382.2 73.86Q377.49 73.86 373.89 71.84Q370.3 69.83 368.31 66.23Q366.33 62.63 366.33 57.98Q366.33 53.27 368.31 49.68Q370.3 46.08 373.89 44.06Q377.49 42.05 382.2 42.05Q386.97 42.05 390.57 44.06Q394.17 46.08 396.18 49.68Q398.2 53.27 398.2 57.98Q398.2 62.63 396.18 66.23Q394.17 69.83 390.57 71.84Q386.97 73.86 382.2 73.86ZM382.2 65.05Q385.24 65.05 387.13 63.1Q389.02 61.15 389.02 57.98Q389.02 54.76 387.13 52.78Q385.24 50.79 382.2 50.79Q379.29 50.79 377.39 52.74Q375.5 54.7 375.5 57.92Q375.5 61.15 377.39 63.1Q379.29 65.05 382.2 65.05Z M408.29 42.79 409.16 45.96Q409.47 45.65 409.84 45.34Q411.21 43.97 413.1 43.01Q414.99 42.05 416.97 42.05Q417.97 42.05 418.77 42.17Q419.58 42.3 420.07 42.61V50.85H418.03Q414.06 50.85 411.83 52.09Q411.15 52.47 410.65 52.96V73.11H401.6V42.79Z" fill="#FAF8F4" />
      <path transform="translate(226.73 22.51) scale(0.5750)" d="M32 88V34A20 20 0 0 1 52 14H54M66 88V14H90M14 52H84" fill="none" stroke="#B87333" strokeWidth="13" />
    </svg>
  );
}

function RobotsMascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" className={className} role="img" aria-label="Los dos robots de TwoFFactor">
      <circle cx="100" cy="68" r="56" fill="#B87333" />
      <g stroke="#0B0C10" strokeWidth="3" strokeLinejoin="round">
        <rect x="40" y="74" width="9" height="28" rx="3" fill="#5B6670" />
        <rect x="151" y="74" width="9" height="28" rx="3" fill="#5B6670" />
        <path d="M70 16V28" fill="none" />
        <circle cx="70" cy="13" r="4" fill="#F3EEE4" />
        <rect x="50" y="28" width="40" height="34" rx="8" fill="#F3EEE4" />
        <rect x="66" y="62" width="8" height="7" rx="0" fill="#0B0C10" />
        <rect x="48" y="69" width="44" height="42" rx="6" fill="#0B0C10" />
        <rect x="56" y="111" width="8" height="18" rx="0" fill="#5B6670" />
        <rect x="76" y="111" width="8" height="18" rx="0" fill="#5B6670" />
        <rect x="50" y="128" width="16" height="8" rx="3" fill="#B87333" />
        <rect x="74" y="128" width="16" height="8" rx="3" fill="#B87333" />
        <rect x="108" y="22" width="44" height="40" rx="8" fill="#F3EEE4" />
        <rect x="104" y="36" width="5" height="12" rx="2" fill="#5B6670" />
        <rect x="151" y="36" width="5" height="12" rx="2" fill="#5B6670" />
        <rect x="126" y="62" width="8" height="7" rx="0" fill="#0B0C10" />
        <rect x="108" y="69" width="44" height="42" rx="6" fill="#0B0C10" />
        <rect x="116" y="111" width="8" height="18" rx="0" fill="#5B6670" />
        <rect x="136" y="111" width="8" height="18" rx="0" fill="#5B6670" />
        <rect x="110" y="128" width="16" height="8" rx="3" fill="#B87333" />
        <rect x="134" y="128" width="16" height="8" rx="3" fill="#B87333" />
        <rect x="86" y="84" width="28" height="7" rx="3" fill="#B87333" />
      </g>
      <circle cx="62" cy="44" r="6" fill="#0B0C10" />
      <circle cx="62" cy="44" r="2" fill="#B87333" />
      <rect x="68" y="52" width="14" height="3" rx="1.5" fill="#0B0C10" />
      <rect x="116" y="36" width="28" height="9" rx="4.5" fill="#0B0C10" />
      <rect x="124" y="52" width="14" height="3" rx="1.5" fill="#0B0C10" />
      <circle cx="70" cy="88" r="6" fill="#5B6670" />
      <circle cx="130" cy="88" r="6" fill="#5B6670" />
    </svg>
  );
}

export default function TallerPage() {
  return (
    <div style={{ position: "relative", fontFamily: "'Gabarito', sans-serif", color: "#0B0C10", background: "#FAF8F4" }}>
      <TallerContactModal />
      <RobotsGreeting />

      {/* ─────────────────────── NAVEGACIÓN ──────────────────── */}
      <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 5 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, paddingTop: 18, paddingBottom: 18 }}>
          <Link href="/" aria-label="TwoFFactor, volver al inicio" style={{ display: "block" }}>
            <TallerLogo />
          </Link>
          <nav aria-label="Taller" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 24px", fontSize: 16 }}>
            <a href="#pilares" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Cómo trabajamos</a>
            <a href="#para-quien" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Para quién</a>
            <a href="#nosotros" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Quiénes somos</a>
            <TallerHablemosBtn />
          </nav>
        </div>
      </header>

      {/* ─────────────────────── HERO ────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div id="inicio" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", paddingTop: 150, paddingBottom: 90, display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 40 }}>
            <div style={{ flex: "999 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#A9ABB1" }}>SOFTWARE A LA MEDIDA · HECHO EN COLOMBIA</div>
              <h1 style={{ margin: 0, fontFamily: "'Ubuntu Mono', monospace", fontWeight: 400, fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.02, letterSpacing: -1, color: "#FAF8F4" }}>
                Tu negocio no puede detenerse.<br />Tu software tampoco_
              </h1>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", marginTop: 8 }}>
                <a href="https://calendly.com/admin-twoffactor" target="_blank" rel="noopener noreferrer" style={{ background: "#8C5524", color: "#FFFFFF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "0 22px", minHeight: 48, borderRadius: 8, display: "inline-flex", alignItems: "center" }}>Agenda tu Discovery</a>
                <a href="https://wa.me/573113627287" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#FAF8F4", border: "2px solid #FAF8F4", textDecoration: "none", fontFamily: "inherit", fontWeight: 600, fontSize: 16, padding: "0 22px", minHeight: 48, borderRadius: 8, display: "inline-flex", alignItems: "center" }}>Escríbenos por WhatsApp</a>
              </div>
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: 360, margin: "0 auto" }}>
              <RobotsMascot />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── QUÉ HACEMOS ─────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#FAF8F4", padding: "88px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#5B6670" }}>QUÉ HACEMOS</div>
          <p style={{ margin: 0, fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 42px)", lineHeight: 1.28, letterSpacing: -0.5, color: "#0B0C10", maxWidth: 1050 }}>
            Convertimos la forma en que ya trabaja tu negocio en un sistema propio, lo ponemos en producción en semanas y{" "}
            <span style={{ background: "linear-gradient(#B87333,#B87333) no-repeat 0 100% / 100% 3px", paddingBottom: 2, color: "#8C5524" }}>nos quedamos cuidándolo</span>
            {" "}cada mes.
          </p>
        </div>
      </section>

      {/* ─────────────────── CÓMO TRABAJAMOS ────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div id="pilares" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", paddingTop: 80, paddingBottom: 72, display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
              <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#FAF8F4" }}>Cuatro pilares, un mismo equipo</h2>
              <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#A9ABB1" }}>CÓMO TRABAJAMOS</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", borderTop: "1px solid rgba(250,248,244,0.16)", borderLeft: "1px solid rgba(250,248,244,0.16)" }}>
              {([
                { num: "01", period: "SEMANA 1", name: "Entender", items: ["Sesiones de descubrimiento", "Mapa de tu operación", "Prototipo navegable", "Alcance y precio cerrados"] },
                { num: "02", period: "SEMANAS 2 A 5", name: "Construir", items: ["Módulos por entregas", "Avances visibles cada semana", "Pruebas con tu equipo", "Marcha blanca con datos reales"] },
                { num: "03", period: "CADA DÍA", name: "Operar", items: ["Nube administrada", "Copias de seguridad diarias", "Soporte de lunes a viernes", "Respuesta a fallas en 4 h"] },
                { num: "04", period: "CADA MES", name: "Mejorar", items: ["Horas de mejora incluidas", "Reunión de métricas", "Nuevas funciones", "Informe mensual"] },
              ] as const).map((p) => (
                <div key={p.num} style={{ borderRight: "1px solid rgba(250,248,244,0.16)", borderBottom: "1px solid rgba(250,248,244,0.16)", padding: "26px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#A9ABB1" }}>{p.num} · {p.period}</div>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 28, color: "#FAF8F4" }}>{p.name}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 16, color: "#D7D8DC" }}>
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 14, color: "#00FF41" }}>{">"} cada paso se aprueba contigo antes de seguir_</div>
          </div>
        </div>
      </section>

      {/* ───────────────────── GARANTÍAS ─────────────────────── */}
      <section id="garantias" style={{ background: "#FAF8F4", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#5B6670" }}>GARANTÍAS</div>
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#0B0C10" }}>No pedimos que nos creas. Lo dejamos por escrito.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: "1px solid #0B0C10" }}>
            {([
              { value: "99,5%", label: "Disponibilidad mensual" },
              { value: "4 h", label: "Respuesta ante una falla crítica" },
              { value: "15 min", label: "Máximo de datos que se podrían perder" },
              { value: "0", label: "Meses de permanencia" },
            ] as const).map((g) => (
              <div key={g.value} style={{ padding: "22px 20px 4px 0", borderRight: "1px solid #D5D2CC" }}>
                <div style={{ fontWeight: 700, fontSize: 52, lineHeight: 1, color: "#8C5524" }}>{g.value}</div>
                <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1, color: "#5B6670", marginTop: 10, textTransform: "uppercase" }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── PARA QUIÉN ──────────────────────── */}
      <section id="para-quien" style={{ background: "#FAF8F4", padding: "0 0 88px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#5B6670" }}>PARA QUIÉN</div>
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#0B0C10" }}>Negocios que no pueden detenerse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {([
              { sector: "RESTAURANTES", q: "¿Tienes un restaurante?", desc: "Pedidos, domicilios y caja sin perder ventas." },
              { sector: "INMOBILIARIAS", q: "¿Tienes una inmobiliaria?", desc: "Inventario, visitas y cierres en un solo lugar." },
              { sector: "SALUD", q: "¿Tienes una clínica o consultorio?", desc: "Citas, historiales y facturación sin papeles." },
              { sector: "MODA", q: "¿Tienes una tienda de moda?", desc: "Tienda en línea, inventario y clientes que vuelven." },
              { sector: "EDUCACIÓN", q: "¿Tienes una academia o instituto?", desc: "Matrículas, pagos y asistencia sin hojas de cálculo." },
              { sector: "BELLEZA Y BIENESTAR", q: "¿Tienes una barbería, spa o gimnasio?", desc: "Citas, membresías y clientes que regresan." },
            ] as const).map((c) => (
              <div key={c.sector} style={{ background: "#F3EEE4", borderRadius: 4, padding: "26px 24px", minHeight: 240, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#5B6670" }}>{c.sector}</div>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.15 }}>{c.q}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#5B6670" }}>{c.desc}</p>
                <a href="https://calendly.com/admin-twoffactor" target="_blank" rel="noopener noreferrer" style={{ marginTop: "auto", fontFamily: "'Ubuntu Mono', monospace", fontSize: 14, color: "#8C5524", minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>&gt; así lo resolvemos_</a>
              </div>
            ))}
            <div style={{ background: "#0B0C10", border: "1px solid #B87333", borderRadius: 4, padding: "26px 24px", minHeight: 240, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#B87333" }}>TU SECTOR</div>
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.15, color: "#FAF8F4" }}>¿No está tu sector aquí?</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#A9ABB1" }}>Si tu negocio no puede parar, podemos construir la solución. Cuéntanos.</p>
              <TallerHablemosBtn style={{ marginTop: "auto", alignSelf: "flex-start", fontSize: 14, minHeight: 44, padding: "0 18px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── QUIÉNES SOMOS ───────────────────── */}
      <section id="nosotros" style={{ background: "#F3EEE4", padding: "88px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 40 }}>
          <div style={{ flex: "1 1 340px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, letterSpacing: 1.5, color: "#5B6670" }}>QUIÉNES SOMOS</div>
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#0B0C10" }}>Dos mentes, un mismo factor</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#5B6670" }}>Cada F de TwoFFactor es uno de nosotros. Somos los que te atienden en la primera reunión, los que construyen tu sistema y los que contestan cuando algo pasa.</p>
            <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 14, color: "#436C84" }}>&gt; sin intermediarios_</div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, 286px)", justifyContent: "center", gap: 20, alignSelf: "center" }}>
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, background: "#FFFFFF", border: "1px solid #E2DED6", borderRadius: 12, padding: 14 }}>
              <div style={{ position: "relative", width: 256, maxWidth: "100%", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
                <Image src={felipePhoto} alt="Felipe Tangarife, cofundador de TwoFFactor" fill sizes="256px" style={{ objectFit: "cover" }} placeholder="blur" />
              </div>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 19, color: "#0B0C10" }}>Felipe Tangarife</span>
                <span style={{ fontSize: 15, color: "#5B6670" }}>CEO · COO</span>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#5B6670" }}>Como director de Producto y Experiencia, lidera en TwoFFactor el frontend y la estrategia visual. Transforma procesos de negocio complejos en interfaces intuitivas, garantizando que tu equipo adopte la tecnología sin fricciones.</p>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: 2 }}>
                  <a href="https://wa.me/573173780801" target="_blank" rel="noopener noreferrer" style={{ color: "#8C5524", fontSize: 15, fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>WhatsApp</a>
                  <a href="https://www.linkedin.com/in/felipetangarife7/" target="_blank" rel="noopener noreferrer" style={{ color: "#8C5524", fontSize: 15, fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>LinkedIn</a>
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, background: "#FFFFFF", border: "1px solid #E2DED6", borderRadius: 12, padding: 14 }}>
              <div style={{ position: "relative", width: 256, maxWidth: "100%", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden" }}>
                <Image src={juanPabloPhoto} alt="Juan Pablo Hurtado, cofundador de TwoFFactor" fill sizes="256px" style={{ objectFit: "cover" }} placeholder="blur" />
              </div>
              <figcaption style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 19, color: "#0B0C10" }}>Juan Pablo Hurtado</span>
                <span style={{ fontSize: 15, color: "#5B6670" }}>CEO · CTO</span>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#5B6670" }}>Como director de Arquitectura y Seguridad, lidera en TwoFFactor el backend y la infraestructura en la nube. Diseña los cimientos, bases de datos y protocolos de seguridad que hacen que tu plataforma sea resiliente y escalable.</p>
                <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginTop: 2 }}>
                  <a href="https://wa.me/573113627287" target="_blank" rel="noopener noreferrer" style={{ color: "#8C5524", fontSize: 15, fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>WhatsApp</a>
                  <a href="https://www.linkedin.com/in/juanpablohz/" target="_blank" rel="noopener noreferrer" style={{ color: "#8C5524", fontSize: 15, fontWeight: 600, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>LinkedIn</a>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ──────────────────── CTA FINAL ──────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box", paddingTop: 88, display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
              <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: "clamp(36px, 5.4vw, 68px)", lineHeight: 1.05, color: "#FAF8F4" }}>
                Construyamos algo<br />que no se apague_
              </div>
              <TallerHablemosBtn />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: "1px solid rgba(250,248,244,0.16)", borderLeft: "1px solid rgba(250,248,244,0.16)" }}>
              <div style={{ borderRight: "1px solid rgba(250,248,244,0.16)", borderBottom: "1px solid rgba(250,248,244,0.16)", padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#A9ABB1" }}>NAVEGA</div>
                <a href="#pilares" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>Cómo trabajamos</a>
                <a href="#para-quien" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>Para quién</a>
                <a href="#nosotros" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>Quiénes somos</a>
              </div>
              <div style={{ borderRight: "1px solid rgba(250,248,244,0.16)", borderBottom: "1px solid rgba(250,248,244,0.16)", padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#A9ABB1" }}>CONTACTO</div>
                <a href="https://calendly.com/admin-twoffactor" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>Agenda tu Discovery</a>
                <a href="mailto:admin@twoffactor.com" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>admin@twoffactor.com</a>
                <a href="https://wa.me/573113627287" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>+57 311 362 7287</a>
              </div>
              <div style={{ borderRight: "1px solid rgba(250,248,244,0.16)", borderBottom: "1px solid rgba(250,248,244,0.16)", padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: "'Ubuntu Mono', monospace", fontSize: 12, letterSpacing: 1.5, color: "#A9ABB1" }}>SÍGUENOS</div>
                <a href="https://www.linkedin.com/company/146698937/" target="_blank" rel="noopener noreferrer" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>LinkedIn</a>
                <a href="https://www.instagram.com/twoffactor/" target="_blank" rel="noopener noreferrer" style={{ color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" }}>Instagram</a>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, paddingBottom: 28, fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, color: "#A9ABB1" }}>
              <span>&lt; WEB: twoffactor.com &gt; &lt; LOC: COL &gt;</span>
              <span>© {new Date().getFullYear()} TwoFFactor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enlace al Laboratorio */}
      <div style={{ background: "#0B0C10", borderTop: "1px solid rgba(250,248,244,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", boxSizing: "border-box" }}>
          <Link
            href="/laboratorio"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid rgba(250,248,244,0.15)", padding: "10px 20px", fontFamily: "'Ubuntu Mono', monospace", fontSize: 13, fontWeight: 600, color: "#A9ABB1", textDecoration: "none" }}
          >
            Laboratorio
          </Link>
        </div>
      </div>
    </div>
  );
}
