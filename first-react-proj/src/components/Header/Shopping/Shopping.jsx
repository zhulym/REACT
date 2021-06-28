import { React, useState, useEffect } from 'react';



const Shopping = () => {

    const [commonCounter, setCommonCounter] = useState(0);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [isDisabled1, setIsDisabled1] = useState('disabled');
    const [isDisabled2, setIsDisabled2] = useState('disabled');
    const [isDisabled3, setIsDisabled3] = useState('disabled');
    const [isDisabled4, setIsDisabled4] = useState('disabled');

    const [isDisabled, setIsDisabled] = useState('disabled');

    useEffect(() => {
        (count1 > 0) ? setIsDisabled1('') : setIsDisabled1('disabled');
        (count2 > 0) ? setIsDisabled2('') : setIsDisabled2('disabled');
        (count3 > 0) ? setIsDisabled3('') : setIsDisabled3('disabled');
        (count4 > 0) ? setIsDisabled4('') : setIsDisabled4('disabled');
    });

    useEffect(() => {
        if (count1 === 1 || count2 === 1 || count3 === 1 || count4 === 1) {
            setCommonCounter(commonCounter + 1);
        }
    }, [count1, count2, count3, count4]);


    const [showShoppingItem1, setShowShoppingItem1] = useState(true);
    const [showShoppingItem2, setShowShoppingItem2] = useState(true);
    const [showShoppingItem3, setShowShoppingItem3] = useState(true);
    const [showShoppingItem4, setShowShoppingItem4] = useState(true);

    function cleanShoppingValues() {
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
        setCommonCounter(0);
    }

    useEffect(() => {
        if (!showShoppingItem1 && !showShoppingItem2 && !showShoppingItem3 && !showShoppingItem4) {
            setIsDisabled('');
        }
    });

    return (
        <div className="shopping__container">
            <div className="shopping__header align-items-center">
                <span className="shopping__header-item">
                    <i class="bi bi-cart-check-fill"></i>
                </span>
                <span className="shopping__counter">{commonCounter}</span>
                <span>Items</span>
            </div>


            <div className="shopping__main-buttons">
                <button class="btn btn-success m-2  margin-left" onClick={cleanShoppingValues}><i class="bi bi-arrow-repeat"></i></button>
                <button class="btn btn-primary m-2" disabled={isDisabled} onClick={() => window.location.reload()}><i class="bi bi-recycle"></i></button>
            </div>



            <div className="shopping__items">
                {showShoppingItem1 && (
                    <div className="shopping__items-buttons">
                        <span className="shopping__amount margin-right">{count1}</span>
                        <button class="btn btn-secondary" onClick={() => setCount1(count1 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                        <button class="btn btn-info m-2" disabled={isDisabled1} onClick={() => setCount1(count1 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                        <button class="btn btn-danger" onClick={() => setShowShoppingItem1(false)}><i class="bi bi-trash-fill"></i></button>
                    </div>
                )}

                {showShoppingItem2 && (
                    <div className="shopping__items-buttons">
                        <span className="shopping__amount margin-right">{count2}</span>
                        <button class="btn btn-secondary" onClick={() => setCount2(count2 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                        <button class="btn btn-info m-2" disabled={isDisabled2} onClick={() => setCount2(count2 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                        <button class="btn btn-danger" onClick={() => setShowShoppingItem2(false)}><i class="bi bi-trash-fill"></i></button>
                    </div>
                )}

                {showShoppingItem3 && (
                    <div className="shopping__items-buttons">
                        <span className="shopping__amount margin-right">{count3}</span>
                        <button class="btn btn-secondary" onClick={() => setCount3(count3 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                        <button class="btn btn-info m-2" disabled={isDisabled3} onClick={() => setCount3(count3 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                        <button class="btn btn-danger" onClick={() => setShowShoppingItem3(false)}><i class="bi bi-trash-fill"></i></button>
                    </div>
                )}

                {showShoppingItem4 && (
                    <div className="shopping__items-buttons">
                        <span className="shopping__amount margin-right">{count4}</span>
                        <button class="btn btn-secondary" onClick={() => setCount4(count4 + 1)}><i class="bi bi-plus-circle-fill"></i></button>
                        <button class="btn btn-info m-2" disabled={isDisabled4} onClick={() => setCount4(count4 - 1)}><i class="bi bi-dash-circle-fill"></i></button>
                        <button class="btn btn-danger" onClick={() => setShowShoppingItem4(false)}><i class="bi bi-trash-fill"></i></button>
                    </div>
                )}
            </div>

        </div >
    )
}


export default Shopping