import { Caudex } from "next/font/google";
import bestselling from "../../../route2";
import Image from "next/image";
import m1 from "/public/Maroon and White Photo Heavy FaminePoverty Crisis Hub Facebook Post (1).png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useRef } from "react";
import React from "react";
import Link from "next/link";
const caudex = Caudex({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Bestseling({ params }) {
  const pp2 = useRef([]);
  function showbest() {
    if (window.scrollY > 320) {
      pp2.current.forEach((e) => {
        e.classList.add("animation2");
        e.classList.remove("invisible");
      });
    }
  }
  window.addEventListener("scroll", () => showbest());
  let card = bestselling.map((e, i) => {
    return (
      <>
        <Link
          ref={(el) => (pp2.current[i] = el)}
          className="invisible"
          href={e.href}
          key={i}
        >
          <div className="w-4/5 border-solid border-2 mx-auto border-[black]">
            <Swiper
              className="w-full"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={false}
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
                  src={e.photo}
                  height={300}
                  width={500}
                  className="mx-auto"
                  alt="not founc"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={e.photo}
                  width={500}
                  height={300}
                  className="mx-auto"
                  alt="not founc"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={e.photo}
                  width={500}
                  height={300}
                  className="mx-auto"
                  alt="not founc"
                ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={e.photo}
                  width={500}
                  height={300}
                  className="mx-auto"
                  alt="not founc"
                ></Image>
              </SwiperSlide>
            </Swiper>
            <h1 className="text-2xl font-bold text-center text-[gold]">
              {e.name}
            </h1>
            <p>{e.description}</p>
            <p className="flex flex-row flex-wrap">
              Size:
              {e.size.map((e, i) => (
                <span
                  className=" mx-0.5 bg-black text-white text-center rounded-sm hover:opacity-50"
                  key={i}
                >
                  {e}
                </span>
              ))}
            </p>
            <p className="my-5 text-center bg-gradient-to-r from-[gold] to-[black] w-1/2 mx-auto rounded-md p-1 transition-all duration-300 ease-in-out hover:translate-y-1 hover:opacity-50 uppercase text-white">
              add to card
            </p>
          </div>
        </Link>
      </>
    );
  });
  return (
    <div className={caudex.className}>
      <div>
        <h1 className="text-3xl font-bold text-center uppercase">
          best selling
        </h1>
        <div className="text-3xl my-4 w-1/2 text-center h-1 mx-auto bg-[black]"></div>
        <div className="">
          <ul className="grid opacity-0 animation2 grid-cols-2 md:grid-cols-3 gap-y-3 lg:grid-cols-4 xl:grid-cols-5">
            {card}
          </ul>
        </div>
      </div>
    </div>
  );
}
