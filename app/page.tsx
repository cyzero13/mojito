"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {

  return (
    <div >page</div>
  );
}