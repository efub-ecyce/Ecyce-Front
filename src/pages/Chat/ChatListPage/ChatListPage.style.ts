import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--white02);

  display: flex;
  flex-direction: column;

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
  padding: 1.1rem 1.25rem 1.1rem;
  box-sizing: border-box;

  ${font.regular}
  font-size: 1.5625rem;
  color: var(--black02);

  border-bottom: 1px solid var(--mint03);
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.31rem;

  width: 100%;
  padding: 1.41rem 1.25rem;
  box-sizing: border-box;
`;

export const Filter = styled.div<{ $isActive: boolean }>`
  ${font.medium}
  font-size: 1.25rem;
  color: ${props => (props.$isActive ? 'var(--mint01)' : 'var(--gray02)')};
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  margin-bottom: 90px;

  flex-grow: 1;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
