import { React, useState } from 'react';

const shoppingItems = [
    {
        id: '1',
        count: 0
    },
    {
        id: '2',
        count: 0
    },
    {
        id: '3',
        count: 0
    },
    {
        id: '4',
        count: 0
    }
];


const Shopping = () => {

    const [items, setItems] = useState(shoppingItems);

    // const amountShoppingItems = items.filter(item => item.count);

    const removeItem = id => {};

    const setShoppingItems = (id, direction) => {
        setItems( () => {

            return items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        count:
                            direction === 'increment'
                                ? (item.count + 1)
                                : (item.count - 1)
                    }
                    : item
            );
        });
    };

    return (
        <div className="shopping__container">
            <div className="shopping__header align-items-center">
                <span className="shopping__header-item">
                    <i class="bi bi-cart-check-fill"></i>
                </span>
                <span className="shopping__counter"></span>
                <span>Items</span>
            </div>


            <div className="shopping__main-buttons">
                <button class="btn btn-success m-2  margin-left" onClick={() => setItems(shoppingItems)}><i class="bi bi-arrow-repeat"></i></button>
                <button class="btn btn-primary m-2" onClick={() => window.location.reload()}><i class="bi bi-recycle"></i></button>
            </div>

            <div className="shopping__items">

                {items.map(item => (

                    <div className="shopping__items-buttons" key={item.id}>
                        <span className="shopping__amount margin-right">{item.count > 0 ? item.count : 'Zero'}</span>
                        <button class="btn btn-secondary" onClick={() => setShoppingItems(item.id, 'increment')}><i class="bi bi-plus-circle-fill"></i></button>
                        <button class="btn btn-info m-2" disabled={item.count === 0 ? 'disabled' : ''} onClick={() => setShoppingItems(item.id, 'decrement')}><i class="bi bi-dash-circle-fill"></i></button>
                        <button class="btn btn-danger" onClick={() => removeItem(item.id)}><i class="bi bi-trash-fill"></i></button>
                    </div>

                ))}

            </div>

        </div >
    )
}

export default Shopping
