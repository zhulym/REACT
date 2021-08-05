import { generateQueryString, sendRequest } from './index';

export const getImages = data => {
    const queryString = generateQueryString(data);

    return sendRequest('/stallone', queryString);
};