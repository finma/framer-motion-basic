import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childVariants}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

const variants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default Order;
