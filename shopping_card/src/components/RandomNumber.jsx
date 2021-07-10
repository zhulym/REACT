import React from 'react';


const RandomNumber = (props) => {

    const randomNum = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    return (
        <div>
            {randomNum}
        </div>

    )
}

export default RandomNumber;