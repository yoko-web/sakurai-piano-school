import { Layout } from "../components/layout";
import {
  SwiperCards,
  SwiperCardsDesktop,
} from "../components/molecules/swiper";

const Gallery = () => {
  return (
    <div className="">
      <Layout>
        <div className="bg-primary w-screen p-3 text-white pb-20 text-lg">
          Gallery
        </div>
        <SwiperCardsDesktop />
      </Layout>
    </div>
  );
};

export default Gallery;
