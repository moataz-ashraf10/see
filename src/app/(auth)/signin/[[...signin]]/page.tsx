"use client";
import { SignIn } from "@clerk/nextjs";

export default function signin() {
  return (
    <div className="fullh mx-auto text-center flex items-center justify-center">
      <SignIn></SignIn>
    </div>
  );
}
