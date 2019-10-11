
const loginHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
};

const loginIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

const loginOnSuccess = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_FETCH_DATA_SUCCESS ':
      return action.items;
    default:
      return state;
  }
};

export {
  loginOnSuccess,
  loginHasErrored,
  loginIsLoading,
};
