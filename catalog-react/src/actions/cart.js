// export const setGoodsState = items => ({
//   type: 'SET_GOODS',
//   payload: items
// });
export const setCart = payload => ({
  type: 'SET_CART',
  payload
});
export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload
});
export const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload
});