import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  ${font.heavy}
  color: var(--black02);
  width: 27rem;

  @media only screen and (max-width: 768px) {
    body {
      width: 100%;
    }
  }

  height: 3.5rem;
  align-content: center;
  border: 1px solid; // test
`;
