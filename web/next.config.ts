import type { NextConfig } from "next";

// `npm run build:static` genera un export estático en `out/` (S3 + CloudFront).
// Se detecta por el nombre del script npm para funcionar igual en Windows y Linux.
const staticExport = process.env.npm_lifecycle_event === "build:static";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export", trailingSlash: true }),
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
