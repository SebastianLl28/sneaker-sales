import Carousel from "@/components/carousel/Carousel";
import { data } from "./data/data";

export default function Sport() {
  return <Carousel title="Filtrar por deporte" data={data} />;
}
