import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16.25rem;
  height: 9.75rem;
  align-items: flex-start;
  padding: 1.2rem 1.5rem 0.62rem 1.5rem;
  box-sizing: border-box;
  border-radius: 0.625rem;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(61, 73, 70, 0.2);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.69rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.div`
  ${font.bold}
  color: var(--black02);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const Content = styled.div`
  ${font.medium}
  color: var(--gray01);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  width: 13.375rem;
  height: 3.375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.3rem;
`;

export const Score = styled.div`
  ${font.bold}
  color: var(--gray01);
  font-size: 13px;
  font-style: normal;
  font-weight: 7400;
  line-height: 150%;
`;
