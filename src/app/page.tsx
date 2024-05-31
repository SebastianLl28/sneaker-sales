import HeaderLayout from "@/layouts/Header.layout";
import Hero from "./sections/hero/Hero";
import Featured from "./sections/featured/Featured";
import Sneaker from "./sections/sneakers/Sneaker";
import Sport from "./sections/sport/Sport";
import Footer from "./sections/footer/Footer";

export default function Home() {
  return (
    <main>
      <HeaderLayout />
      <div className="space-y-8 md:space-y-14 mb-8 md:mb-14">
        <Hero />
        <Featured />
        <Sneaker />
        <Sport />
      </div>
      <Footer />
    </main>
  );
}
