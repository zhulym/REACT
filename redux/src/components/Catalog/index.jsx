// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//actions
import { addGood } from '../../actions/cart';
// styles
import './Catalog.css';

const Catalog = () => {
    const dispatch = useDispatch();
    const goodsState = useSelector(({ cartReduser }) => cartReduser);

    return (
        <div className="catalog">
            {goodsState.map((item, i) => {
                return (
                    <div key={item.id}>
                        {i + 1}. {item.good} --- {item.price}
                        <button onClick={() => dispatch(addGood(item.id))} type="button">Add to Cart</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Catalog;