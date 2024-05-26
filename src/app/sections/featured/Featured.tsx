"use client";
import Image from "next/image";
import { data } from "./data/data";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function Featured() {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <section className="container">
      <h2 className="title pb-3">Lo mejor y más nuevo</h2>
      <div className="embla" ref={emblaRef}>
        <section className="embla__container">
          {data.map((item) => (
            <Link href={item.link} key={item.id} className="embla__slide">
              <Image
                src={item.image}
                alt={item.alt}
                width={800}
                height={1000}
                className="object-cover h-96 md:h-[35rem]"
              />
              <h3 className=" md:text-xl font-semibold mt-2 md:mt-4">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}
