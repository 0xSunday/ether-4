import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles, { layout } from "../Styles";

import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../motion";
const Nft = () => {
  return (
    <motion.section
      className={` text-white sm:py-16 py-10 `}
      id="nft"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2 className={`${styles.heading2} text-[40px] text-center py-7`}>
        NFT'S
      </h2>

      <div className="nft ">
        <motion.img
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          src="./nft1.jpeg"
          alt="project"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 0.6)}
          src="./nft3.jpeg"
          alt="project"
        />

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 0.6)}
          src="./nft2.jpeg"
          alt="project"
        />

        <motion.img
          variants={fadeIn("up", "tween", 0.4, 0.6)}
          src="./nft5.jpeg"
          alt="project"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 0.6)}
          src="./nft6.jpeg"
          alt="project"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.5, 0.6)}
          src="./nft7.jpeg"
          alt="project"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.7, 0.6)}
          src="./nft10.jpeg"
          alt="project"
        />

        <motion.img
          variants={fadeIn("up", "tween", 0.8, 0.6)}
          src="./nft11.jpeg"
          alt="project"
        />
      </div>
    </motion.section>
  );
};

export default Nft;
