export const setUserData = user => ({
  type: 'LOG_IN',
  payload: user
});

export const logoutUser = () => ({
  type: 'LOG_OUT',
});