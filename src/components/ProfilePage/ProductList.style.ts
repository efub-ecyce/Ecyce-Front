import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  width: 100%;
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

export const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(50% - 1.3rem), 1fr));
  gap: 1rem;
  width: 100%;
  justify-content: center;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Notice = styled.div`
  ${font.medium}
  color: var(--gray01);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
