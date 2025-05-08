"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel, {
  SlideHomeItem,
} from "@/app/ui/embla-carousel/embla-carousel";
import Cards from "@/app/ui/cards/cards";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDES: SlideHomeItem[] = [
    {
      title: "Titulo 1",
      subtitle: "Subtitulo 1",
      image: "/banner-home/cosmeticos1.jpg",
      url: "#",
    },
    {
      title: "Titulo 2",
      subtitle: "Subtitulo 2",
      image: "/banner-home/cosmeticos2.jpg",
      url: "#",
    },
    {
      title: "Titulo 3",
      subtitle: "Subtitulo 3",
      image: "/banner-home/cosmeticos3.jpg",
      url: "#",
    },
  ];
  return (
    <main className="w-full min-h-[calc(100dvh-114px)]">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="container mx-auto">
        <h1 className="text-2xl font-extrabold text-center p-4">Novidades</h1>
        <Cards />
      </div>
    </main>
  );
}
