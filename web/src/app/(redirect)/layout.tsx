import type { Metadata } from "next";
import "../globals.css";
import { geistMono, geistSans } from "../fonts";

// Root layout for the unprefixed entry URLs, which only redirect to /es or /en
export const metadata: Metadata = {
  title: "TwoFFactor - Fair and Fast",
  alternates: {
    languages: { es: "/es", en: "/en", "x-default": "/es" },
  },
  metadataBase: new URL("https://twoffactor.com"),
};

export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
