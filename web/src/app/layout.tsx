import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TwoFFactor — Advanced Technology & Security Solutions",
  description:
    "TwoFFactor (Fair and Fast): tecnología avanzada y soluciones de seguridad impulsadas por IA. Predicción, prevención y auditoría en tiempo real a escala global.",
  keywords: [
    "TwoFFactor",
    "ciberseguridad",
    "inteligencia artificial",
    "auditoría en tiempo real",
    "tecnología avanzada",
  ],
  openGraph: {
    title: "TwoFFactor — Advanced Technology & Security Solutions",
    description:
      "Tecnología avanzada y seguridad impulsada por IA. Fair and Fast.",
    type: "website",
    url: "https://twoffactor.com",
    locale: "es_ES",
  },
  metadataBase: new URL("https://twoffactor.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div
          aria-hidden
          className="scroll-progress fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-cyan to-blue"
        />
        {children}
      </body>
    </html>
  );
}
