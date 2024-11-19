/*
Auth HOC 사용법

1. props
(1-1) Page - 이동하려는 페이지 컴포넌트
(1-2) user - 'all'(모든 사용자), 'login'(로그인 사용자만), 'logout'(비로그인 사용자만)
예시: <Auth Page={HomePage} user='login' />
*/

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAccessTokenReissue } from '../api/oauth';

interface AuthProps {
  Page: () => JSX.Element;
  option: string;
}

const Auth = ({ Page, option }: AuthProps) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkIsLogin = async () => {
      const token = JSON.parse(localStorage.getItem('token') ?? 'null');
      if (token) {
        if (new Date().getTime() > token.expiresIn) {
          try {
            await postAccessTokenReissue();
            setIsLogin(true);
          } catch (error) {
            console.error(error);
            setIsLogin(false);
          }
        } else {
          setIsLogin(true);
        }
      } else {
        setIsLogin(false);
      }
      setIsLoading(false);
    };

    checkIsLogin();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      switch (option) {
        case 'all':
          break;
        case 'login':
          if (!isLogin) {
            // alert('로그인 후 이용해주세요.');
            // navigate(-1);
            return;
          }
          break;
        case 'logout':
          if (isLogin) {
            navigate(-1);
            return;
          }
          break;
        default:
          navigate(-1);
      }
    }
  }, [isLoading, isLogin, navigate, option]);

  if (isLoading) {
    return <Container>loading...</Container>;
  }

  return <Page />;
};

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

export default Auth;
