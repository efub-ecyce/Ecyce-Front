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

export const ProductWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
  }

  border-radius: 0.625rem;
  box-shadow: 0px 0px 5px 0px rgba(136, 148, 147, 0.25);
  height: 10.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin-top: 0.69rem;
  background-color: var(--white02);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.38rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.13rem;
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

export const ProductPicture = styled.div<{ imageURL: string }>`
  width: 6.3125rem;
  height: 6.3125rem;
  align-self: stretch;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${({ imageURL }) => `url(${imageURL})`} lightgray 50% / cover no-repeat;
  margin-bottom: 0.56rem;
`;

export const Option = styled.div`
  ${font.regular}
  color: var(--gray01);
  font-size: 13px;
  box-sizing: border-box;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5.375rem;
  height: 1.25rem;
  flex-shrink: 0;
`;