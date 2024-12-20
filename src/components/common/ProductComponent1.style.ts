import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 11.8125rem;
  height: auto;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  display: flex;

  @media only screen and (min-width: 768px) {
    max-width: 15rem;
  }
`;

export const ProductPicture = styled.div<{ imageURL: string }>`
  width: 100%;
  height: 9.5625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${({ imageURL }) => `url(${imageURL})`} lightgray 50% / cover no-repeat;
  margin-bottom: 0.56rem;

  @media only screen and (min-width: 768px) {
    height: 12rem;
  }
`;

export const Title = styled.div`
  ${font.semibold}
  color: var(--black02);
  font-size: 0.9375rem;
  margin-bottom: 0.25rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Term = styled.div`
  ${font.medium}
  color: #889493;
  font-size: 0.625rem;
  margin-bottom: 0.81rem;

  @media only screen and (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const PNB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Price = styled.div`
  ${font.medium}
  color: var(--black02);
  font-size: 0.75rem;

  @media only screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
