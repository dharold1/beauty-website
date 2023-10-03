"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./about.css";

function AboutServiceComponent() {
  return (
    <>
      <div className="md:grid grid-cols-12 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative col-span-6 md:h-screen h-[60vh]  "
        >
          <motion.div
            initial={{ x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0 }}
            className="flex w-full md:h-full h-[50%] justify-center items-center font-black md:text-5xl text-3xl"
          >
            Beauty
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-primary col-span-6 w-full md:h-screen h-[70vh]  relative px-4 "
        >
          <div className="flex flex-col justify-center items-center h-full w-full md:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative md:w-[50%] w-full h-full md:h-[50%]"
            >
              <Image
                src={"/images/img02.jpg"}
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
              We empower you with makeup artistry that enhances your natural
              allure and boosts your self-assurance. Step into our world of
              beauty, where skilled hands and premium products come together to
              create makeup looks that reflect your unique personality and
              style.
            </motion.p>
            {/* <div></div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AboutServiceComponent;
