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
          padding: "60px 80px",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "#B87333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 800,
                color: "#0B0C10",
                fontFamily: "monospace",
                letterSpacing: -1,
              }}
            >
              fF
            </div>
            <span style={{ color: "#FAF8F4", fontSize: 22, fontWeight: 600, letterSpacing: -0.5, fontFamily: "sans-serif" }}>
              TwoFFactor
            </span>
          </div>
          <div style={{ color: "#5B6670", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace" }}>
            SOFTWARE A LA MEDIDA · COLOMBIA
          </div>
          <div style={{ color: "#FAF8F4", fontSize: 54, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, fontFamily: "sans-serif" }}>
            Tu negocio no puede detenerse.
          </div>
          <div style={{ color: "#B87333", fontSize: 22, fontFamily: "monospace", letterSpacing: 0.5 }}>
            Tu software tampoco_
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={robotsDataUri} width={380} height={285} alt="" style={{ flexShrink: 0 }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
