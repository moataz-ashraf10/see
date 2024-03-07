"use client";
import { Dancing_Script, Caudex } from "next/font/google";
import icons from "../../../route3";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
const year = new Date().getFullYear();
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const caudex = Caudex({
  subsets: ["latin"],
  weight: ["700"],
});
let icon = icons.map((e, i) => {
  return (
    <a key={i} target="_block" href={e.ll}>
      <Image
        className="text-white mt-3"
        width={25}
        height={25}
        key={i}
        src={e.href}
        alt="not found"
      ></Image>
    </a>
  );
});
export default function Footer() {
  const pagename = usePathname();
  let [state, setstate] = useState(true);
  useEffect(() => {
    if (pagename == "/signin" || pagename == "/signup") {
      setstate(false);
    } else {
      setstate(true);
    }
  }, [pagename]);
  return (
    state && (
      <div className={caudex.className}>
        <div className="bg-black mt-5 w-full">
          <div className="w-full flex justify-center line gap-x-2">{icon}</div>
          <div className="text-white text-2xl text-center mt-3 ">
            <div className={dancing.className}>Matarix</div>
            <p className="text-sm">Copyright © {year} Matrix, Inc.</p>
            <Link href={"/privacypolicy"}>| privacy and cookies policy |</Link>
          </div>
        </div>
      </div>
    )
  );
}
