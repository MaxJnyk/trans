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
  STROENIE_SERVICES,
  STROENIE_PROJECTS,
  STROENIE_STATS,
  STROENIE_GALLERY,
  STROENIE_TICKER,
} from "@/config/content";

export const metadata: Metadata = {
  title:
    "Строительство — благоустройство, инженерные сети, земляные работы в СПб",
  description:
    "Комплексные строительные работы: благоустройство территорий, наружные инженерные сети (ГНБ), земляные работы в Санкт-Петербурге и Ленинградской области. Фотографии выполненных объектов.",
  openGraph: {
    title: "Строительство — Транс Строй СПб",
    description:
      "Благоустройство территорий · Инженерные сети · ГНБ · Земляные работы · СПб и ЛО",
    url: "/stroenie",
  },
  alternates: { canonical: "/stroenie" },
};

export default function StroeniePage() {
  const direction = getDirection("stroenie")!;

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <DirectionHero direction={direction} stats={STROENIE_STATS} />
        <Ticker items={STROENIE_TICKER} />
        <DirectionServices services={STROENIE_SERVICES} sectionIndex="01" />
        <DirectionAbout
          direction={direction}
          services={STROENIE_SERVICES}
          sectionIndex="02"
        />
        <DirectionProjects projects={STROENIE_PROJECTS} sectionIndex="03" />
        <DirectionGallery
          images={STROENIE_GALLERY}
          imageDir={direction.imageDir}
          sectionIndex="04"
        />
        <Contacts phone={direction.phone} />
      </main>
      <Footer />
    </>
  );
}
