import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 27rem;

  @media only screen and (max-width: 768px) {
    body {
      width: 100%;
    }
  }

  height: 3.5rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  ${font.regular}
  color: var(--black02);
  font-size: 25px;
  margin-left: 8.63rem; // 이게 맞는숫잔가 하....
`;

export const Btn = styled.div`
  margin-left: 0.7rem;
`;
