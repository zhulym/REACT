const defaultState = [];

export default function cart(state = defaultState, action) {
  switch (action.type) {
    case 'SET_GOODS':
      return action.payload;
    default:
      return state;
  }
}