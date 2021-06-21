import { React, useState, useEffect } from 'react';



const Modal = () => {
    const closeModal = () => document.getElementById('greeting__modal').classList.add('hide__modal');

    const [name, setName] = useState('NoName');
    const editName = () => {
        setName(document.getElementById('modal__input').value);
        if (document.getElementById('modal__input').value !== '') {
            closeModal();
        }
    }


    return (
        <div id="greeting__modal">
            <span className="modal__close-button" onClick={closeModal}>&times;</span>
            <div className="modal-control">
                <label htmlFor="modal__input" className="modal__label">Enter your Name!</label>
                <input id="modal__input" type="text" className="modal__input" />
            </div>
            <button className="modal__submit" onClick={editName}>Ok</button>
        </div>
    )
}

export default Modal