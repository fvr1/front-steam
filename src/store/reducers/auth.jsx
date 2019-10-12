
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_FETCH_DATA_SUCCESS':
      return {
        logged: true,
        ...action.payload.user,
      };
    case 'LOGOUT':
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
