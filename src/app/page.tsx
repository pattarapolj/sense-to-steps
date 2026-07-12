import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { Moments } from "@/components/Moments";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Team } from "@/components/Team";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Letter />
        <Moments />
        <Reviews />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
