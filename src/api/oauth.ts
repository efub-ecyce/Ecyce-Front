import { clientNoAuth, client } from './client';

const CLIENT_ID = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
const REDIRECT_URI = `${process.env.REACT_APP_FRONT_URL}/login/oauth2/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const getAccessTokenKakao = async (code: string) => {
  try {
    const response = await clientNoAuth.get(`/login/oauth2/kakao`, {
      params: { code: code },
    });
    const token = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };
    localStorage.setItem('token', JSON.stringify(token));
    return response;
  } catch (error) {
    throw error;
  }
};

export const postAccessTokenReissue = async () => {
  try {
    const response = await client.post(`/login/oauth2/reissue`);
    const newToken = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };

    localStorage.setItem('token', JSON.stringify(newToken));

    console.log('토큰 재발급 응답 ', response);

    return response;
  } catch (error) {
    throw error;
  }
};
