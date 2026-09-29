import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // El optimizador por defecto usa sharp, que no corre en Workers.
    // Para producción se migrará a un loader de Cloudflare Images.
    // Los placeholders blur (LQIP) se generan en build vía import estático.
    unoptimized: true,
  },
};

export default nextConfig;

// Habilita las bindings de Cloudflare durante `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
