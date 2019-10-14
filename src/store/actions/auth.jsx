import { postAuth, generateToken } from '../../utils';
import { isLoading, hasErrored } from './general';


const loginSuccess = (user) => ({
  type: 'LOGIN_FETCH_DATA_SUCCESS',
  payload: {
    user,
  },
});

const logout = () => ({
  type: 'LOGOUT',
  payload: {},
});

const register = (user, password, confirmPassword) => async (dispatch) => {
  dispatch(isLoading(true));
  const body = {
    user: {
      password,
      username: user,
      confirm_password: confirmPassword,
    },
  };
  const jwt = generateToken();
  postAuth('/signup', body, jwt)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      return response;
    })
    .then(async (response) => {
      const { headers } = response;
      const responseBody = await response.json();
      return { headers, body: responseBody };
    })
    .then((data) => dispatch(loginSuccess({
      token: data.headers.get('Authorization'),
      sessionId: jwt,
      username: data.body.username,
      id: data.body.id,
    })))
    .catch(() => dispatch(hasErrored(true, 'Authentication failed')));
  dispatch(isLoading(false));
};

const authenticate = (user, password) => async (dispatch) => {
  dispatch(isLoading(true));
  const body = {
    user: {
      password,
      username: user,
    },
  };
  const jwt = generateToken();
  postAuth('/login', body, jwt)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      return response;
    })
    .then(async (response) => {
      const { headers } = response;
      const responseBody = await response.json();
      return { headers, body: responseBody };
    })
    .then((data) => dispatch(loginSuccess({
      token: data.headers.get('Authorization'),
      sessionId: jwt,
      username: data.body.username,
      id: data.body.id,
    })))
    .catch(() => dispatch(hasErrored(true, 'Authentication failed')));
  dispatch(isLoading(false));
};

export {
  loginSuccess,
  authenticate,
  logout,
  register,
};
