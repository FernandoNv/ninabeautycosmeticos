"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel, {
  SlideHomeItem,
} from "@/app/ui/embla-carousel/embla-carousel";
import Cards from "@/app/ui/cards/cards";

import Image from "next/image";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDES: SlideHomeItem[] = [
    {
      title: "Os Favoritos Que Encantam",
      subtitle:
        "Natura, Boticário e outras marcas queridinhas em um só lugar. Porque beleza boa é aquela que brilha na sua rotina!",
      image: "/banner-home/cosmeticos1.jpg",
      url: "https://shopee.com.br/Presente-Natura-Tododia-Flores-(4-produtos)-i.354982204.22198459794",
    },
    {
      title: "Perfumes com Personalidade",
      subtitle:
        "Fragrâncias marcantes, envolventes e irresistíveis. Escolha seu aroma e deixe sua presença no ar.",
      image: "/banner-home/cosmeticos2.jpg",
      url: "https://shopee.com.br/refil-desodorante-corporal-Natura-HOMEM-100ml-i.354982204.21799721872",
    },
    {
      title: "Sua Rotina de Beleza Começa Aqui",
      subtitle:
        "Pele radiante, cabelo impecável e aquele autocuidado gostoso com produtos das marcas que você ama.",
      image: "/banner-home/cosmeticos3.jpg",
      url: "https://shopee.com.br/Kit-Natura-Il%C3%ADa-Completa-(2-itens)-i.354982204.23793934483",
    },
  ];
  return (
    <main className="w-full min-h-[calc(100dvh-200px)]">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <section className="container mx-auto py-4">
        <h2 className="text-4xl font-extrabold text-center p-6">Novidades</h2>
        <Cards />
      </section>
      <section className="bg-primary text-center py-28 px-6">
        <h1 className="text-4xl font-extrabold text-center p-8">
          Compre Onde For Mais Fácil pra Você
        </h1>
        <h2 className="text-2xl">
          Seu atendimento e suas compras com mais facilidade: escolha WhatsApp
          ou Shopee e conte com a gente!
        </h2>
      </section>
      <section
        id="about"
        className="container mx-auto py-4 grid grid-cols-1 lg:grid-cols-2 justify-center items-center"
      >
        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-5xl pb-8">
            💕 Por Trás da Beleza: Conheça a Nina
          </h2>
          <p className="text-xl">
            A Nina é daquelas pessoas apaixonadas por autoestima, autocuidado e
            aquele cheirinho bom que marca presença. Foi essa paixão que a fez
            criar a Nina Beauty — uma loja com alma, criada por quem realmente
            entende de beleza.
          </p>
          <p className="text-xl">
            Revendedora oficial de marcas como Natura, Boticário e outras
            queridinhas do universo dos cosméticos, ela seleciona tudo com
            carinho, pensando em levar até você produtos de qualidade, com
            confiança e aquele toque especial que só quem ama o que faz consegue
            oferecer.
          </p>
          <p className="text-xl">
            Aqui, cada pedido é feito com cuidado, cada atendimento com atenção,
            e cada cliente vira parte dessa história linda que está só
            começando. 💄✨
          </p>
        </div>
        <div className="flex justify-center items-center px-4">
          <Image
            src={"/carina.png"}
            alt="Image da proprietária da Nina Beauty"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>
    </main>
  );
}
