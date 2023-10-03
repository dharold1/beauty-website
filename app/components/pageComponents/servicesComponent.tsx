"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface IServices {
  id: number;
  title: string;
}
const ServicesComponent = () => {
  const services: IServices[] = [
    {
      id: 1,
      title: "Bridal Makeup",
    },
    {
      id: 2,
      title: "Special Occasion Makeup",
    },
    {
      id: 3,
      title: " Makeup Workshops",
    },
    {
      id: 4,
      title: "Makeup Consultations",
    },
    {
      id: 5,
      title: "Editorial and Fashion Makeup",
    },
  ];
  return (
    <div className="md:grid grid-cols-12 w-full overflow-hidden">
      {/* <div className="relative col-span-5 md:h-screen h-[60vh] bg-hero-pattern bg-cover"></div> */}
      <div className="relative col-span-5 md:h-screen h-[60vh] img-gradient max-w-full ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full h-full "
        >
          <Image
            src={"/images/img20.jpg"}
            fill
            alt="about image"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="bg-primary col-span-7 w-full md:h-screen h-[40vh] relative px-4">
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className=" text-[12vw] md:text-[7vw] leading-[1] font-black text-bigText max-w-full transform scale-y-[2.0]">
              02
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=""
          >
            <h2 className="md:text-5xl text-3xl font-black   whitespace-normal  bottom-[8rem]">
              Services
            </h2>
            <ul>
              {services.map((service) => (
                <li className="font-thin uppercase font-montserrat leading-9" key={service.id}>{service.title}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
