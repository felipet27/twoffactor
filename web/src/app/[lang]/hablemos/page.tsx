import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";
import { AutoOpenContact } from "@/components/AutoOpenContact";
import { hasLocale } from "@/i18n/config";
import { getTranslator } from "@/i18n/translate";

export async function generateMetadata({ params }: PageProps<"/[lang]/hablemos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getTranslator(lang);
  return {
    title: t("Hablemos · TwoFFactor"),
    description: t("Contáctanos por WhatsApp, agenda una reunión o escríbenos por correo."),
    alternates: {
      canonical: `/${lang}/hablemos`,
      languages: { es: "/es/hablemos", en: "/en/hablemos", "x-default": "/es/hablemos" },
    },
  };
}

export default async function HablemosPage({ params }: PageProps<"/[lang]/hablemos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <AutoOpenContact />
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <ScrollVideo />
        <Team lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
