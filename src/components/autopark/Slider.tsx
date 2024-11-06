// components/Slider.tsx
"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {
  images: string[];
  width?: number;
  height?: number;
  slidesPerView?: number;
  text: string;
}

const Slider: FC<SliderProps> = ({
  images,
  width = 500,
  height = 500,
  slidesPerView = 1,
  text,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log("Swiper initialized", swiper)}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="swiper__overlay">
            <h2>{text}</h2>
          </div>
          <Image
            width={width}
            height={height}
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
