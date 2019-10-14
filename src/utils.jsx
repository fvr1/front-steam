
const AUTH_URL = 'http://ec2-18-221-254-127.us-east-2.compute.amazonaws.com';

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const rand = () => Math.random().toString(36).substr(2);

const generateToken = () => rand() + rand();

const postAuth = (route, body, jwt) => (
  fetch(`${AUTH_URL}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      JWT_AUD: jwt,
    },
    body: JSON.stringify(body),
  })
);

export {
  sleep,
  postAuth,
  generateToken,
};
