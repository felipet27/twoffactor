import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";
import { AutoOpenContact } from "@/components/AutoOpenContact";

export default function HablemosPage() {
  return (
    <>
      <AutoOpenContact />
      <SiteHeader lang="es" />
      <main className="flex-1">
        <ScrollVideo />
        <Team lang="es" />
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
