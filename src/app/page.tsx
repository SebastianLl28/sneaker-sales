import HeaderLayout from "@/layouts/Header.layout";
import Hero from "./sections/hero/Hero";
import Featured from "./sections/featured/Featured";
import Sneaker from "./sections/sneakers/Sneaker";
import Sport from "./sections/sport/Sport";

export default function Home() {
  return (
    <main className="mb-7">
      <HeaderLayout />
      <div className="space-y-8 md:space-y-14">
        <Hero />
        <Featured />
        <Sneaker />
        <Sport />
      </div>
    </main>
  );
}
