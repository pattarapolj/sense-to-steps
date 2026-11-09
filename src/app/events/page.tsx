import type { Metadata } from "next";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Past events | ${site.name}`,
  description: "Past events at Sense to Steps: Boo! Spooky Play at Habitomall and Pirate Treasure Hunt! at RQ49.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <div className="locale-page flex flex-1 flex-col">
        <Events />
        <Footer />
      </div>
    </>
  );
}
