import { React, useState, useEffect } from 'react';

const Training = () => {

    const [type, setType] = useState('Users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
            })
        })
    }, []);

    return (
        <div className="training">
            <h1>Title: {type}</h1>

            <button type="button" onClick={() => setType('users')}>Users</button>
            <button type="button" onClick={() => setType('todos')}>Todos</button>
            <button type="button" onClick={() => setType('posts')}>Posts</button>

            <div>{pos.x}</div>
            <div>{pos.y}</div>

        </div>
    );
}

export default Training;