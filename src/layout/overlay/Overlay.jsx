import React from "react";
import ReactDOM from "react-dom";

import { motion } from "framer-motion";
import "../../styles/Overlay.css";

const Backdrop = (props) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modalContent" onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
};

const Overlay = (props) => {
  const handleClose = () => {};
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Overlay;
