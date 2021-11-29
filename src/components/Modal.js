import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make variants pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const backdrop = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
};

const modal = {
  initial: { y: "-100vh", opacity: 0 },
  animate: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export default Modal;
