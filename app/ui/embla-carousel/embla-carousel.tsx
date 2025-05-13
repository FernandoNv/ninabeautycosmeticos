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
  text?: string;
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
    <section className="embla relative w-full h-full bg-[rgba(247,106,192,0.45)]">
      <div className="embla__viewport w-full h-[60dvh]" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {slides.map((banner) => (
            <Link
              className="embla__slide w-full h-full"
              href={banner.url}
              target="_blank"
              key={banner.title}
            >
              <div className="w-full h-full relative">
                <Image
                  className=""
                  src={banner.image}
                  alt={banner.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                <div className="p-2 z-10 absolute w-full h-full lg:top-2/12 lg:left-1/4 lg:w-1/2 lg:h-2/3 outline-2 outline-[var(--primary-dark)] backdrop-brightness-70 flex flex-col items-center justify-center">
                  <h2 className="p-2 text-4xl lg:text-5xl font-extrabold text-center text-white">
                    {banner.title}
                  </h2>
                  <h3 className="p-2 text-2xl lg:text-3xl text-center text-white">
                    {banner.subtitle}
                  </h3>
                  <p className="p-2 text-xl lg:text-2xl text-white text-center">
                    {banner.text}
                  </p>
                  <Button size="lg" className="mt-4 btn-primary">
                    acessar
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-0 left-0 backdrop-brightness-70">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
