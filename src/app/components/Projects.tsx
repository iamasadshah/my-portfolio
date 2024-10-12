import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Tags } from "lucide-react";
const Projects = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/first-bg.svg')", // Replace with your image path
      }}
    >
      <p className="text-center text-sm">Projects</p>
      <h1 className="text-center text-4xl font-bold">
        Discover My Success Stories
      </h1>
      <p className="text-center text-sm">
        Explore My curated collection of successful projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-y-3">
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
          />
          <h1>AirFlow X SaaS Website Template</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quam.
          Eaque earum quo consectetur corrupti.
          <Tags>project 1</Tags>
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
          />
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
          />
        </Card>
        <Card className="project-card">
          <Image
            src={"/project-image.jpg"}
            alt="project one"
            width={300}
            height={300}
          />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
