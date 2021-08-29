export const addGood = i => ({
	type: 'ADD_GOOD_TO_CART',
	payload: i
});

export const delGood = id => ({
	type: 'DEL_GOOD_FROM_CART',
	payload: id
});
export const incrGood = id => ({
	type: 'INCR_GOOD_FROM_CART',
	payload: id
});
export const decrGood = id => ({
	type: 'DECR_GOOD_FROM_CART',
	payload: id
});
