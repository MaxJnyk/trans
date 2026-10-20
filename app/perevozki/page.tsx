import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { DirectionHero } from "@/components/DirectionHero";
import { Ticker } from "@/components/Ticker";
import { DirectionServices } from "@/components/DirectionServices";
import { DirectionAbout } from "@/components/DirectionAbout";
import { DirectionProjects } from "@/components/DirectionProjects";
import { DirectionGallery } from "@/components/DirectionGallery";
import { Contacts, Footer } from "@/components/Contacts";
import {
  getDirection,
  PEREVOZKI_SERVICES,
  PEREVOZKI_PROJECTS,
  PEREVOZKI_STATS,
  PEREVOZKI_GALLERY,
  PEREVOZKI_TICKER,
} from "@/config/content";

export const metadata: Metadata = {
  title: "Перевозки негабаритных грузов по России — тралы до 80 тонн",
  description:
    "Перевозка негабаритных и тяжеловесных грузов по всей России. Собственный автопарк — 10 машин, тралы до 80 тонн, согласование маршрутов. ООО «Транс Строй СПб».",
  openGraph: {
    title: "Перевозки негабаритных грузов — Транс Строй СПб",
    description:
      "Свой автопарк · Тралы до 80 тонн · По всей России",
    url: "/perevozki",
  },
  alternates: { canonical: "/perevozki" },
};

export default function PerevozkiPage() {
  const direction = getDirection("perevozki")!;

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <DirectionHero direction={direction} stats={PEREVOZKI_STATS} />
        <Ticker items={PEREVOZKI_TICKER} />
        <DirectionServices services={PEREVOZKI_SERVICES} sectionIndex="01" />
        <DirectionAbout
          direction={direction}
          services={PEREVOZKI_SERVICES}
          sectionIndex="02"
        />
        <DirectionProjects projects={PEREVOZKI_PROJECTS} sectionIndex="03" />
        <DirectionGallery
          images={PEREVOZKI_GALLERY}
          imageDir={direction.imageDir}
          sectionIndex="04"
        />
        <Contacts phone={direction.phone} />
      </main>
      <Footer />
    </>
  );
}
