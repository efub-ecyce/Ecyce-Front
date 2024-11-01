import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafb;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0 1.28125rem;
  box-sizing: border-box;

  position: relative;
`;

export const Title = styled.div`
  ${font.semibold}
  font-size: 2rem;
`;

export const LogoWrapper = styled.div`
  animation-duration: 1.2s;
`;

export const ButtonWrapper = styled.div`
  width: calc(100% - 2.5625rem);
  position: absolute;
  bottom: 1rem;
`;
