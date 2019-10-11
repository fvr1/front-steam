
const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return {
        type: 'error',
        text: action.payload.message,
      };
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.payload.isLoading;
    default:
      return state;
  }
};

export {
  messageReducer,
  loadingReducer,
};
