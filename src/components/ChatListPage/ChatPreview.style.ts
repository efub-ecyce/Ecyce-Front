import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 5.125rem;
  padding: 0.69rem 1.25rem;
  box-sizing: border-box;
`;

export const ProfileImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 0.81rem;

  flex-grow: 1;
  overflow: hidden;
`;

export const Name = styled.div`
  ${font.medium}
  font-size: 1.25rem;
  color: var(--black02);
`;

export const Message = styled.div`
  width: 100%;

  ${font.medium}
  font-size: 0.9375rem;
  color: var(--gray02);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Unread = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: var(--mint01);

  text-align: center;
  ${font.heavy}
  font-size: 0.75rem;
  color: var(--white02);
`;
