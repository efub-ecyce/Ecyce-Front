import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
  }

  height: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: var(--white02);
`;

export const Title = styled.div`
  ${font.semibold}
  color: var(--black02);
  font-size: 20px;
  width: 100%;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 8.75rem;

  padding: 0.5rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px rgba(143, 201, 203, 0.25);

  ${font.regular}
  font-size: 1rem;
  color: var(--black00);

  resize: none;
`;