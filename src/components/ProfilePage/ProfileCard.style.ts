import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  width: 100%;
  height: 38vh;
  background: #8fcbc1;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.94rem;

  padding: 2rem 1.28125rem;
  box-sizing: border-box;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1.28125rem;
  top: 0;
  flex-shrink: 0;
  z-index: 1;
`;

export const Btn = styled.div`
  cursor: pointer;
  z-index: 1;
`;

export const ChatAndShare = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.81rem;
  z-index: 1;
`;

export const BackgroundLogo = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2.5rem;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  flex-shrink: 0;
  margin-bottom: 1rem;
`;

export const ProfileImg = styled.img`
  width: 5.5625rem;
  height: 5.5625rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.div`
  ${font.extrabold}
  color: var(--Grayscale-white, #FFF);
  font-size: 35px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;

  margin-left: 1rem;
`;

export const Bio = styled.div`
  ${font.semibold}
  color: #F0FEF9;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  width: 70%;
`;

export const StarScore = styled.div`
  ${font.extrabold}
  color: var(--Grayscale-white, #FFF);
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  width: 8.25rem;
  height: 8.25rem;
  flex-shrink: 0;
`;

export const StarsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 12.4375rem;
  height: 2.375rem;
  flex-shrink: 0;
  gap: 0.69rem;
  margin-top: 1rem;
`;
