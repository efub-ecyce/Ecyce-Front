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
  background-color: var(--white02);
  padding: 2.8rem 3rem 3rem 3rem;

  position: relative;
`;

export const SearchWindow = styled.input`
  ${font.regular}
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 0.875rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid #6B9495;
  background: var(--white00);
  font-size: 1.25rem;
  outline: none;

  &::placeholder {
        color: #C1D1D1;
    }
`;

export const Btn = styled.div`
  position: absolute;
  left: 0;
`;
