'use client'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {

  return (
    <div>
      <Navigation />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  );
}