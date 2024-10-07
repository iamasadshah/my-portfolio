import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-t-8 border-gray-300" />
      <Services />
    </>
  );
}
