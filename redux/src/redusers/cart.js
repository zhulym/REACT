const defaultState = [
	{ id: 1, good: 'Dog', price: '5$', count: 0 },
	{ id: 2, good: 'Cat', price: '7$', count: 0 },
	{ id: 3, good: 'Bird', price: '4$', count: 0 }
];


export default function cartReduser(state = defaultState, action) {

	switch (action.type) {
		case 'ADD_GOOD_TO_CART':
			state.map(item => item.id === action.payload + 1 ? item.count = 1 : item);
			return state;
		case 'DEL_GOOD_FROM_CART':
			state.map(item => item.id === action.payload ? item.count = 0 : item);
			state.filter(item => item.id !== action.payload);
			return state;
		case 'INCR_GOOD_FROM_CART':
			state.map(item => item.id === action.payload && item.count > 0 ? item.count-- : item);
			return state;
		case 'DECR_GOOD_FROM_CART':
			state.map(item => item.id === action.payload ? item.count++ : item);
			return state;
		default:
			return state;
	}
}