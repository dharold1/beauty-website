"use client";
import React from "react";
import ImageSlide from "./imageSlide";
import { motion } from "framer-motion";

const TopComponent = () => {
  return (
    <div className="md:grid grid-cols-12 w-full overflow-hidden">
      {/* <div className="relative col-span-5 md:h-screen h-[60vh] bg-hero-pattern bg-cover"></div> */}
      <div className="relative col-span-5 md:h-screen h-[60vh] img-gradient max-w-full ">
        <ImageSlide />
      </div>
      <div className="bg-primary col-span-7 w-full md:h-screen h-[40vh] relative px-4">
        <div className="absolute bottom-14 md:bottom-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center  md:w-full"
          >
            <h2 className="md:text-5xl text-3xl font-black   whitespace-normal  bottom-[8rem]">
              Elevate Your Look, <br /> Unleash Your <br /> Confidence
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className=" text-[12vw] md:text-[7vw] leading-[1] font-black text-bigText max-w-full transform scale-y-[2.0]">
              LAVENDER LOOKS
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopComponent;
