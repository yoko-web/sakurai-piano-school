import Head from "next/head";
import { Layout } from "../components/layout";
import { SwiperCardsDesktop } from "../components/molecules/swiper";

const Gallery = () => {
  return (
    <div className="">
      <Head>
        <title>Gallery - 座間市のピアノ教室 櫻井ピアノスクール</title>
      </Head>
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
