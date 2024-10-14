import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const FAQs = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center h-screen bg-cover bg-center bg-no-repeat px-6  overflow-hidden"
      style={{
        backgroundImage: "url('/second-bg.svg')", // Replace with your image path
      }}
    >
      <h1 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-lg text-center">
        Find answers to commonly asked questions about developer and his
        Services.
      </p>

      <Accordion type="single" className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-md md:text-lg lg:text-xl">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col  rounded-lg bg-primary2 justify-center items-center px-16 py-6 ">
        <h1 className="text-2xl font-bold text-center">Still have Question?</h1>
        <p className="text-lg mb-8 text-center">
          Contact us for more information.
        </p>
        <button className="bg-primary1 transition-all duration-300 font-semibold hover:bg-gray-300 hover:text-primary1 hover:ring-2 hover:ring-primary1 hover:scale-105 text-white px-4 py-2 rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQs;
