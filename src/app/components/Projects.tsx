import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-10 -mt-1"
      style={{
        backgroundImage: "url('/first-bg.svg')", // Replace with your image path
      }}
    >
      <div className="flex flex-col space-y-3 py-10 px-4 lg:px-10">
        <p className="text-center text-sm font-bold">Projects</p>
        <h1 className="text-center text-3xl lg:text-4xl font-bold ">
          Discover My Success Stories
        </h1>
        <p className="text-center text-sm">
          Explore My curated collection of successful projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-10">
        {/* Example Project Card */}
        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl"
          />
          <h1 className="text-lg lg:text-xl font-bold project-title">
            AirFlow X SaaS Website Template
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          <Link href={"/"} className="text-primary1 px-3 lg:px-6">
            View Project &rarr;
          </Link>
        </Card>
        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            AirFlow X SaaS Website Template
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          <Link href={"/"} className="text-primary1 px-3 lg:px-6">
            View Project &rarr;
          </Link>
        </Card>
        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            AirFlow X SaaS Website Template
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          <Link href={"/"} className="text-primary1 px-3 lg:px-6">
            View Project &rarr;
          </Link>
        </Card>
        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            AirFlow X SaaS Website Template
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          <Link href={"/"} className="text-primary1 px-3 lg:px-6">
            View Project &rarr;
          </Link>
        </Card>

        {/* Add more project cards as needed */}
      </div>

      <div className="flex justify-center items-center mt-8">
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-semibold rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
          <Link href="#">Check the full Portfolio</Link>
        </button>
      </div>
    </div>
  );
};

export default Projects;
