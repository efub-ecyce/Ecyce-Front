import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
  width: 11.8125rem;
  height: 15.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProductPicture = styled.div<{ imageURL: string}>`
  width: 11.8125rem;
  height: 9.5625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${({ imageURL }) => `url(${imageURL})`} lightgray 50% / cover no-repeat;
  margin-bottom: 0.56rem;
`;

export const Title = styled.div`
  ${font.semibold}
  color:  var(--black02);
  font-size: 0.9375rem;
  margin-bottom: 0.25rem;
`;

export const Term = styled.div`
  ${font.medium}
  color: #889493;
  font-size: 0.625rem;
  margin-bottom: 0.81rem;
`;

export const PNB = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  ${font.medium}
  color:  var(--black02);
  font-size: 0.75rem;
  margin-bottom: 1.06rem;
`;
