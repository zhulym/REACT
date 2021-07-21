import { sendRequest } from './index';

export const getPosts = () => {
    return sendRequest('/posts');
};

export const getSinglePost = id => {
    return sendRequest(`/posts/${id}`);
};

export const deletePost = id => {
    return sendRequest(`/posts/${id}`, 'DELETE');
};

export const createPost = (data) => {
    return sendRequest('/posts', 'POST', data);
};

export const updatePost = (id, data) => {
    return sendRequest(`/posts/${id}`, 'PUT', data);
};