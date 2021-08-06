import { sendRequest } from './index';

export const getImages = data => {
    return sendRequest('/services/rest/?method=flickr.photos.search', data);
};