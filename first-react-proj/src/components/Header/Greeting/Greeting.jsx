import { React, useState, useEffect } from 'react';
import Modal from './Modal/Modal'

const Greeting = () => {
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="greeting__wrap">

            {name && (
                <div className="greeting__container">
                    <p id="greeting__content">Hello, {name}!</p>
                </div>
            )}

            {isModalOpen && <Modal setNameCallback={setName} setIsModalOpen={setIsModalOpen} />}

            {!isModalOpen && (
                <div className="greeting__button-container">
                    <button className="greeting__content-button" onClick={() => setIsModalOpen(true)}>↑ Change Name ↑</button>
                </div>
            )}
        </div >
    )
}

export default Greeting

