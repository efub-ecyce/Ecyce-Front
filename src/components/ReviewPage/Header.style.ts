import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  height: 3.5rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white02);

  position: relative;
`;

export const Title = styled.div`
  ${font.regular}
  color: var(--black02);
  font-size: 25px;
  text-align: center;
`;

export const ReviewNum = styled.div`
  ${font.semibold}
  color: var(--gray01);
  font-size: 16px;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-right: 1.19rem;
`;

export const Btn = styled.div`
  left: 0;
`;
