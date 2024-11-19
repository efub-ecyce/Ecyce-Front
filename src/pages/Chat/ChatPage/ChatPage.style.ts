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
  padding: 0.5rem 0.94rem;
  box-sizing: border-box;

  ${font.medium}
  font-size: 1rem;
  color: var(--black);

  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  min-width: 1.5rem;
  min-height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
