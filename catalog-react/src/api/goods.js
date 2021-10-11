import { sendRequest } from './index';

const headers = { authorization: 'asd' };
const baseUrl = 'http://localhost:5000/api/v1';

export const getGoods = () => {
    return sendRequest(`${baseUrl}/products`, 'GET', {}, headers);
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

// export const getUser = () => {
//     return sendRequest(`${baseUrl}/users`);
// };
// export const getUserPhotos = () => {
//     return sendRequest(`https://api.flickr.com${photoPath}&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=cats&per_page=10&format=json&nojsoncallback=1`);
// };