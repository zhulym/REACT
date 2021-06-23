import { React, useState, useEffect } from 'react';

const Modal = ({ setNameCallback, setIsModalOpen }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        setNameCallback(event.target.name.value);
        setIsModalOpen(false);
    }

    return (

        <div className="greeting__modal">

            <span className="modal__close-button" onClick={() => setIsModalOpen(false)}>&times;</span>

            <form onSubmit={handleSubmit}>
                <div className="modal-control">
                    <label htmlFor="modal__input" className="modal__label">Enter your Name!</label>
                    <input id="modal__input" type="text" className="modal__input" name="name" />
                </div>
                <button type="submit" className="modal__submit" onSubmit={handleSubmit}>Ok</button>
            </form>

        </div>
    )
}

export default Modal