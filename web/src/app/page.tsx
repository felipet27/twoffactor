import { SiteHeader } from "@/components/SiteHeader";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ScrollVideo />
        <Team />
      </main>
      <SiteFooter />
    </>
  );
}
