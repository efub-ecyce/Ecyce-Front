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

  padding: 0 1.25rem;
  box-sizing: border-box;
`;

export const ProfileBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  margin: 1.5rem 0 3rem;
`;

export const ProfImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Name = styled.div`
  ${font.semibold}
  font-size: 1.875rem;
  color: var(--black00);
  margin-left: 1rem;
`;

export const EditButton = styled.button`
  ${font.light}
  font-size: 1rem;
  color: var(--gray01);

  border: none;
  background-color: transparent;
  margin-left: auto;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.3rem;
  margin: 1.75rem 0;
`;

export const Title = styled.div`
  ${font.bold}
  font-size: 1.625rem;
  color: var(--black00);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-left: 0.25rem;

  ${font.regular}
  font-size: 1.4375rem;
  color: var(--black00);
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray02);
`;

export const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
