const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const sendRequest = async (
    path,
    query,
    method = 'GET',
    body = {},
    headers = {},
) => {
    const requestUrl = `${baseUrl}${path}&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    const options = {
        method,
        mode: 'cors',
        headers: {
            ...headers,
        }
    };

    if (method === 'POST' || method === 'PUT') {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(requestUrl, options);
    const contentType = response.headers.get('Content-Type');

    if (contentType === 'application/json') {
        return await response.json();
    }

    throw new Error('Unexpected content type');
};