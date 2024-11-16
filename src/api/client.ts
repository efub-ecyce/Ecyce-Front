import axios from 'axios';
import { postAccessTokenReissue } from './oauth';

export const clientNoAuth = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청 인터셉터 추가
client.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      const parsedToken = JSON.parse(token);
      // 기본적으로 accessToken 사용
      config.headers[
        'Authorization'
      ] = `${parsedToken.grantType} ${parsedToken.accessToken}`;

      // refreshToken이 필요한 특정 엔드포인트에 대해 조건부로 설정
      if (config.url === '/login/oauth2/reissue') {
        config.headers[
          'Authorization'
        ] = `${parsedToken.grantType} ${parsedToken.refreshToken}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

let isReissuingToken = false;

client.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    const { status, data } = response;

    if (config.sent) return Promise.reject(error);
    config.sent = true;

    if (status == 401) {
      switch (data.error) {
        case 'Token Expired':
          if (!isReissuingToken) {
            isReissuingToken = true;
            try {
              await postAccessTokenReissue();
              const token = localStorage.getItem('token');
              const parsedToken = token ? JSON.parse(token) : null;
              if (parsedToken) {
                const newAuth =
                  `${parsedToken.grantType} ${parsedToken.accessToken}`.trim();
                client.defaults.headers.common['Authorization'] = newAuth;
                config.headers.Authorization = newAuth;
              }
              isReissuingToken = false;
              return client(config);
            } catch (error) {
              console.error(error);
              isReissuingToken = false;
              window.location.href = '/login';
              return Promise.reject(error);
            }
          }
          return Promise.reject(error);
        case 'Invalid Token':
          localStorage.removeItem('token');
          window.location.href = '/login';
          alert('장시간 접속하지 않아 로그아웃 되었습니다.');
          return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
