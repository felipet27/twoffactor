"use client";

import { useEffect } from "react";

export function AutoOpenContact() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("open-contact"));
  }, []);
  return null;
}
