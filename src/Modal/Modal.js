import React from "react";

const Modal = ({ children, isOpen, handleClose }) => {
  return (
    isOpen && (
      <div className="modal" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
