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
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
