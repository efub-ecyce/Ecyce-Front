import styled from 'styled-components';
import * as font from '../../styles/font';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: calc(100vh - 10rem);
  padding: 0.5rem 1.25rem 0;
  box-sizing: border-box;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
`;

export const TimeStamp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  ${font.regular}
  font-size: 0.75rem;
  color: var(--black02);
`;

export const MyChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: 75%;
  margin-left: auto;
  padding: 0.5rem 0.875rem;
  box-sizing: border-box;

  background-color: var(--mint02);
  border-radius: 0.9375rem;
  box-shadow: 0px 0px 5px 0px rgba(61, 73, 70, 0.1);

  ${font.regular}
  color: var(--white00);
  font-size: 1rem;
`;

export const YourChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  max-width: 75%;
  margin-right: auto;
  padding: 0.5rem 0.875rem;
  box-sizing: border-box;

  background-color: var(--white01);
  border-radius: 0.9375rem;
  box-shadow: 0px 0px 5px 0px rgba(61, 73, 70, 0.1);

  ${font.regular}
  color: var(--black);
  font-size: 1rem;
`;
