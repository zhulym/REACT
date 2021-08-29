// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//actions
import { delGood, incrGood, decrGood } from '../../actions/cart'
// styles
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const goodsState = useSelector(({ cartReduser }) => cartReduser);

  let getAmount = null;
  const countAll = () => {
    goodsState.forEach(el => {
      debugger; // eslint-disable-line no-debugger
      getAmount += el.count * Number(el.price.slice(0, el.price.length - 1));
    });
    console.log(`${getAmount}$`);
  }

  return (
    <div className="cart">
      {goodsState.map(item => {
        if (item.count) {
          return (
            <div key={item.id}>
              <span>{item.good}  ---</span>
              <span>amount:</span>
              <button type="button" onClick={() => dispatch(incrGood(item.id))}>-</button>
              {item.count}
              <button type="button" onClick={() => dispatch(decrGood(item.id))}>+</button>
              <button type="button" onClick={() => dispatch(delGood(item.id))}>Delete</button>
            </div>
          )
        }
      })}
      <Link to="/"><button type="button" onClick={countAll}>BUY NOW</button></Link>
    </div>
  );
};

export default Cart;