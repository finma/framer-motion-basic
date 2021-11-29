import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariants}
          initial="initial"
          animate="animate"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

const variants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const svgVariants = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
    },
  },
};

export default Header;
