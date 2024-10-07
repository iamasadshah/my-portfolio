import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold text-center">
        Take a look at the variety of services I offer.
      </h1>
      <div className="grid grid-cols-1 px-6 gap-4 mt-4 md:grid-cols-2 ">
        <Card className="services-card">
          <Image alt="image" src="/ux-design.png" width={100} height={100} />
          <h3 className="service-heading">UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
            non ipsam unde laborum aliquid sint quam officia ipsum saepe?
          </p>
        </Card>
        <Card className="services-card">
          <Image alt="image" src="/development.png" width={100} height={100} />
          <h3 className="service-heading">Frontend Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
            non ipsam unde laborum aliquid sint quam officia ipsum saepe?
          </p>
        </Card>
        <Card className="services-card">
          <Image alt="image" src="/SPA.png" width={100} height={100} />
          <h3 className="service-heading">Single Page Applications (SPAs)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
            non ipsam unde laborum aliquid sint quam officia ipsum saepe?
          </p>
        </Card>
        <Card className="services-card">
          <Image alt="image" src="/seo.png" width={100} height={100} />
          <h3 className="service-heading">SEO Optimization</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sequi
            non ipsam unde laborum aliquid sint quam officia ipsum saepe?
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
