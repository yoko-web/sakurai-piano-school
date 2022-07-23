import { Layout } from "../components/layout";
import { SwiperCards } from "../components/molecules/swiper";

const Gallery = () => {
  return (
    <div className="">
      <Layout>
        <div className="bg-primary w-screen p-3">Gallery</div>
        <SwiperCards />
      </Layout>
    </div>
  );
};

export default Gallery;
