import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import m1 from "/public/Maroon and White Photo Heavy FaminePoverty Crisis Hub Facebook Post (1).png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

export default function Scrol() {
  return (
    <>
      <Swiper
        className="w-1/2 h-98 my-5"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        freeMode={true}
        speed={1000}
        //   navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            src={m1}
            height={300}
            width={500}
            className="mx-auto"
            alt="not founc"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={m1}
            width={500}
            height={300}
            className="mx-auto"
            alt="not founc"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={m1}
            width={500}
            height={300}
            className="mx-auto"
            alt="not founc"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={m1}
            width={500}
            height={300}
            className="mx-auto"
            alt="not founc"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
