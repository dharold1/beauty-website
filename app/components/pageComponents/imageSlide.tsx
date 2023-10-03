"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageSlide = () => {
  const [img, setImg] = useState<number>(0);

  const images = [
    "/images/topImages.jpg",
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img8.jpg",
    "/images/img4.jpg",
  ];
  useEffect(() => {
    let imgNum = 0;
    const intervalId = setInterval(() => {
      changeImg(imgNum);
      if (imgNum === 4) {
        imgNum = 0;
      }
      imgNum = imgNum + 1;
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const changeImg = (e: number) => {
    setImg(e);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative w-full h-full "
    >
      <Image src={images[img]} fill alt="about image" className="object-cover" />
    </motion.div>
  );
};

export default ImageSlide;
