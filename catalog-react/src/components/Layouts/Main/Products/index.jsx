//libraries
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//api
import { getGoods } from '../../../../api/goods';
//actions
import { setGoodsState } from '../../../../actions/cart';
//components
import ProductCard from "../ProductCard/index";
//styles
import '../Products/Products.scss';

const Products = () => {

  const dispatch = useDispatch();
  const goodsState = useSelector((state) => state.cart);

  const fetchGoods = useCallback(async () => {
    try {
      const goodsData = (await getGoods()) || [];
      dispatch(setGoodsState(goodsData));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchGoods();
  }, [fetchGoods]);

  return (
    <div className="products__content">
      {goodsState.map(good => (
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

export default Products;