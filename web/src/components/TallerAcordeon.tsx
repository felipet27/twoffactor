"use client";

import { useEffect, useId, useState, type CSSProperties, type ReactNode } from "react";

const MOVIL = "(max-width: 640px)";

type Props = {
  /** Contenedor de la tarjeta (fondo, borde, padding, gap…). */
  style?: CSSProperties;
  /** Etiqueta pequeña encima del título (siempre visible). */
  etiqueta?: string;
  etiquetaStyle?: CSSProperties;
  /** Título: en celular es el botón que abre y cierra. */
  titulo: ReactNode;
  tituloStyle?: CSSProperties;
  /** Texto que se ve siempre, debajo del título. */
  resumen?: ReactNode;
  /** Contenido que en celular se esconde hasta tocar el título. */
  children: ReactNode;
  /** Línea final del cuerpo (se pliega con él y queda abajo de la tarjeta). */
  pie?: ReactNode;
  /** Color del ícono + / −. */
  colorIcono?: string;
  abiertoInicial?: boolean;
  gap?: number;
};

/**
 * Tarjeta que en pantallas ≤ 640px se pliega (título + ícono + / −).
 * En pantallas grandes todo el contenido se ve siempre y el título no es interactivo.
 * El ocultamiento lo hace CSS (.taller-acc-* en globals.css) para que no haya saltos al cargar.
 */
export function TallerAcordeon({ style, etiqueta, etiquetaStyle, titulo, tituloStyle, resumen, children, pie, colorIcono = "#8C5524", abiertoInicial = false, gap = 14 }: Props) {
  const [abierto, setAbierto] = useState(abiertoInicial);
  const [movil, setMovil] = useState(false);
  const id = useId();

  useEffect(() => {
    const mq = window.matchMedia(MOVIL);
    const actualizar = () => setMovil(mq.matches);
    actualizar();
    mq.addEventListener("change", actualizar);
    return () => mq.removeEventListener("change", actualizar);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap, ...style }}>
      {etiqueta && <div style={etiquetaStyle}>{etiqueta}</div>}
      <h3 style={{ margin: 0, ...tituloStyle }}>
        <button
          type="button"
          className="taller-acc-btn"
          aria-expanded={movil ? abierto : undefined}
          aria-controls={id}
          tabIndex={movil ? 0 : -1}
          onClick={() => movil && setAbierto((v) => !v)}
          style={{ all: "unset", boxSizing: "border-box", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
        >
          <span>{titulo}</span>
          <span
            className="taller-acc-icono"
            aria-hidden="true"
            style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", border: `1.5px solid ${colorIcono}`, color: colorIcono, alignItems: "center", justifyContent: "center" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="7" x2="12" y2="7" />
              <line x1="7" y1="2" x2="7" y2="12" style={{ transformOrigin: "7px 7px", transform: abierto ? "scaleY(0)" : "scaleY(1)", transition: "transform 180ms ease" }} />
            </svg>
          </span>
        </button>
      </h3>
      {resumen}
      <div id={id} className="taller-acc-cuerpo" data-abierto={abierto ? "true" : "false"} style={{ display: "flex", flexDirection: "column", gap, flexGrow: 1 }}>
        {children}
        {pie && <div style={{ marginTop: "auto" }}>{pie}</div>}
      </div>
    </div>
  );
}
