// libraries
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//components
import InputCardNumber from './InputCardNumber/index';
//actions
import { delGood, incrGood, decrGood } from '../../actions/cart';
// styles
import './Cart.css';

const Cart = () => {
    let getAmount = 0;
    const inputCardNum = useRef([]);
    const dispatch = useDispatch();
    const goodsState = useSelector(({ cartReduser }) => cartReduser);
    const countAll = () => {
        goodsState.forEach(el => getAmount += el.count * Number(el.price.slice(0, el.price.length - 1)));
        console.log(`${getAmount}$`);
        getAmount = 0;
        inputCardNum.current[0].focus();
        console.log(inputCardNum);
        console.log(inputCardNum.current);
    };

    return (
        <div className="cart">
            {goodsState.map(item => {
                if (item.count) {
                    return (
                        <div key={item.id}>
                            <span>{item.good}  ---</span>
                            <span>amount:</span>
                            <button type="button" onClick={() => dispatch(decrGood(item.id))}>-</button>
                            {item.count}
                            <button type="button" onClick={() => dispatch(incrGood(item.id))}>+</button>
                            <button type="button" onClick={() => dispatch(delGood(item.id))}>Delete</button>
                        </div>
                    );
                }
            })}
            <button type="button" onClick={countAll}>BUY NOW</button>
            <InputCardNumber ref={inputCardNum} getAmount={getAmount} />
        </div>
    );
};

export default Cart;