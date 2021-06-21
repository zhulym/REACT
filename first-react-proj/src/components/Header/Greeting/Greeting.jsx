import { React, useState, useEffect } from 'react';
import Modal from './Modal/Modal'
import name from './Modal/Modal'

const Greeting = () => {

    const changeName = () => document.getElementById('greeting__modal').classList.remove('hide__modal');

    return (
        <div className="greeting__wrap">
            <div className="greeting__container">
                <p id="greeting__content">Hello, {name}!</p>
            </div>
            <div className="greeting__button-container">
                <button className="greeting__content-button" onClick={changeName}>↑ Change Name ↑</button>
            </div>

            <Modal />
        </div>
    )
}

export default Greeting