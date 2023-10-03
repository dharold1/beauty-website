"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./about.css";

function MakeupComponent() {
  return (
    <>
      <div className="md:grid grid-cols-12 w-full overflow-hidden flex flex-col-reverse">
        <div className="bg-primary col-span-6 w-full md:h-screen h-[70vh] relative px-4 ">
          <div className="flex flex-col justify-center items-center  h-full w-full md:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative md:w-[50%] md:h-[50%] w-full h-full"
            >
              <Image
                src={"/images/makeupImg.jpg"}
                fill
                alt="about image"
                className="object-cover"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-montserrat text-center md:px-12 font-light mt-5"
            >
              Thank you for considering us for your makeup needs. We can&apos;t wait
              to embark on this beautiful journey with you and help you look and
              feel your absolute best.
            </motion.p>
            <div></div>
          </div>
        </div>
        <div className="relative col-span-6 md:h-screen h-[60vh]  ">
          <motion.div
            initial={{ x: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ x: 0 }}
            className="flex w-full h-full justify-center items-center font-black md:text-5xl text-3xl"
          >
            Makeup
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default MakeupComponent;
