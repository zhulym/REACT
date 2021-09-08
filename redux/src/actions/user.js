export const setUserData = userData => ({
    type: 'LOGIN',
    payload: userData
});

export const logoutUser = () => ({
    type: 'LOGOUT',
});