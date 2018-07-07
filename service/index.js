import Expo from 'expo';

const { manifest } = Expo.Constants;

const BASE_URL = 'http://countdown.daliu.ca';

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
