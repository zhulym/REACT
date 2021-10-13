const initialState = {};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return action.payload;
    case 'LOG_OUT':
      return initialState;
    default:
      return state;
  }
}