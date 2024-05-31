import Carousel from "@/components/carousel/Carousel";
import { data } from "./data/data";

export default function Sneaker() {
  return <Carousel title="Lo último en zapatillas" data={data} />;
}
