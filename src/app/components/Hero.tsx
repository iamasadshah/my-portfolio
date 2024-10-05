import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:flex lg:pr-6 h-screen Hero-container bg-slate-100 relative overflow-hidden">
      {/* Image Section */}
      <div className="Image-Div flex flex-col justify-center items-center px-4 relative h-[50vh] lg:h-full lg:basis-[60%] order-first lg:order-last">
        {/* Particle Two (Floating Animation) */}
        <Image
          src={"/particle-two.png"}
          alt="particle-two"
          width={300}
          height={300}
          className="h-24 w-24 hidden lg:block -mb-20 -ml-[600px] animate-pulse"
        />

        {/* Hero Image */}
        <Image
          src="/iamasadshah.png"
          alt="Hero-Image"
          height={400}
          width={400}
          className="object-contain z-10 w-[250px] h-[550px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[650px] md:mt-10 lg:mt-0 lg:w-full lg:h-full"
        />

        {/* Background Image */}
        <img
          src="/background.png"
          alt="Background-Image"
          className="absolute z-0 object-contain w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-full lg:h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center md:-mt-16 md:pl-14 px-4 h-[50vh] lg:h-full leading-[3.5rem]">
        {/* Particle One (Pulse Animation) */}
        <Image
          src={"/particle-one.png"}
          alt="particle-one"
          width={300}
          height={300}
          className="h-24 w-24 hidden lg:block my-10 animate-spin-slow"
        />

        <p className="text-xl">Hello, My Name is Asad Shah.</p>
        <h1 className="text-[35px] md:text-[45px] font-semibold leading-10 md:leading-[3.5rem]">
          Showcase Your Work with Airfolio's Creative Solutions
        </h1>
        <p className="text-sm md:text-base text-gray-600 lg:pr-52">
          Create stunning portfolios and websites with Airfolio's UI/UX design
          and Webflow development services.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-4 lg:justify-start">
          {/* Hire Me Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
            <a href="#">Hire me</a>
          </button>

          {/* Portfolio Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7">
            <a href="#">Portfolio</a>
          </button>

          {/* Particle Three (Spin Animation) */}
          <Image
            src={"/particle-three.png"}
            alt="particle-three"
            width={300}
            height={300}
            className="h-24 w-24 hidden lg:block animate-bounce-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
