import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="animation"
      ></motion.div>
    </>
  );
};

const loaderVariants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        yoyo: Infinity,
      },
      y: {
        ease: "easeOut",
        duration: 0.25,
        yoyo: Infinity,
      },
    },
  },
};

export default Loader;
