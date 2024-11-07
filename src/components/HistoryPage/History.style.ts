import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  width: 100%;
  height: 10.1875rem;
  padding: 0.625rem 0.8125rem;
  box-sizing: border-box;

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
  color: var(--black01);
`;

export const State = styled.div`
  ${font.semibold}
  font-size: 1rem;
  color: var(--black01);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 6.3125rem;
  height: 6.3125rem;
  border-radius: 0.5rem;

  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  margin-right: 1rem;
  height: 100%;
`;

export const Name = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
  color: var(--black01);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Option = styled.div`
  ${font.regular}
  font-size: 0.8rem;
  color: var(--gray01);
`;

export const Price = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
  color: var(--black01);
  margin-top: auto;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0.8125rem;
`;
