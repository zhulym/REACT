export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat([action.text])
    case 'DELETE_TODO':
      return state.filter((item, index) => index !== action.index)
    default:
      return state
  }
}