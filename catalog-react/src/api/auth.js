import { sendRequest } from './index';

const path = '/login';

export const authUser = (data) => {
  return sendRequest(path, 'POST', data);
};


