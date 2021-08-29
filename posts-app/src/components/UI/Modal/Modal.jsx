//libraries
import React from "react";
//styles
import './Modal.scss'

const Modal = ({ children, showModal, setShowModalCallBack }) => {
  return (
    <div
      className={showModal ? 'modal active' : 'modal'}
      onClick={() => setShowModalCallBack(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;