import { sendRequest } from './index';

const path = '/login';

export const authUser = (values) => {
  return sendRequest(path, 'POST', values);
};


