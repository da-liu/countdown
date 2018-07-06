import Expo from 'expo';

const { manifest } = Expo.Constants;

const BASE_URL = 'https://5b3f94fcaec5fc0014c8f66d.mockapi.io';

const service = (resource, method, body = null) => {
  return fetch(`${BASE_URL}/${resource}/`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    method,
    body
  });
};

export default service;
