import { React, useState, useEffect } from 'react';

const Shopping = () => {
    const [commonCount, setCommonCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    useEffect(() => {
        console.log("count2 changed!");


    }, [count2]);


    return (
        <div className="shopping__container">
            <div className="shopping__header align-items-center">
                <span className="shopping__header-item">
                    <i class="bi bi-cart-check-fill"></i>
                </span>

                <span className="shopping__counter">0</span>
                <span>Items</span>
            </div>

            <div className="shopping__main-buttons">
                <button class="btn btn-success m-2"><i class="bi bi-arrow-repeat"></i></button>
                <button class="btn btn-primary m-2" disabled=""><i class="bi bi-recycle"></i></button>
            </div>
            <div className="shopping__items">

                <div className="shopping__items-buttons">
                    <span className="shopping__amount margin-right">{count1}</span>
                    <button class="btn btn-secondary" onClick={() => setCount1(count1 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                    <button class="btn btn-info m-2" disabled="" onClick={() => setCount1(count1 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
                <div className="shopping__items-buttons">
                    <span className="shopping__amount margin-right">{count2}</span>
                    <button class="btn btn-secondary" onClick={() => setCount2(count2 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                    <button class="btn btn-info m-2" disabled="" onClick={() => setCount2(count2 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
                <div className="shopping__items-buttons">
                    <span className="shopping__amount margin-right">{count3}</span>
                    <button class="btn btn-secondary" onClick={() => setCount3(count3 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                    <button class="btn btn-info m-2" disabled="" onClick={() => setCount3(count3 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
                <div className="shopping__items-buttons">
                    <span className="shopping__amount margin-right">{count4}</span>
                    <button class="btn btn-secondary" onClick={() => setCount4(count4 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                    <button class="btn btn-info m-2" disabled="" onClick={() => setCount4(count4 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                    <button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                </div>
            </div>



        </div >
    )
}



export default Shopping