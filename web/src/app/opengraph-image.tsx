import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ROBOTS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
  <circle cx="100" cy="68" r="56" fill="#B87333"/>
  <g stroke="#0B0C10" stroke-width="3" stroke-linejoin="round">
    <rect x="40" y="74" width="9" height="28" rx="3" fill="#5B6670"/>
    <rect x="151" y="74" width="9" height="28" rx="3" fill="#5B6670"/>
    <path d="M70 16V28" fill="none"/>
    <circle cx="70" cy="13" r="4" fill="#F3EEE4"/>
    <rect x="50" y="28" width="40" height="34" rx="8" fill="#F3EEE4"/>
    <rect x="66" y="62" width="8" height="7" fill="#0B0C10"/>
    <rect x="48" y="69" width="44" height="42" rx="6" fill="#0B0C10"/>
    <rect x="56" y="111" width="8" height="18" fill="#5B6670"/>
    <rect x="76" y="111" width="8" height="18" fill="#5B6670"/>
    <rect x="50" y="128" width="16" height="8" rx="3" fill="#B87333"/>
    <rect x="74" y="128" width="16" height="8" rx="3" fill="#B87333"/>
    <rect x="108" y="22" width="44" height="40" rx="8" fill="#F3EEE4"/>
    <rect x="104" y="36" width="5" height="12" rx="2" fill="#5B6670"/>
    <rect x="151" y="36" width="5" height="12" rx="2" fill="#5B6670"/>
    <rect x="126" y="62" width="8" height="7" fill="#0B0C10"/>
    <rect x="108" y="69" width="44" height="42" rx="6" fill="#0B0C10"/>
    <rect x="116" y="111" width="8" height="18" fill="#5B6670"/>
    <rect x="136" y="111" width="8" height="18" fill="#5B6670"/>
    <rect x="110" y="128" width="16" height="8" rx="3" fill="#B87333"/>
    <rect x="134" y="128" width="16" height="8" rx="3" fill="#B87333"/>
    <rect x="86" y="84" width="28" height="7" rx="3" fill="#B87333"/>
  </g>
  <circle cx="62" cy="44" r="6" fill="#0B0C10"/>
  <circle cx="62" cy="44" r="2" fill="#B87333"/>
  <rect x="68" y="52" width="14" height="3" rx="1.5" fill="#0B0C10"/>
  <rect x="116" y="36" width="28" height="9" rx="4.5" fill="#0B0C10"/>
  <rect x="124" y="52" width="14" height="3" rx="1.5" fill="#0B0C10"/>
  <circle cx="70" cy="88" r="6" fill="#5B6670"/>
  <circle cx="130" cy="88" r="6" fill="#5B6670"/>
</svg>`;

const robotsDataUri = `data:image/svg+xml;base64,${Buffer.from(ROBOTS_SVG).toString("base64")}`;

// Vista previa al compartir (WhatsApp, LinkedIn, etc.): solo el logo de los
// robots, centrado sobre el negro de la marca. WhatsApp a veces recorta la
// imagen a un cuadrado centrado: el dibujo útil de los robots mide ~480 px de
// ancho (el SVG tiene márgenes), así que se ve completo también en ese caso.
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0B0C10",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={robotsDataUri} width={800} height={600} alt="" />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
