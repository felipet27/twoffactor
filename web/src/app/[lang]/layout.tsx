import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { geistMono, geistSans, gabarito, ubuntuMono } from "../fonts";
import { LOCALES, hasLocale } from "@/i18n/config";
import { getTranslator } from "@/i18n/translate";
import { I18nProvider } from "@/i18n/I18nProvider";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getTranslator(lang);
  return {
    title: "TwoFFactor - Fair and Fast",
    description: t(
      "TwoFFactor (Fair and Fast): tecnología avanzada y soluciones de seguridad impulsadas por IA. Predicción, prevención y auditoría en tiempo real a escala global."
    ),
    keywords: [
      "TwoFFactor",
      t("ciberseguridad"),
      t("inteligencia artificial"),
      t("auditoría en tiempo real"),
      t("tecnología avanzada"),
    ],
    openGraph: {
      title: "TwoFFactor - Fair and Fast",
      description: t("Tecnología avanzada y seguridad impulsada por IA. Fair and Fast."),
      type: "website",
      url: `https://twoffactor.com/${lang}`,
      locale: lang === "en" ? "en_US" : "es_ES",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    metadataBase: new URL("https://twoffactor.com"),
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} ${ubuntuMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div
          aria-hidden
          className="scroll-progress fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-cyan to-blue"
        />
        <I18nProvider lang={lang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
