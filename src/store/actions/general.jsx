const hasErrored = (bool, message) => ({
  type: 'HAS_ERRORED',
  payload: {
    hasErrored: bool,
    message,
  },
});

const isLoading = (bool) => ({
  type: 'IS_LOADING',
  payload: {
    isLoading: bool,
  },
});

export {
  isLoading,
  hasErrored,
};
