"use client";
import exp from "constants";
import { Caudex, Dancing_Script, Numans } from "next/font/google";
import { useRef, useState } from "react";
import bestselling from "../../../../route2";
const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
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
const generateMetadata = () => {
  return {
    title: "about",
  };
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";

export default function Shoes() {
  const [data, setdata] = useState(bestselling);
  const size = useRef(null);
  const form = useRef(null);
  const to = useRef(null);
  const invisable = useRef(null);
  function filter1() {
    const ll = data.filter((e) => {
      if(size.current){
      return e.size.includes(`${size.current.value}`);
      }
    });
    console.log(ll);
    setdata(ll);
  }
  function filter2() {
    // console.log(to.current.value, form.current.value);
    const ll = bestselling.filter((e) => {
      if(to.current && form.current){
        return parseInt(to.current.value) >= parseInt(e.price);
      }
    });
    console.log(ll);
    setdata(ll);
  }
  function show() {
    invisable.current.classList.remove("invisible");
    invisable.current.classList.add("animation");
  }
  function hidde() {
    invisable.current.classList.add("invisible");
    invisable.current.classList.remove("animation");
  }
  let card = data.map((e, i) => {
    return (
      <>
        <Link
          // ref={(el) => (pp2.current[i] = el)}
          // className=" invisible"
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
            <p>
              Size:
              {e.size.map((e, i) => (
                <span
                  className="mx-1 bg-black text-white text-center rounded-sm hover:opacity-50"
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
    <>
      <div className={caudex.className}>
        <div className="hover:translate-y-3 transition-all duration-300 ease-in-out">
          <p className="text-3xl text-center cursor-pointer font-bold mt-5 capitalize">
            Shoes
          </p>
          <div className="text-3xl mb-10 mt-4 w-1/3 text-center h-1 mx-auto bg-[black]"></div>
        </div>
        <div>
          <div
            onClick={show}
            className="text-center my-5 bg-[#c2b6b6ce] w-20 mx-auto rounded-md font-bold text-md hover:opacity-50 cursor-pointer md:text-2xl"
          >
            Filter
          </div>
          <div
            // onClick={hidde}
            ref={invisable}
            className="w-full invisible fullh absolute top-0 left-0 ll justify-center items-center flex bg-[#00000061]"
          >
            <div className="w-4/5 h-2/3 lg:w-1/2 bg-white rounded-lg">
              <div
                onClick={hidde}
                className="text-3xl absolute text-bold cursor-pointer"
              >
                X
              </div>
              <div className={dancing.className}>
                <p className="text-center font-bold text-3xl my-5">Filter</p>
                <div className={caudex.className}>
                  <div className="flex flex-col text-center font-bold text-3xl">
                    <select
                      ref={size}
                      onChange={filter1}
                      className="text-center text-2xl my-5 w-1/2 mx-auto outline-none border-solid border-2 rounded-md focus:border-blue-500"
                    >
                      <option value="">Size</option>
                      <option className={dancing.className} value="40">
                        40
                      </option>
                      <option className={dancing.className} value="41">
                        41
                      </option>
                      <option className={dancing.className} value="42">
                        42
                      </option>
                      <option className={dancing.className} value="43">
                        43
                      </option>
                      <option className={dancing.className} value="44">
                        44
                      </option>
                      <option className={dancing.className} value="45">
                        45
                      </option>
                    </select>
                    <p>price</p>
                    <p className="my-5 opacity-50 text-sm">(Min=500ُEGP)</p>
                    <ul className="flex flex-row justify-around my-5">
                      <input
                        ref={form}
                        step={100}
                        min={500}
                        max={1000}
                        placeholder="from"
                        className="w-1/5 placeholder:uppercase placeholder:text-lg placeholder:text-center border-solid border-2 outline-none focus:border-blue-500"
                        type="number"
                      />
                      <input
                        ref={to}
                        step={100}
                        min={500}
                        max={1000}
                        placeholder="to"
                        className="w-1/5 placeholder:uppercase placeholder:text-lg placeholder:text-center border-solid border-2 outline-none focus:border-blue-500"
                        type="number"
                      />
                    </ul>
                    <p
                      onClick={filter2}
                      className=" bg-gradient-to-t from-black to-white text-[gold] w-2/3 lg:w-1/3 mx-auto py-3 hover:translate-y-3 transition-all duration-300 ease-in-out cursor-pointer uppercase"
                    >
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 lg:grid-cols-4 xl:grid-cols-5">
          {card}
        </ul>
      </div>
    </>
  );
}
