//libraries
import React from "react";
//styles
import './Modal.scss'

const Modal = ({ children, showModal }) => {
  return (
    <div className={showModal ? 'modal active' : 'modal'}>
      <div className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;