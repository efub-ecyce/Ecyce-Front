import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 48%;
  margin-bottom: 2rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 4/3;

  border-radius: 0.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5rem;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  ${font.semibold}
  font-size: 1.125rem;
  color: var(--black02);
`;

export const Price = styled.div`
  ${font.medium}
  font-size: 1rem;
  color: var(--black02);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
`;
