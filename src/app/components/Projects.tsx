import { Card } from "@/components/ui/card";
import React from "react";

const Projects = () => {
  return (
    <div>
      <p className="text-center text-sm">Projects</p>
      <h1 className="text-center text-4xl font-bold">
        Discover My Success Stories
      </h1>
      <p className="text-center text-sm">
        Explore My curated collection of successful projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Card>Project one</Card>
        <Card>Project two</Card>
        <Card>Project three</Card>
        <Card>Project four</Card>
      </div>
    </div>
  );
};

export default Projects;
