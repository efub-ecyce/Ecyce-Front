import { clientNoAuth, client } from './client';

const CLIENT_ID = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
const FRONT_DOMAIN = `http://localhost:3000`;
const REDIRECT_URI = `${FRONT_DOMAIN}/login/oauth2/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const getAccessTokenKakao = async (code: string) => {
  try {
    const response = await clientNoAuth.get(`/login/oauth2/kakao`, {
      params: { code: code },
    });
    const token = {
      accessToken: response.data.accessToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };
    localStorage.setItem('token', JSON.stringify(token));
    return response;
  } catch (error) {
    localStorage.removeItem('token');
    throw error;
  }
};

export const postAccessTokenReissue = async () => {
  try {
    const response = await client.post(`/login/oauth2/reissue`);
    const token = {
      accessToken: response.data.accessToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };

    localStorage.setItem('token', JSON.stringify(token));
    return response;
  } catch (error) {
    localStorage.removeItem('token');
    throw error;
  }
};
