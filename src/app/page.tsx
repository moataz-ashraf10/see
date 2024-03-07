"use client";
import Image from "next/image";
import { space } from "postcss/lib/list";
import { Caudex, Dancing_Script, Lato } from "next/font/google";
import Scrol from "./compents/swiper";
import About from "./compents/about";
import Bestseling from "./compents/best";
import dynamic from "next/dynamic";
import bestselling from "../../route2";
import links from "../../route";
import Link from "next/link";
const Dynamicbest = dynamic(() => import("./compents/best"), {
  ssr: false,
});

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Scrol></Scrol>
      <About></About>
      <Dynamicbest params={undefined} ></Dynamicbest>
    </>
  );
}
