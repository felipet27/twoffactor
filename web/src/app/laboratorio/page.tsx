import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";

export default function LaboratorioPage() {
  return (
    <>
      <SiteHeader lang="es" />
      <main className="flex-1">
        <ScrollVideo />
        <Team lang="es" />
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
