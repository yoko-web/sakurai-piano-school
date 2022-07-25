import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { data1 } from "./data";

export const SwiperCardsDesktop = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-screen"
      >
        {data1.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="bg-cover bg-center relative"
              style={{
                backgroundImage: `url('${item.url}')`,
              }}
            >
              <span className="absolute bottom-0 mb-3">{item.title}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
