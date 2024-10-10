import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div
      className="py-4 bg-slate-100 h-screen justify-center items-center lg:space-y-12"
      id="#services"
    >
      <h1 className="text-3xl font-semibold text-center px-4">
        Take a look at the variety of services I offer.
      </h1>
      <div className="grid grid-cols-1 px-6 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8 ">
        <Card className="services-card">
          <Image
            alt="image"
            src="/ux-design.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">UI/UX Design</h3>
          <p>
            Ensuring websites and apps work smoothly on all devices, including
            mobile, tablets, and desktops, with optimized user interfaces.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/development.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">Frontend Development</h3>
          <p>
            Building responsive and interactive websites using HTML, CSS,
            JavaScript, and modern frameworks like React, Next.js.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/SPA.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">Single Page Applications (SPAs)</h3>
          <p>
            Developing fast, dynamic SPAs using frameworks like React or Nextjs
            that provide seamless user experiences without reloading pages.
          </p>
        </Card>
        <Card className="services-card">
          <Image
            alt="image"
            src="/seo.png"
            width={100}
            height={100}
            className="service-image"
          />
          <h3 className="service-heading">SEO Optimization</h3>
          <p>
            Implementing best practices in frontend code for better search
            engine rankings, such as optimizing metadata, improving site speed,
            and making sites crawl-friendly
          </p>
        </Card>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {/* Hire Me Button */}
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
          <a href="#">Hire me</a>
        </button>

        {/* Portfolio Button */}
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-primary1 bg-transparent hover:bg-primary1 cursor-pointer hover:text-white ring-2 ring-primary1 md:text-lg md:px-10 lg:px-7">
          <a href="#">Portfolio</a>
        </button>
      </div>
    </div>
  );
};

export default Services;
