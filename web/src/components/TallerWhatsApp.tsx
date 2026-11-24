"use client";

import { useEffect, useState } from "react";
import { IconoWhatsApp, enlaceWhatsApp } from "@/components/IconoWhatsApp";

/**
 * Botón flotante de WhatsApp (Felipe). Se ubica justo encima de la flecha
 * "Volver al inicio" (ScrollToTop: 48px, bottom 28, right 24) y baja a su
 * lugar cuando la flecha no se muestra.
 */
export function TallerWhatsAppFlotante() {
  const [flechaVisible, setFlechaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setFlechaVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={enlaceWhatsApp("573173780801", "Hola Felipe, vi la página de TwoFFactor y quiero saber más.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbele a Felipe por WhatsApp"
      title="Escríbenos por WhatsApp"
      style={{
        position: "fixed",
        right: 22,
        bottom: flechaVisible ? 88 : 26,
        zIndex: 50,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#25D366",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        transition: "bottom 200ms ease",
      }}
    >
      <IconoWhatsApp size={28} />
    </a>
  );
}
