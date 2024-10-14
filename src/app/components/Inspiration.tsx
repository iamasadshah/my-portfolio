import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

const Inspiration = () => {
  return (
    <div>
      <p className="text-center ">Inspiration</p>
      <h1 className="text-xl font-semibold text-center">What's in my Mind</h1>
      <Card>
        <Image
          src={"/project-image.jpg"}
          alt="image"
          width={300}
          height={300}
        />
      </Card>
    </div>
  );
};

export default Inspiration;
