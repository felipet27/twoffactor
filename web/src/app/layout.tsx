import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans, gabarito, ubuntuMono } from "./fonts";
import { I18nProvider } from "@/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "TwoFFactor · Software a la medida",
  description:
    "Sistemas hechos a la medida para tu negocio. En marcha en pocas semanas, creciendo contigo. Hecho en Colombia.",
  keywords: ["TwoFFactor", "software a la medida", "Colombia", "desarrollo de software"],
  openGraph: {
    title: "TwoFFactor · Software a la medida",
    description: "Sistemas hechos a la medida para tu negocio. En marcha en pocas semanas, creciendo contigo.",
    type: "website",
    url: "https://twoffactor.com",
    locale: "es_CO",
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://twoffactor.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} ${ubuntuMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div
          aria-hidden
          className="scroll-progress fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-cyan to-blue"
        />
        <I18nProvider lang="es">{children}</I18nProvider>
      </body>
    </html>
  );
}
