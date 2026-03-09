"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navigation from "./components/Navigation";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {

  return (
    <div className="flex justify-center items-center">
      <Navigation />
    </div>
  );
}