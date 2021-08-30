const defaultState = [
	{ id: 1, good: 'GOOD-1', price: '5$', count: 0 },
	{ id: 2, good: 'GOOD-2', price: '7$', count: 0 },
	{ id: 3, good: 'GOOD-3', price: '4$', count: 0 }
];

export default function cartReduser(state = defaultState, action) {

	switch (action.type) {
		case 'ADD_GOOD_TO_CART':
			return state.map(item => item.id === action.payload ? { ...item, count: 1 } : item);

		case 'DEL_GOOD_FROM_CART':
			return state.map(item => item.id === action.payload ? { ...item, count: 0 } : item);

		case 'DECR_GOOD':
			return state.map(item => item.id === action.payload && item.count > 0 ? { ...item, count: item.count - 1 } : item);

		case 'INCR_GOOD':
			return state.map(item => item.id === action.payload ? { ...item, count: item.count + 1 } : item);

		default:
			return state;
	}
}