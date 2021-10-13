import { sendRequest } from './index';

// const headers = { authorization: 'asd' };

export const getGoods = () => {
    return sendRequest('/products');
};
export const addGood = data => {
    return sendRequest('/product-add', 'POST', data);
};
export const removeGood = data => {
    return sendRequest('/product-remove', 'POST', data);
};
export const getCart = () => {
    return sendRequest('/cart');
};



// export const getSinglePost = id => {
//     return sendRequest(`${baseUrl}/posts/${id}`);
// };

// export const deletePost = id => {
//     return sendRequest(`${baseUrl}/posts/${id}`, 'DELETE');
// };

// export const createPost = (data) => {
//     return sendRequest(`${baseUrl}/posts`, 'POST', data);
// };

// export const updatePost = (id, data) => {
//     return sendRequest(`${baseUrl}/posts/${id}`, 'PUT', data);
// };
