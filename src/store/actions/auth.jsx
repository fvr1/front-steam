import { sleep } from '../../utils';
import { isLoading } from './general';


const loginSuccess = (user) => ({
  type: 'LOGIN_FETCH_DATA_SUCCESS',
  payload: {
    user,
  },
});

// TODO: remove disable eslint after adding fetch
// eslint-disable-next-line no-unused-vars
const authenticate = (user, password) => async (dispatch) => {
  dispatch(isLoading(true));
  // TODO: change to fetch real
  await sleep(1000);
  dispatch(isLoading(false));

  dispatch(loginSuccess({ username: user, token: 'hola' }));

  // fetch('url')
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     dispatch(isLoading(false));
  //     return response;
  //   })
  //   .then((response) => response.json())
  //   // TODO: change to corresponding response
  //   .then((userResponse) => dispatch(loginSuccess({
  //     ...userResponse,
  //     username: user,
  //   })))
  //   .catch(() => dispatch(hasErrored(true, 'Authentication failed')));
};

export {
  loginSuccess,
  authenticate,
};
