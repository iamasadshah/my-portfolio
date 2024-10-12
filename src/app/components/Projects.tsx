import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/first-bg.svg')", // Replace with your image path
      }}
    >
      <div className="flex flex-col space-y-3 py-10">
        <p className="text-center text-sm font-bold">Projects</p>
        <h1 className="text-center text-4xl font-bold">
          Discover My Success Stories
        </h1>
        <p className="text-center text-sm">
          Explore My curated collection of successful projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-3 lg:px-10">
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="project-image"
          />
          <h1 className="project-title">AirFlow X SaaS Website Template</h1>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          {/* Tags related to projects */}
          <Link href={"/"} className="project-link">
            View project
          </Link>
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="project-image"
          />
          <h1 className="project-title">AirFlow X SaaS Website Template</h1>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          {/* Tags related to projects */}
          <Link href={"/"} className="project-link">
            View project
          </Link>
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="project-image"
          />
          <h1 className="project-title">AirFlow X SaaS Website Template</h1>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          {/* Tags related to projects */}
          <Link href={"/"} className="project-link">
            View project
          </Link>
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
            className="project-image"
          />
          <h1 className="project-title">AirFlow X SaaS Website Template</h1>
          <p className="project-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quam. Eaque earum quo consectetur corrupti.
          </p>
          {/* Tags related to projects */}
          <Link href={"/"} className="project-link">
            View project
          </Link>
        </Card>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-semibold rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
          <Link href="#">Check the full Portfolio</Link>
        </button>
      </div>
    </div>
  );
};

export default Projects;
