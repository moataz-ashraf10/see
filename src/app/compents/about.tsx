import { Caudex, Dancing_Script } from "next/font/google";
import React from "react";
import { useRef } from "react";
const caudex = Caudex({
  subsets: ["latin"],
  weight: ["700"],
});
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});
export default function About() {
  const aboutref = useRef(null);

  return (
    <div className={caudex.className}>
      <div ref={aboutref} className="flex flex-col animation text-center my-10">
        <h1 className="text-3xl font-bold uppercase">About us</h1>
        <div className="text-3xl my-4 w-1/2 text-center h-1 mx-auto bg-[black]"></div>
        <p className="w-1/2 text-center text-balance text-2xl mx-auto">
          Welcome to Matrix, where style meets substance in every stitch. At
          Matrix, we believe that clothing is more than just fabric and threads
          -it is a reflection of your unique personality and an expression of
          your individuality.
        </p>
        <a
          target="_block"
          className="text-center text-balance text-2xl mx-auto my-5 text-white animate-bounce bg-black px-5 py-2 rounded-md"
          href="https://maps.app.goo.gl/XXGRTkwZcvZ2Poqf6"
        >
          Location:Beheair Kafr el-dawar
        </a>
      </div>
    </div>
  );
}
