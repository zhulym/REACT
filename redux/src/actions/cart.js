export const addGood = id => ({
	type: 'ADD_GOOD_TO_CART',
	payload: id
});

export const delGood = id => ({
	type: 'DEL_GOOD_FROM_CART',
	payload: id
});

export const incrGood = id => ({
	type: 'INCR_GOOD',
	payload: id
});

export const decrGood = id => ({
	type: 'DECR_GOOD',
	payload: id
});
