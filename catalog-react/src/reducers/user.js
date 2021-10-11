const defaultState = {};

export default function cart(state = defaultState, action) {
  console.log(action.payload, 'red')
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
}