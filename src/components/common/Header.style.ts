import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white02);

  position: relative;
`;

export const Title = styled.div`
  ${font.regular}
  color: var(--black02);
  font-size: 25px;
  text-align: center;
`;

export const Btn = styled.div`
  position: absolute;
  left: 0;
`;
