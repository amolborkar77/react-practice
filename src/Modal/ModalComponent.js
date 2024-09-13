import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button className="modal-button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h2>Modal Title</h2>
        <p>This is a simple modal with some content.</p>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;
