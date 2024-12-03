import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--white02);
`;

export const Title = styled.div`
  ${font.regular}
  color: var(--black02);
  font-size: 25px;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const Btn = styled.div`
  cursor: pointer;
  margin-right: 0.2rem;
`;
