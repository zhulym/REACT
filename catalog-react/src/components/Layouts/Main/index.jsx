//libraries
import React, { useState, useCallback, useEffect } from 'react';
import { getGoods } from '../../../api/goods';
//components
import ProductCard from "./ProductCard/index";
//styles
import './Main.scss';

const Main = () => {
  const [goods, setGoods] = useState([]);

  const fetchGoods = useCallback(async () => {
    try {
      const goodsData = (await getGoods()) || [];
      setGoods(goodsData);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchGoods();
  }, [fetchGoods]);

  console.log(goods)

  return (
    <div className="main__content">
      {goods.map(good => (
        <ProductCard
          key={good.id}
          img={good.img}
          title={good.title}
          description={good.title}
          price={good.price}
        />
      ))}
    </div>
  );
}

export default Main;