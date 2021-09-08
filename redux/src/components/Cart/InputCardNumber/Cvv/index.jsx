// libraries
import React from 'react';
// styles
import './Cvv.css';

const Cvv = React.forwardRef(({ typeCard }, inputEl) => {

  return (
    <div className="input-card">
      <div className="cvv-black"></div>
      <label htmlFor="cvv" className="label-cvv">CVV</label>
      <input ref={inputEl} type="text" maxLength={typeCard === 'master' ? 4 : 3} />
    </div>
  );
});

export default Cvv;