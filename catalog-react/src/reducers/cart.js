const initialState = {
  order: [],
  status: ''
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    // case 'SET_GOODS':
    //   return action.payload;
    case 'SET_CART':
      return action.payload;
    case 'ADD_TO_CART':
      return {
        ...state,
        order: [
          ...state.order,
          action.payload
        ]
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: [
          ...state.order.filter(item => {
            return item.id !== action.payload;
          })
        ]
      };
    default:
      return state;
  }
}