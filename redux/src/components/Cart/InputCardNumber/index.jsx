// libraries
import React, { useState, useRef, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//Components
import Cvv from './Cvv/index';
// styles
import './InputCardNumber.css';

const InputCardNumber = React.forwardRef((props, inputCardNum) => {
  const inputs = [{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 3, name: 3 }, { id: 4, name: 4 }];
  const stripe = useStripe();
  const elements = useElements();
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

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod, event);
    }
  };

  return (
    <div className="input-card">
      <form action="" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {/* <label htmlFor="visa">Visa</label>
        <input onClick={handleChange} id="visa" type="radio" name="card" value="visa" />
        <label htmlFor="master">MasterCard</label>
        <input onClick={handleChange} id="master" type="radio" name="card" value="master" />
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
        <input type="text" min="1" max="12" name="month" value="03" />
        <input type="text" name="year" value="2022" />
        <Cvv typeCard={typeCard} ref={cvvInput} /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default InputCardNumber;
