
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export {
  // eslint-disable-next-line import/prefer-default-export
  sleep,
};
