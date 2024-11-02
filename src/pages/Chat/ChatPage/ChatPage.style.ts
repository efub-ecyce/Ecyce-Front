import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 1.1rem 0.69rem;
  box-sizing: border-box;

  position: sticky;
  top: 0;

  ${font.regular}
  font-size: 1.5625rem;
  color: var(--black02);

  background-color: var(--white02);
  border-bottom: 1px solid var(--mint03);
`;

export const Name = styled.div`
  flex-grow: 1;
  margin-left: 0.55rem;
`;

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
  flex-grow: 1;
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

export const InputBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5rem;
  padding: 1.19rem 0.88rem;
  box-sizing: border-box;

  position: sticky;
  bottom: 0;

  background-color: var(--white02);
`;

export const TextInput = styled.textarea`
  align-items: center;
  flex-grow: 1;
  height: 2.5625rem;

  border-radius: 0.9375rem;
  border: 1px solid var(--mint03);
  background: var(--white00);

  margin: 0 0.5rem;
  padding: 0 0.94rem;
  padding-top: 0.5rem;
  box-sizing: border-box;

  ${font.medium}
  font-size: 1rem;
  color: var(--black);

  resize: none;
`;

export const IconWrapper = styled.div`
  min-width: 1.5rem;
  min-height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
