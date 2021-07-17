import { sendRequest } from './index';

export const getPosts = () => {
    return sendRequest('/posts');
};

export const getSinglePost = id => {
    return sendRequest(`/posts/${id}`);
};