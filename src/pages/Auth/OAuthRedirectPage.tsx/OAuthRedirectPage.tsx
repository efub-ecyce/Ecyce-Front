import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessTokenKakao } from '../../../api/oauth';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../store/userInfoAtom';
import { getUserInfo } from '../../../api/user';

const OAuthRedirectPage = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const setUserInfo = useSetRecoilState(userState);

  const readAccessTokenKakao = async () => {
    try {
      if (code) {
        const response = await getAccessTokenKakao(code);
        const userInfo = await getUserInfo();
        setUserInfo({
          userId: userInfo.userId,
          name: userInfo.name,
          nickname: userInfo.nickname,
        });
        response.data.isNewUser ? navigate('/signup') : navigate('/');
        return;
      }
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  };

  useEffect(() => {
    readAccessTokenKakao();
  }, []);

  return <Container>loading...</Container>;
};

export default OAuthRedirectPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafb;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
