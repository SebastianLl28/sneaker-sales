"use client";
import Link from "next/link";
import { data } from "./data/data";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Sneaker() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="container">
      <h2 className="title pb-3">Lo último en zapatillas</h2>
      <div className="embla" ref={emblaRef}>
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
                height={700}
                className="object-cover h-64"
              />
              <h3 className="md:text-xl font-semibold mt-2 md:mt-4 absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full md:px-4">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}
