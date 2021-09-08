// libraries
import React, { useState, useRef, useEffect } from 'react';
//Components
import Cvv from './Cvv/index';
// styles
import './InputCardNumber.css';

const InputCardNumber = React.forwardRef((props, inputCardNum) => {
  const inputs = [{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 3, name: 3 }, { id: 4, name: 4 }];

  const [typeCard, setTypeCard] = useState('');
  const cvvInput = useRef(null);

  const handleChange = (e) => {
    cvvInput.current.value = '';
    e.target.value === 'master' ? setTypeCard('master') : setTypeCard('visa');
    inputCardNum.current.map(el => el.value = '');
  }

  const handleCardChange = (i) => {
    let currentLength = inputCardNum.current[i].value.length;
    if (currentLength === 4) {
      const inputToFocus = inputCardNum.current.find(el => !el.value);
      if (!inputToFocus) return;
      inputToFocus.focus();
    }
  }

  return (
    <div className="input-card">
      <label htmlFor="visa">Visa</label>
      <input onClick={(e) => handleChange(e)} id="visa" type="radio" name="card" checked value="visa" />
      <label htmlFor="master">MasterCard</label>
      <input onClick={(e) => handleChange(e)} id="master" type="radio" name="card" value="master" />
      <br />
      <div className="card-wrap">
        {inputs.map((input, i) => (
          <input
            key={input.id}
            ref={el => inputCardNum.current[i] = el}
            id={input.id}
            type="text"
            maxLength="4"
            name={input.name}
            className="card-number"
            onChange={() => handleCardChange(i)}
          />
        ))}
      </div>
      <Cvv typeCard={typeCard} ref={cvvInput} />
    </div>
  );
});

export default InputCardNumber;
