import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="py-6 px-4 lg:px-10 About bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/second-bg.svg')", // Replace with your image path
      }}
    >
      {/* About Me Image */}
      <div className="about-me-image flex justify-center lg:justify-start lg:w-[40%] lg:pr-8">
        <Image
          src={"/asadshah.jpg"}
          alt="asad-shah"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="text-div text-center lg:text-start py-2 lg:py-4 flex flex-col space-y-2 lg:space-y-4 lg:items-start">
        <p className="text-xl font-semibold">About me</p>
        <h3 className="text-2xl lg:text-4xl">
          Who is responsible for all of this impressive effort?
        </h3>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          sit? Perferendis eveniet consectetur dicta alias ipsam dignissimos
          error illum dolor iure ducimus numquam nihil cumque a, unde ipsa
          voluptates enim similique repellat. Nisi, veritatis ipsam?
        </p>

        {/* Cards Section */}
        <div className="card-div text-primary1 flex flex-col lg:flex-row lg:space-x-2">
          <div className="cards">
            <h4 className="text-xl font-bold">100+</h4>
            <p>Project completed</p>
          </div>
          <div className="cards">
            <h4 className="text-xl font-bold">98+</h4>
            <p>Clients Satisfied</p>
          </div>
          <div className="cards">
            <h4 className="text-xl font-bold">80%</h4>
            <p>Nextjs Projects</p>
          </div>
        </div>

        {/* Button Section */}
        <button className="items-center px-6 py-2 border border-transparent text-sm shadow-md font-medium rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
          <a href="#">About me</a>
        </button>
      </div>
    </div>
  );
};

export default About;
