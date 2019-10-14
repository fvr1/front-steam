const AUTH_URL = 'http://localhost:3000/api/v1';

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const postAuth = (route, body) => (
  fetch(`${AUTH_URL}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
);

export {
  sleep,
  postAuth,
};
