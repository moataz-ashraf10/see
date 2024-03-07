"use client";
"server";
import { Dancing_Script, Caudex } from "next/font/google";
import links from "../../../route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import m1 from "/public/burger-menu-right-svgrepo-com.png";
import { useEffect, useRef, useState } from "react";
import m2 from "/public/close.png";
import { UserButton, auth, useAuth } from "@clerk/nextjs";
import React from "react";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Header() {
  const pp = useRef(null);
  const pp2 = useRef([]);

  function show() {
    pp.current.classList.add("right-0");
    pp.current.classList.remove("-right-2/3");
    pp2.current.forEach((e) => {
      e.classList.add("animation");
      e.classList.add("jo");
    });
  }
  function close() {
    pp.current.classList.remove("right-0");
    pp.current.classList.add("-right-2/3");
    pp2.current.forEach((e) => {
      e.classList.remove("animation");
      e.classList.remove("jo");
    });
  }
  let pagename = usePathname();
  let ll = links.map((e, i) => {
    return (
      <Link
        ref={(el) => {
          pp2.current[i] = el;
        }}
        className="font-bold text-2xl my-3 hover:opacity-50"
        key={e.name}
        href={e.href}
      >
        {e.name}
      </Link>
    );
  });
  let [state, setstate] = useState(true);
  const oopp = useAuth();
  const { isLoaded, isSignedIn } = useAuth();
  useEffect(() => {
    if (pagename == "/signin" || pagename == "/signup") {
      setstate(false);
    } else {
      setstate(true);
    }
  }, [pagename]);

  return (
    state && (
      <>
        <div className={caudex.className}>
          <div className=" flex flex-row justify-between lg:justify-around h-full">
            <div className={dancing.className}>
              <Link href={"/"} className="font-bold text-5xl">
                {/* {""} */}
                Matrix
              </Link>
            </div>
            <ul
              ref={pp}
              className="font-bold text-2xl ll overflow-hidden fixed flex flex-col text-center gap-y-10 top-0 -right-2/3 h-2/3 w-2/3 transition-all duration-300 ease-in-out rounded-lg bg-gradient-to-b to-black from-[gold] lg:static lg:to-[#ffd90000] lg:from-[#ffd90000] lg:flex-row lg:justify-between"
            >
              {ll}
              {!isSignedIn ? (
                <Link
                  href={"/signin"}
                  className="bg-[gold] h-10 rounded-lg mt-0.5 w-24 mx-auto transition-all duration-300 ease-in-out hover:translate-y-2 lg:mx-0 hover:text-white"
                >
                  Sign in
                </Link>
              ) : (
                <div className="mt-3 flex bg-white flex-row-reverse gap-x-3 mx-auto lg:mx-0 rounded-md">
                  <UserButton afterSignOutUrl="/" />
                  <Link href={"/profile"} className="text-md hover:opacity-50">
                    Profile
                  </Link>
                </div>
              )}
              <Image
                onClick={close}
                width={50}
                className=" absolute top-0 lg:hidden"
                src={m2}
                alt="not found"
              ></Image>
            </ul>
            <Image
              className="lg:hidden"
              src={m1}
              onClick={show}
              width={50}
              alt="not found"
            ></Image>
          </div>
        </div>
      </>
    )
  );
}
