
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_FETCH_DATA_SUCCESS':
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;
