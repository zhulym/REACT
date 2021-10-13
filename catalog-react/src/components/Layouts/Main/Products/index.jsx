//libraries
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//api
import { getGoods, addGood } from '../../../../api/goods';
//actions
import { addToCart } from '../../../../actions/cart';
//components
import ProductCard from "../ProductCard/index";
//styles
import '../Products/Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const addProductToCart = async (id, item) => {
    try {
      await addGood({ id: id });
      dispatch(addToCart(item));
    } catch (error) {
      console.log(error)
    }
  }

  const fetchGoods = useCallback(async () => {
    try {
      const goodsData = await getGoods() || [];
      setProducts(goodsData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchGoods();
  }, [fetchGoods]);

  return (
    <div className="products__content">
      {products.map(good => (
        <ProductCard
          item={good}
          key={good.id}
          id={good.id}
          img={good.img}
          title={good.title}
          description={good.title}
          price={good.price}
          addProductToCartCallBack={addProductToCart}
        />
      ))}
    </div>
  );
}

export default Products;