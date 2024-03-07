"use client";
import bestselling from "../../../../../route2";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import icon1 from "/public/facebook.png";
// import "./styles.css";
import { FreeMode, Navigation } from "swiper/modules";
import { Caudex } from "next/font/google";
import { useRouter } from "next/navigation";
const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Shoespage({ params }) {
  let id = bestselling.findIndex((e) => e.name == params.name);
  const [bigimage, setbigimage] = useState(bestselling[id].photo);
  const bigref = useRef(null);
  const home = useRouter();
  let ll = bestselling[id].size.map((e) => {
    return (
      <span className="mx-2 bg-black p-1 hover:opacity-50  cursor-default text-white">
        {e}
      </span>
    );
  });
  return (
    <div className={caudex.className}>
      <div className="flex flex-row justify-around  mt-10 h">
        <Image
          className="w-1/3 h-40 lg:h-96"
          src={bigimage}
          alt="not found"
        ></Image>
        <div>
          <p className="text-4xl uppercase mb-4">{bestselling[id].name}</p>
          <p className="text-2xl my-5">{bestselling[id].description}</p>
          <p>Size:{ll}</p>
          <p className="text-2xl font-bold my-7">
            Price:{bestselling[id].price}
          </p>
          <p
            onClick={() => home.push("/")}
            className="my-5 text-center bg-gradient-to-r from-[gold] to-[black] w-1/2 mx-auto rounded-md p-1 transition-all duration-300 ease-in-out hover:translate-y-1 hover:opacity-50 uppercase text-white"
          >
            Check out
          </p>
          <div className="flex gap-4">
            <Image width={50} src={bigimage} alt="not found"></Image>
            <Image width={50} src={bigimage} alt="not found"></Image>
            <Image width={50} src={bigimage} alt="not found"></Image>
            <Image width={50} src={bigimage} alt="not found"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
