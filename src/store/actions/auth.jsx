import { sleep } from '../../utils';

const loginHasErrored = (bool, message) => ({
  type: 'LOGIN_HAS_ERRORED',
  hasErrored: bool,
  message,
});

const loginLoading = (bool) => ({
  type: 'LOGIN_IS_LOADING',
  isLoading: bool,
});

const loginSuccess = (user) => ({
  type: 'LOGIN_FETCH_DATA_SUCCESS',
  user,
});

// TODO: remove disable eslint after adding fetch
// eslint-disable-next-line no-unused-vars
const authenticate = (user, password) => (dispatch) => {
  dispatch(loginLoading(true));
  // TODO: change to fetch
  sleep(5)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(loginLoading(false));
      return response;
    })
    .then((response) => response.json())
    // TODO: change to corresponding response
    .then((items) => dispatch(loginSuccess({
      token: '123',
      username: user,
      items,
    })))
    .catch(() => dispatch(loginHasErrored(true, 'Authentication failed')));
};

export {
  loginHasErrored,
  loginLoading,
  loginSuccess,
  authenticate,
};
