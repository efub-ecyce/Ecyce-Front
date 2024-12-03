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
  align-items: flex-start;
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

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.div`
  margin-left: 1rem;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.01875rem;
  background: #c1d1d1;
  margin-top: 0.6rem;
`;

export const IndexText = styled.div`
  width: 7rem;
  ${font.light}
  color: var(--black00);
  font-size: 16px;
`;

export const Text = styled.div`
  width: 16rem;
  ${font.light}
  color: var(--black00);
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-top: 0.6rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
