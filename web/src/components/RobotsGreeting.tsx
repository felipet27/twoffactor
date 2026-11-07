"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "tf-robots-greeted";
const DELAY_MS = 10_000;

export function RobotsGreeting() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // No mostrar si ya saludó en esta sesión
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(true);
      setMounted(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
  }

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 60,
        transition: "opacity 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 280,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(184,115,51,0.4)",
          boxShadow: "0 16px 48px -8px rgba(0,0,0,0.6)",
          background: "#0B0C10",
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={close}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: 0,
            background: "rgba(11,12,16,0.7)",
            color: "#FAF8F4",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            lineHeight: 1,
            backdropFilter: "blur(4px)",
          }}
        >
          ×
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src="/robots-saludo.mp4"
          autoPlay
          muted
          playsInline
          onEnded={close}
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
