import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About-me";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-t-8 border-gray-300" />
      <Services />
      <hr className="border-t-8 border-gray-300" />
      <About />
      <hr className="border-t-8 border-gray-300" />
      <Projects />
    </>
  );
}
