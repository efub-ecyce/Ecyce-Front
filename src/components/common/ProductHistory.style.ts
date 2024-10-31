import styled from 'styled-components';
import * as font from '../../styles/font';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  width: 100%;
  height: 10.1875rem;
  padding: 0.625rem 0.8125rem;
  box-sizing: border-box;

  border: none;
  border-radius: 0.625rem;
  background-color: var(--white00);
  box-shadow: 0px 0px 5px 0px rgba(136, 148, 147, 0.25);

  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Date = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
`;

export const State = styled.div`
  ${font.semibold}
  font-size: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.125rem;
`;

export const Image = styled.img`
  width: 6.3125rem;
  height: 6.3125rem;

  border-radius: 0.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Option = styled.div`
  ${font.regular}
  font-size: 0.8125rem;
  color: var(--gray01);

  max-width: 8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Num = styled.div`
  ${font.regular}
  font-size: 0.8125rem;
  color: var(--gray01);
`;

export const TotalPrice = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
`;

export const Btn = styled.div`
  position: absolute;
  top: 5rem;
  right: 0.8125rem;
`;
