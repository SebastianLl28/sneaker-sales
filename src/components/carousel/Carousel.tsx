"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";

interface CarouselProps {
  data: {
    id: number;
    name: string;
    image: string;
    link: string;
    alt: string;
    height?: number;
  }[];
  title: string;
}

export default function Carousel({ data, title }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const handlePrevClick = useCallback(() => {
    if (emblaApi) {
      scrollPrev();
      if (emblaApi.canScrollPrev()) {
        setIsPrevDisabled(false);
      } else {
        setIsPrevDisabled(true);
      }
      setIsNextDisabled(false);
    }
  }, [emblaApi, scrollPrev]);

  const handleNextClick = useCallback(() => {
    if (emblaApi) {
      scrollNext();
      if (emblaApi.canScrollNext()) {
        setIsNextDisabled(false);
      } else {
        setIsNextDisabled(true);
      }
      setIsPrevDisabled(false);
    }
  }, [emblaApi, scrollNext]);

  return (
    <section className="container relative space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="title">{title}</h2>
        <div className="flex items-center gap-3">
          <button
            className={`embla__prev embla__button ${
              isPrevDisabled && "embla__button--disabled"
            }`}
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className={`embla__next embla__button ${
              isNextDisabled && "embla__button--disabled"
            }`}
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <section className="embla__container">
            {data.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="embla__slide relative"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={item.height || 700}
                  className={`object-cover ${!item.height && "h-64"} `}
                />
                <h3 className="md:text-xl font-semibold mt-2 md:mt-4 absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full md:px-4">
                  {item.name}
                </h3>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
