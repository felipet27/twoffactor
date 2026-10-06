import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";
import { AutoOpenContact } from "@/components/AutoOpenContact";

export const metadata = {
  title: "Hablemos · TwoFFactor",
  description: "Contáctanos por WhatsApp, agenda una reunión o escríbenos por correo.",
};

export default function HablemosPage() {
  return (
    <>
      <AutoOpenContact />
      <SiteHeader />
      <main className="flex-1">
        <ScrollVideo />
        <Team />
      </main>
      <SiteFooter />
    </>
  );
}
