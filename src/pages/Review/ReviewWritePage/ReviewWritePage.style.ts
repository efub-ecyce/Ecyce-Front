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
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: calc(100vh - 3.5rem);
  padding: 0 1.25rem;
  box-sizing: border-box;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  margin: 1.69rem 0;
`;

export const Image = styled.img`
  width: 6.3125rem;
  height: 6.3125rem;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  ${font.semibold}
  font-size:1.5rem;
  color: var(--black);
`;

export const Options = styled.div`
  ${font.regular}
  font-size: 1.25rem;
  color: var(--gray01);
`;

export const Text = styled.div`
  ${font.bold}
  font-size: 1.5rem;
  color: var(--black);
`;

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.63rem;

  margin: 1.69rem 0;
`;

export const Star = styled.div`
  width: 3.75rem;
  height: 3.75rem;
`;

export const ReviewText = styled.textarea`
  width: 100%;
  height: 13rem;

  border-radius: 0.625rem;
  border: 2px solid var(--gray02);
  background: var(--white00);

  padding: 0.75rem;
  box-sizing: border-box;
  margin-top: 0.8rem;

  ${font.regular}
  font-size: 1.25rem;

  resize: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
`;
