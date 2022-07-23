/* eslint-disable react/jsx-key */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "../../../styles/swiper-styles.css";

// import required modules
import { EffectCards } from "swiper";

import { data1, data2 } from "./data";

export const SwiperCards = () => {
  return (
    <div className="mt-16">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
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
              <span className="absolute bottom-0 text-sm mb-3">
                {item.title}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mt-10">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data2.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${item.url}')`,
                }}
              >
                <span className="absolute bottom-0 text-sm mb-3">
                  {item.title}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
