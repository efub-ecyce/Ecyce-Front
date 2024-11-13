import axios from 'axios';
import { postAccessTokenReissue } from './oauth';

const token = localStorage.getItem('token');
const parsedToken = token ? JSON.parse(token) : null;
const auth = token
  ? `${parsedToken.grantType} ${parsedToken.accessToken}`
  : null;

export const clientNoAuth = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: auth,
  },
  withCredentials: true,
});

client.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    const { status, data } = response;

    if (config.sent) return Promise.reject(error);
    config.sent = true;

    switch (status) {
      case 401:
        switch (data.error) {
          case 'Token Expired':
            try {
              await postAccessTokenReissue();
              const token = localStorage.getItem('token');
              const parsedToken = token ? JSON.parse(token) : null;
              client.defaults.headers.Authoriztion = `${parsedToken.grantType} ${parsedToken.accessToken}`;

              config.headers.Authorization = `${parsedToken.grantType} ${parsedToken.accessToken}`;
              return client(config);
            } catch (error) {
              localStorage.removeItem('token');
              window.location.href = '/login';
              return Promise.reject(error);
            }
          case 'Invalid Token':
            localStorage.removeItem('token');
            window.location.href = '/login';
            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
  },
);
