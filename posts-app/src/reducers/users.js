const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS_DATA':
      return state = action.payload;
    default:
      return state;
  }
}