"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import "./embla.css";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

export type SlideHomeItem = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

type PropType = {
  slides: SlideHomeItem[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla relative w-full h-full">
      <div className="embla__viewport w-full h-[60dvh]" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {slides.map((banner) => (
            <Link
              className="embla__slide w-full h-full"
              href={banner.url}
              key={banner.title}
            >
              <div className="w-full h-full relative">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                <div className="p-2 z-10 absolute top-1/4 left-1/4 w-1/2 h-1/2 outline-2 outline-[var(--primary-dark)] bg-[rgba(247,106,192,0.45)] flex flex-col items-center justify-center">
                  <h2 className="p-2 text-4xl font-extrabold text-[var(--primary-dark)]">
                    {banner.title}
                  </h2>
                  <h3 className="p-2 text-2xl text-white">{banner.subtitle}</h3>
                  <Button className="mt-4 btn-primary">Acessar</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-0 left-0 bg-[rgba(0,0,0,0.2)]">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
