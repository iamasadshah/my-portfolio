import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-20 lg:flex lg:pr-6">
      {/* Image Section */}
      <div className="Image-Div bg-[#FFECE3] lg:flex lg:basis-[60%] justify-center items-center pb-32 px-32 rounded-full aspect-square relative order-first lg:order-last">
        <Image
          src="/iamasadshah.png"
          height={200}
          width={200}
          alt="Hero-Image"
          className="absolute inset-0 -mt-14 object-cover w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="text-Div md:pl-14 px-4 mt-20 leading-[3.5rem]">
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
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1">
            <a href="#">Hire me</a>
          </button>
          {/* Portfolio Button */}
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer hover:text-white ring-2 ring-primary1">
            <a href="#">Portfolio</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
