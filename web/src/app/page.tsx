import Image from "next/image";
import Link from "next/link";
import { TallerContactModal } from "@/components/TallerContactModal";
import { RobotsGreeting } from "@/components/RobotsGreeting";
import { TallerHablemosBtn } from "@/components/TallerHablemosBtn";
import { ScrollToTop } from "@/components/ScrollToTop";
import { TallerMobileMenu } from "@/components/TallerMobileMenu";
import felipePhoto from "../../public/images/felipe-tangarife.jpg";
import juanPabloPhoto from "../../public/images/juan-pablo-hurtado.jpg";

function Grano() {
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.08 }}
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
    <svg viewBox="0 0 421.13 104.00" width="180" height="44.5" role="img" aria-label="TwoFFactor" className="taller-logo" style={{ display: "block" }}>
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

const CALENDLY = "https://calendly.com/admin-twoffactor";
const WHATSAPP = "https://wa.me/573113627287";

const MONO = "'Ubuntu Mono', monospace";
const LINE_DARK = "1px solid rgba(250,248,244,0.16)";
const LINE_LIGHT = "1px solid rgba(11,12,16,0.14)";

const eyebrowDark: React.CSSProperties = { fontFamily: MONO, fontSize: 13, letterSpacing: 1.5, color: "#A9ABB1" };
const eyebrowLight: React.CSSProperties = { fontFamily: MONO, fontSize: 13, letterSpacing: 1.5, color: "#5B6670" };
const h2Light: React.CSSProperties = { margin: 0, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15, letterSpacing: -0.5, color: "#0B0C10" };
const container: React.CSSProperties = { maxWidth: 1200, margin: "0 auto", padding: "0 24px", boxSizing: "border-box" };
const primaryBtn: React.CSSProperties = { background: "#8C5524", color: "#FFFFFF", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "0 22px", minHeight: 48, borderRadius: 8, display: "inline-flex", alignItems: "center" };
const lightCard: React.CSSProperties = { background: "#F3EEE4", borderRadius: 4, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 12 };
const footerLink: React.CSSProperties = { color: "#FAF8F4", textDecoration: "none", fontSize: 16, minHeight: 32, display: "inline-flex", alignItems: "center" };

function AgendaBtn({ style }: { style?: React.CSSProperties }) {
  return (
    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ ...primaryBtn, ...style }}>
      Agenda una reunión
    </a>
  );
}

const PASOS = [
  { num: "01", period: "SEMANA 1", name: "Entender", items: ["Reuniones para entender tu negocio", "Mapa de cómo trabajas hoy", "Prototipo que puedes probar y comentar", "Alcance y precio cerrados"] },
  { num: "02", period: "SEMANAS 2 A 5", name: "Construir", items: ["Entregas por partes", "Avances visibles cada semana", "Pruebas con tu equipo", "Prueba con tus datos reales antes de lanzar"] },
  { num: "03", period: "CADA DÍA", name: "Operar", items: ["Tu sistema alojado y cuidado por nosotros", "Copias de seguridad diarias", "Soporte de lunes a viernes", "Si algo grave falla, respondemos en 40 minutos"] },
  { num: "04", period: "CADA MES", name: "Mejorar", items: ["Horas de mejora incluidas", "Reunión mensual para revisar cómo va el negocio", "Nuevas funciones", "Informe mensual"] },
] as const;

const MONO_SVG = "Ubuntu Mono, monospace";

function GraficoDisponibilidad() {
  return (
    <svg viewBox="0 0 240 34" width="100%" role="img" aria-label="30 días del mes, todos en operación salvo una franja mínima" style={{ display: "block" }}>
      <g fill="#B87333">
        {Array.from({ length: 29 }, (_, i) => (
          <rect key={i} x={i * 8} y="0" width="6" height="22" rx="1" />
        ))}
      </g>
      <rect x="232" y="0" width="6" height="22" rx="1" fill="#FAF8F4" fillOpacity="0.18" />
      <text x="0" y="33" fontFamily={MONO_SVG} fontSize="9" fill="#A9ABB1">DÍA 1</text>
      <text x="238" y="33" textAnchor="end" fontFamily={MONO_SVG} fontSize="9" fill="#A9ABB1">DÍA 30</text>
    </svg>
  );
}

function GraficoRespuesta() {
  return (
    <svg viewBox="0 0 240 48" width="100%" role="img" aria-label="Línea de tiempo: falla en la hora 0, respuesta antes de 40 minutos" style={{ display: "block" }}>
      <line x1="6" y1="14" x2="234" y2="14" stroke="#B87333" strokeWidth="4" strokeLinecap="round" />
      <g stroke="#FAF8F4" strokeOpacity="0.4">
        <line x1="63" y1="10" x2="63" y2="18" />
        <line x1="120" y1="10" x2="120" y2="18" />
        <line x1="177" y1="10" x2="177" y2="18" />
      </g>
      <circle cx="6" cy="14" r="6" fill="#0B0C10" stroke="#B87333" strokeWidth="3" />
      <circle cx="234" cy="14" r="6" fill="#B87333" />
      <text x="0" y="40" fontFamily={MONO_SVG} fontSize="9" fill="#A9ABB1">FALLA</text>
      <text x="240" y="40" textAnchor="end" fontFamily={MONO_SVG} fontSize="9" fill="#FAF8F4">RESPUESTA · 40 MIN</text>
    </svg>
  );
}

function GraficoDatos() {
  return (
    <svg viewBox="0 0 240 48" width="100%" role="img" aria-label="Línea de tiempo de respaldos, solo los últimos 15 minutos antes del fallo quedan sin respaldo" style={{ display: "block" }}>
      <g fill="#B87333">
        {Array.from({ length: 12 }, (_, i) => (
          <circle key={i} cx={6 + i * 16} cy="14" r="3" />
        ))}
      </g>
      <rect x="190" y="7" width="38" height="14" rx="3" fill="none" stroke="#FAF8F4" strokeOpacity="0.6" strokeDasharray="3 3" />
      <path d="M234 6 L234 22 M229 11 L239 17 M239 11 L229 17" stroke="#FAF8F4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="0" y="40" fontFamily={MONO_SVG} fontSize="9" fill="#A9ABB1">RESPALDADO</text>
      <text x="240" y="40" textAnchor="end" fontFamily={MONO_SVG} fontSize="9" fill="#FAF8F4">MÁX. 15 MIN</text>
    </svg>
  );
}

function GraficoLibertad() {
  return (
    <svg viewBox="0 0 240 48" width="100%" role="img" aria-label="Meses consecutivos con salida libre en cualquier punto" style={{ display: "block" }}>
      <g fill="none" stroke="#B87333" strokeWidth="2">
        {[2, 40, 78, 116].map((x) => <rect key={x} x={x} y="3" width="30" height="22" rx="3" />)}
      </g>
      <g stroke="#B87333" strokeWidth="2">
        <line x1="32" y1="14" x2="40" y2="14" />
        <line x1="70" y1="14" x2="78" y2="14" />
        <line x1="108" y1="14" x2="116" y2="14" />
      </g>
      <path d="M146 14 H214 M206 7 L214 14 L206 21" stroke="#FAF8F4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 5" />
      <rect x="220" y="3" width="18" height="22" rx="2" fill="none" stroke="#FAF8F4" strokeWidth="2" />
      <circle cx="233" cy="14" r="1.6" fill="#FAF8F4" />
      <text x="0" y="40" fontFamily={MONO_SVG} fontSize="9" fill="#A9ABB1">MES A MES</text>
      <text x="240" y="40" textAnchor="end" fontFamily={MONO_SVG} fontSize="9" fill="#FAF8F4">SALES CUANDO QUIERAS</text>
    </svg>
  );
}

const GARANTIAS = [
  { tag: "01 · DISPONIBILIDAD", value: "99,5%", text: "Tu sistema funcionando el 99,5% del mes", chart: <GraficoDisponibilidad /> },
  { tag: "02 · RESPUESTA", value: "40 min", text: "Si algo grave falla, te respondemos en un máximo de 40 minutos", chart: <GraficoRespuesta /> },
  { tag: "03 · TUS DATOS", value: "15 min", text: "Si pasa lo peor, como máximo se pierden 15 minutos de información", chart: <GraficoDatos /> },
  { tag: "04 · LIBERTAD", value: "0", text: "Sin permanencia: te quedas porque funciona, no por contrato", chart: <GraficoLibertad /> },
];

const DIFERENCIAS = [
  "No te entregamos herramientas, te entregamos resultados.",
  "Vamos a tu negocio y miramos cómo trabajas.",
  "Los mismos que te escuchan son los que construyen.",
];

const SECTORES = [
  { sector: "RESTAURANTES", q: "¿Tienes un restaurante?", desc: "Pedidos por la web y WhatsApp, domicilios con ruta y estados, y caja que cuadra al cierre del día." },
  { sector: "INMOBILIARIAS", q: "¿Tienes una inmobiliaria?", desc: "Pagos conciliados con el banco, liquidación a propietarios y contratos con alertas de vencimiento." },
  { sector: "SALUD", q: "¿Tienes una clínica o consultorio?", desc: "Agenda con solicitudes en línea, historia clínica digital e inventario con control de lotes." },
  { sector: "MODA", q: "¿Tienes una tienda de moda?", desc: "Tienda en línea, inventario y clientes que vuelven." },
  { sector: "BELLEZA Y BIENESTAR", q: "¿Tienes una barbería, spa o gimnasio?", desc: "Agenda por paquetes o membresías, recordatorios por WhatsApp y cobros al día." },
] as const;

const FORMAS = [
  { num: "FORMA 01", name: "Proyecto cerrado", ideal: "Ideal si ya sabes qué necesitas.", items: ["Alcance y fecha cerrados por escrito", "Entregas por partes", "Cierre con acta de recibo"], pago: "PAGO · POR HITOS" },
  { num: "FORMA 02", name: "Bolsa de horas", ideal: "Ideal si el alcance puede cambiar sobre la marcha.", items: ["Un bloque de horas para construir o ajustar", "Reporte de en qué se usó cada hora"], pago: "PAGO · BLOQUE PREPAGADO" },
  { num: "FORMA 03", name: "Administración mensual", ideal: "Ideal si quieres que alguien sostenga tu sistema en el tiempo.", items: ["Nube y copias de seguridad", "Soporte de lunes a viernes", "Horas de mejora e informe mensual"], pago: "PAGO · MENSUALIDAD, SIN PERMANENCIA" },
] as const;

const PREGUNTAS = [
  { q: "¿Qué pasa cuando el sistema ya está listo?", a: "Seguimos contigo. Con la administración mensual alojamos y cuidamos tu sistema, hacemos copias de seguridad cada día, te damos soporte de lunes a viernes y cada mes nos reunimos para mejorarlo. Sin permanencia: te quedas porque funciona.", destacada: true },
  { q: "¿Cuánto cuesta?", destacada: false, a: "Depende del alcance. Después de la primera reunión te damos alcance y precio cerrados, por escrito." },
  { q: "¿Cuánto tarda?", destacada: false, a: "La primera semana la usamos para entender tu negocio. Entre la semana 2 y la 5 construimos, con avances visibles cada semana. El plazo exacto depende del alcance." },
  { q: "¿Y si algo falla?", destacada: false, a: "Hacemos copias de seguridad diarias y damos soporte de lunes a viernes. Ante una falla crítica respondemos en un máximo de 40 minutos." },
  { q: "¿Necesito saber de tecnología?", a: "No. Te mostramos un prototipo antes de construir y lo probamos contigo antes de lanzarlo.", destacada: false },
] as const;

const EQUIPO = [
  {
    name: "Felipe Tangarife",
    role: "COFUNDADOR · PRODUCTO Y EXPERIENCIA",
    photo: felipePhoto,
    bio: "Se sienta contigo a entender cómo trabaja tu negocio y lo convierte en pantallas claras y fáciles de usar, para que tu equipo adopte el sistema desde el primer día.",
    whatsapp: "https://wa.me/573173780801",
    linkedin: "https://www.linkedin.com/in/felipetangarife7/",
  },
  {
    name: "Juan Pablo Hurtado",
    role: "COFUNDADOR · ARQUITECTURA Y SEGURIDAD",
    photo: juanPabloPhoto,
    bio: "Se encarga de que tu sistema no se caiga, de que tus datos estén respaldados y protegidos, y de que todo siga funcionando a medida que tu negocio crece.",
    whatsapp: "https://wa.me/573113627287",
    linkedin: "https://www.linkedin.com/in/juanpablohz/",
  },
];

export default function TallerPage() {
  return (
    <div className="taller-page" style={{ position: "relative", fontFamily: "'Gabarito', sans-serif", color: "#0B0C10", background: "#FAF8F4" }}>
      <TallerContactModal />
      <RobotsGreeting />
      <ScrollToTop />

      {/* ─────────────────────── NAVEGACIÓN ──────────────────── */}
      <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 5 }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, paddingTop: 18, paddingBottom: 18 }}>
          <Link href="/" aria-label="TwoFFactor, volver al inicio" style={{ display: "block" }}>
            <TallerLogo />
          </Link>
          <nav aria-label="Taller" className="taller-nav" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 24px", fontSize: 16 }}>
            <a href="#pilares" className="taller-nav-link" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Cómo trabajamos</a>
            <a href="#para-quien" className="taller-nav-link" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Para quién</a>
            <a href="#nosotros" className="taller-nav-link" style={{ color: "#FAF8F4", textDecoration: "none", minHeight: 44, display: "inline-flex", alignItems: "center" }}>Quiénes somos</a>
            <TallerHablemosBtn className="taller-nav-cta" />
            <TallerMobileMenu />
          </nav>
        </div>
      </header>

      {/* ─────────────────────── HERO ────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div id="inicio" style={{ ...container, paddingTop: 150, paddingBottom: 90, display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 40 }}>
            <div style={{ flex: "999 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={eyebrowDark}>SOFTWARE A LA MEDIDA · HECHO EN COLOMBIA</div>
              <h1 style={{ margin: 0, fontFamily: MONO, fontWeight: 400, fontSize: "clamp(34px, 4.2vw, 54px)", lineHeight: 1.05, letterSpacing: -1, color: "#FAF8F4" }}>
                Software a la medida<br />para tu negocio.<br />Funcionando en semanas_
              </h1>
              <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: "#D7D8DC", maxWidth: 640 }}>
                Convertimos la forma en que ya trabaja tu negocio (pedidos, citas, inventario, caja) en un sistema propio, lo ponemos a funcionar en semanas y nos quedamos cuidándolo cada mes.
              </p>
              <div style={{ fontFamily: MONO, fontSize: 18, color: "#B87333" }}>Tu negocio no puede detenerse. Tu software tampoco_</div>
              <div style={{ borderLeft: "3px solid #B87333", padding: "2px 0 2px 16px", fontSize: 18, lineHeight: 1.45, fontWeight: 500, color: "#FAF8F4", maxWidth: 600 }}>
                Dos ingenieros que se sientan contigo, construyen tu sistema y siguen a tu lado cuando ya está funcionando.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", marginTop: 8 }}>
                <AgendaBtn />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#FAF8F4", border: "2px solid #FAF8F4", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "0 22px", minHeight: 48, boxSizing: "border-box", borderRadius: 8, display: "inline-flex", alignItems: "center" }}>Escríbenos por WhatsApp</a>
              </div>
              <div style={{ fontSize: 15, color: "#A9ABB1" }}>Sin permanencia · Alcance y precio cerrados · Soporte de lunes a viernes</div>
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: 360, margin: "0 auto" }}>
              <RobotsMascot />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CÓMO TRABAJAMOS ────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div id="pilares" style={{ ...container, paddingTop: 80, paddingBottom: 72, display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={eyebrowDark}>CÓMO TRABAJAMOS</div>
                <h2 style={{ ...h2Light, color: "#FAF8F4" }}>No te entregamos y desaparecemos</h2>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#D7D8DC", maxWidth: 680 }}>Cuatro pasos con el mismo equipo: te acompañamos antes, durante y después de lanzar tu sistema.</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", borderTop: LINE_DARK, borderLeft: LINE_DARK }}>
              {PASOS.map((p) => (
                <div key={p.num} style={{ borderRight: LINE_DARK, borderBottom: LINE_DARK, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ ...eyebrowDark, fontSize: 12 }}>{p.num} · {p.period}</div>
                  <h3 style={{ margin: 0, fontWeight: 700, fontSize: 28, color: "#FAF8F4" }}>{p.name}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 16, lineHeight: 1.4, color: "#D7D8DC" }}>
                    {p.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: MONO, fontSize: 16, color: "#B87333" }}>{">"} cada paso se aprueba contigo antes de seguir_</div>
          </div>
        </div>
      </section>

      {/* ───────────────────── GARANTÍAS ─────────────────────── */}
      <section id="garantias" style={{ background: "#FAF8F4", padding: "64px 0" }}>
        <div style={{ ...container, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
              <div style={eyebrowLight}>GARANTÍAS</div>
              <h2 style={{ margin: 0, fontWeight: 700, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.08, letterSpacing: -1, color: "#0B0C10" }}>
                No pedimos que nos creas.<br />Lo dejamos{" "}
                <span style={{ background: "linear-gradient(#B87333,#B87333) no-repeat 0 100% / 100% 4px", paddingBottom: 2, color: "#8C5524" }}>por escrito</span>.
              </h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#5B6670" }}>Cuatro compromisos que se pueden medir. Van en el contrato, no en el folleto.</p>
            </div>
          </div>

          <div style={{ background: "#0B0C10", borderRadius: 6, overflow: "hidden", position: "relative" }}>
            <Grano />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              {GARANTIAS.map((g) => (
                <div key={g.tag} style={{ padding: "22px 20px 20px", borderRight: LINE_DARK, borderBottom: LINE_DARK, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ ...eyebrowDark, fontSize: 12 }}>{g.tag}</div>
                  <div style={{ fontWeight: 700, fontSize: 56, lineHeight: 0.95, letterSpacing: -1.5, color: "#B87333" }}>{g.value}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.35, fontWeight: 500, color: "#FAF8F4" }}>{g.text}</div>
                  <div style={{ marginTop: "auto", paddingTop: 6 }}>{g.chart}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── LO QUE NOS HACE DISTINTOS ───────── */}
      <section style={{ background: "#F3EEE4" }}>
        <div style={{ ...container, paddingTop: 88, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 36 }}>
          <div style={eyebrowLight}>LO QUE NOS HACE DISTINTOS</div>
          <p style={{ margin: 0, fontFamily: MONO, fontWeight: 400, fontSize: "clamp(28px, 4.2vw, 54px)", lineHeight: 1.12, letterSpacing: -1, color: "#0B0C10", maxWidth: 1000 }}>
            Cualquiera puede escribir código. Pocos se sientan contigo a entender cómo trabaja tu negocio. <span style={{ color: "#8C5524" }}>Nosotros sí_</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", borderTop: LINE_LIGHT, borderLeft: LINE_LIGHT }}>
            {DIFERENCIAS.map((d, i) => (
              <div key={d} style={{ borderRight: LINE_LIGHT, borderBottom: LINE_LIGHT, padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: 1.5, color: "#8C5524" }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: "#0B0C10" }}>{d}</div>
              </div>
            ))}
          </div>
          <div>
            <AgendaBtn />
          </div>
        </div>
      </section>

      {/* ─────────────────── PARA QUIÉN ──────────────────────── */}
      <section id="para-quien" style={{ background: "#FAF8F4", padding: "80px 0" }}>
        <div style={{ ...container, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={eyebrowLight}>PARA QUIÉN</div>
          <h2 style={h2Light}>Negocios que no pueden detenerse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 12 }}>
            {SECTORES.map((c) => (
              <div key={c.sector} style={lightCard}>
                <div style={{ ...eyebrowLight, fontSize: 12 }}>{c.sector}</div>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.15 }}>{c.q}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#5B6670" }}>{c.desc}</p>
              </div>
            ))}
            <div style={{ ...lightCard, background: "#0B0C10" }}>
              <div style={{ ...eyebrowDark, fontSize: 12 }}>TU SECTOR</div>
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.15, color: "#FAF8F4" }}>¿No está tu sector aquí?</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#D7D8DC" }}>Pedidos, citas, inventario, caja, reportes o páginas web: si tu negocio lo necesita y no puede parar, lo construimos. Cuéntanos.</p>
              <TallerHablemosBtn style={{ marginTop: "auto", alignSelf: "flex-start", fontSize: 14, minHeight: 44, padding: "0 18px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CÓMO CONTRATAR ──────────────────── */}
      <section id="contratar" style={{ background: "#FAF8F4", padding: "0 0 80px" }}>
        <div style={{ ...container, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={eyebrowLight}>CÓMO CONTRATAR</div>
          <h2 style={h2Light}>Tú eliges cómo trabajamos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 12 }}>
            {FORMAS.map((f) => (
              <div key={f.num} style={lightCard}>
                <div style={{ ...eyebrowLight, fontSize: 12 }}>{f.num}</div>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.15 }}>{f.name}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#5B6670" }}>{f.ideal}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 16, lineHeight: 1.4, color: "#0B0C10" }}>
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div style={{ marginTop: "auto", fontFamily: MONO, fontSize: 13, letterSpacing: 1.5, color: "#8C5524" }}>{f.pago}</div>
              </div>
            ))}
          </div>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#5B6670", maxWidth: 820 }}>
            Cualquier forma se puede combinar con la administración mensual, para que nunca te quedes solo con tu sistema. Después de la primera reunión te damos alcance y precio por escrito.
          </p>
        </div>
      </section>

      {/* ─────────────────── QUIÉNES SOMOS ───────────────────── */}
      <section id="nosotros" style={{ background: "#F3EEE4", padding: "88px 0" }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 40 }}>
          <div style={{ flex: "1 1 340px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={eyebrowLight}>QUIÉNES SOMOS</div>
            <h2 style={h2Light}>Ingenieros que se sientan contigo</h2>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5, fontWeight: 500, color: "#0B0C10" }}>Somos dos ingenieros colombianos que diseñan, construyen y cuidan tu sistema.</p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#5B6670" }}>Los que te atienden en la primera reunión son los mismos que construyen tu sistema y los que contestan cuando algo pasa. No hay vendedores de por medio.</p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(286px, 100%), 1fr))", justifyContent: "center", gap: 20, alignSelf: "center" }}>
            {EQUIPO.map((m) => (
              <figure key={m.name} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 14, background: "#FFFFFF", border: "1px solid #E2DED6", borderRadius: 12, padding: 14 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden", background: "#E2DED6" }}>
                  <Image src={m.photo} alt={`${m.name}, cofundador de TwoFFactor`} fill sizes="(max-width: 640px) 90vw, 400px" style={{ objectFit: "cover", objectPosition: "center top" }} placeholder="blur" />
                </div>
                <figcaption style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 24, lineHeight: 1.15, color: "#0B0C10" }}>{m.name}</span>
                  <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: 1, color: "#5B6670" }}>{m.role}</span>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#5B6670" }}>{m.bio}</p>
                  <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px" }}>
                    <a href={m.whatsapp} target="_blank" rel="noopener noreferrer" style={{ fontFamily: MONO, color: "#8C5524", fontSize: 14, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>WhatsApp</a>
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: MONO, color: "#8C5524", fontSize: 14, minHeight: 44, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>LinkedIn</a>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── PREGUNTAS FRECUENTES ────────────── */}
      <section id="preguntas" style={{ background: "#FAF8F4", padding: "80px 0" }}>
        <div style={{ ...container, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={eyebrowLight}>PREGUNTAS FRECUENTES</div>
          <h2 style={h2Light}>Lo que nos suelen preguntar</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", gap: 12 }}>
            {PREGUNTAS.map((p) => (
              <div key={p.q} style={{ ...lightCard, padding: 24, gap: 10, ...(p.destacada ? { gridColumn: "1 / -1", background: "#0B0C10" } : {}) }}>
                <h3 style={{ margin: 0, fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: p.destacada ? "#FAF8F4" : "#0B0C10" }}>{p.q}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: p.destacada ? "#D7D8DC" : "#5B6670", maxWidth: 860 }}>{p.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CTA FINAL ──────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B0C10" }}>
        <Grano />
        <div style={{ position: "relative" }}>
          <div style={{ ...container, paddingTop: 88, display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ fontFamily: MONO, fontSize: "clamp(36px, 5.4vw, 68px)", lineHeight: 1.05, color: "#FAF8F4" }}>
                  Construyamos algo<br />que no se apague_
                </div>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: "#D7D8DC", maxWidth: 560 }}>Cuéntanos cómo trabaja tu negocio hoy y te decimos qué podemos construir.</p>
              </div>
              <AgendaBtn />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", borderTop: LINE_DARK, borderLeft: LINE_DARK }}>
              <div style={{ borderRight: LINE_DARK, borderBottom: LINE_DARK, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ ...eyebrowDark, fontSize: 12 }}>NAVEGA</div>
                <a href="#pilares" style={footerLink}>Cómo trabajamos</a>
                <a href="#para-quien" style={footerLink}>Para quién</a>
                <a href="#contratar" style={footerLink}>Cómo contratar</a>
                <a href="#preguntas" style={footerLink}>Preguntas frecuentes</a>
                <a href="#nosotros" style={footerLink}>Quiénes somos</a>
              </div>
              <div style={{ borderRight: LINE_DARK, borderBottom: LINE_DARK, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ ...eyebrowDark, fontSize: 12 }}>CONTACTO</div>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={footerLink}>Agenda una reunión</a>
                <a href="mailto:admin@twoffactor.com" style={footerLink}>admin@twoffactor.com</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={footerLink}>+57 311 362 7287</a>
              </div>
              <div style={{ borderRight: LINE_DARK, borderBottom: LINE_DARK, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ ...eyebrowDark, fontSize: 12 }}>SÍGUENOS</div>
                <a href="https://www.linkedin.com/company/146698937/" target="_blank" rel="noopener noreferrer" style={footerLink}>LinkedIn</a>
                <a href="https://www.instagram.com/twoffactor/" target="_blank" rel="noopener noreferrer" style={footerLink}>Instagram</a>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, paddingBottom: 28, fontFamily: MONO, fontSize: 13, letterSpacing: 1.5, color: "#A9ABB1" }}>
              <span>&lt; WEB: twoffactor.com &gt; &lt; LOC: COL &gt;</span>
              <span>© {new Date().getFullYear()} TwoFFactor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enlace al Laboratorio */}
      <div style={{ background: "#0B0C10", borderTop: "1px solid rgba(250,248,244,0.08)" }}>
        <div style={{ ...container, paddingTop: 20, paddingBottom: 20 }}>
          <Link
            href="/laboratorio"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid rgba(250,248,244,0.15)", padding: "10px 20px", fontFamily: MONO, fontSize: 13, fontWeight: 600, color: "#A9ABB1", textDecoration: "none" }}
          >
            Laboratorio
          </Link>
        </div>
      </div>
    </div>
  );
}
