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

export const createPost = () => {
    return sendRequest('/posts', 'POST');
};