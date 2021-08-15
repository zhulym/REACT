import { sendRequest } from './index';

const baseUrl = process.env.REACT_APP_API_URL;
const photoPath = '/services/rest/?method=flickr.photos.search';

export const getPosts = () => {
    return sendRequest(`${baseUrl}/posts`);
};

export const getSinglePost = id => {
    return sendRequest(`${baseUrl}/posts/${id}`);
};

export const deletePost = id => {
    return sendRequest(`${baseUrl}/posts/${id}`, 'DELETE');
};

export const createPost = (data) => {
    return sendRequest(`${baseUrl}/posts`, 'POST', data);
};

export const updatePost = (id, data) => {
    return sendRequest(`${baseUrl}/posts/${id}`, 'PUT', data);
};

export const getUser = () => {
    return sendRequest(`${baseUrl}/users`);
};
export const getUserPhotos = () => {
    return sendRequest(`https://api.flickr.com${photoPath}&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=cats&per_page=10&format=json&nojsoncallback=1`);
};