import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";
import { hasLocale } from "@/i18n/config";

export default async function LaboratorioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <ScrollVideo />
        <Team lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
