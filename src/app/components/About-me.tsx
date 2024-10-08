import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="py-6 px-10">
      <div className="about-me-image">
        <Image
          src={"/asadshah.jpg"}
          alt="asad-shah"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
      <div className="text-div text-center py-4">
        <p className="text-xl font-semibold">About me</p>
        <h3 className="text-2xl">
          Who is responsible for all of this impressive effort?
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          deserunt quia inventore ea blanditiis quas harum fugiat nemo iure
          ullam.
        </p>
        <div className="card-div">
          <div className="bg-gray-300 cards">
            <h4 className="text-xl font-bold">100+</h4>
            <p>Project completed</p>
          </div>
          <div className="bg-gray-300 cards">
            <h4 className="text-xl font-bold">98+</h4>
            <p>Clients Satisfied</p>
          </div>
          <div className="bg-gray-300 cards">
            <h4 className="text-xl font-bold">80%</h4>
            <p>Nextjs Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
