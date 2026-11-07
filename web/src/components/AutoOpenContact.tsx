"use client";

import { useEffect } from "react";

export function AutoOpenContact() {
  useEffect(() => {
    // Wait a frame: the contact modal subscribes in an effect of the same commit
    const frame = requestAnimationFrame(() => window.dispatchEvent(new CustomEvent("open-contact")));
    return () => cancelAnimationFrame(frame);
  }, []);
  return null;
}
