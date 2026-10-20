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
  title: "Перевозки негабаритных грузов по России — тралы до 100 тонн",
  description:
    "Перевозка негабаритных и тяжеловесных грузов по всей России. Тралы до 100 тонн, согласование маршрутов, машины прикрытия, сопровождение. ООО «Транс Строй СПб».",
  openGraph: {
    title: "Перевозки негабаритных грузов — Транс Строй СПб",
    description:
      "Негабаритные грузы · Тралы до 100 тонн · Спецтехника · По всей РФ",
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
