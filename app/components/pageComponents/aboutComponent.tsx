"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./about.css";

function AboutComponent() {
  return (
    <>
      <div
        id="scroll-container"
        className="md:my-20 my-10 bg-primary  py-4 px-2 text-right"
      >
        <p id="scroll-text" className="font-bold text-2xl whitespace-nowrap">
          HI! LET&apos;S MAKE YOU SHINE AT LAVENDER LOOKS{" "}
        </p>{" "}
      </div>
      <div className="md:grid grid-cols-12 w-full flex flex-col-reverse">
        <div className="bg-primary col-span-7 w-full md:h-screen h-[60vh] relative px-4 ">
          <div className="flex items-center h-full w-full justify-center md:flex-row flex-col">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 md:relative text-[25vw]  md:text-[12vw]  leading-[1] font-black text-bigText max-w-full transform scale-y-[2.0]"
            >
              01
            </motion.h1>
            <div className="md:px-8">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:text-5xl text-3xl font-black   whitespace-normal  bottom-[8rem] uppercase"
              >
                About us
              </motion.h2>
              <div className="">
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="justify font-montserrat font-light"
                >
                  At Lavender Looks, we are all about enhancing your natural
                  beauty and boosting your confidence through the art of makeup.
                  Our team of skilled makeup artists is dedicated to making you
                  look and feel your best for any occasion. We offer a range of
                  makeup services, from bridal and special occasion makeup to
                  makeup workshops and consultations. Join us in celebrating the
                  beauty within you.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-5 md:h-screen h-[60vh] img-gradient ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative w-full h-full"
          >
            <Image
              src={"/images/aboutImage.jpg"}
              fill
              alt="about image"
              className="object-cover"
            />
          </motion.div>
          <h3 className="absolute uppercase md:text-5xl text-3xl font-black bottom-0 text-white">
            Lavender <br /> Looks
          </h3>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
