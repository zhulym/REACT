import { store } from '../configureStore';
const baseUrl = process.env.REACT_APP_API_URL;

const processResponse = (response, res) => new Promise((resolve, reject) => {
    if (response.status === 200) {
        return resolve(res);
    } else {
        return reject(res);
    }
});

export const sendRequest = async (
    path,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}${path}`;
    const authHeader = (!path.includes('/login') ? { Authorization: store.getState().user.token } : {})
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...authHeader,
            ...headers,
        }
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);

    const contentType = response.headers.get('Content-Type');

    if (contentType.includes('application/json')) {
        const res = await response.json();
        return processResponse(response, res);
    }

    throw new Error('Unexpected content type');
};