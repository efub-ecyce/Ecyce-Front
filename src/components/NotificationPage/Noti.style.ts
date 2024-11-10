import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div<{ $isRead: boolean }>`
  display: flex;

  width: 98%;
  height: 7.25rem;
  padding: 1.15rem;
  box-sizing: border-box;

  border-radius: 0.625rem;
  background: var(--white00);
  box-shadow: ${props =>
    props.$isRead
      ? '0px 0px 5px 0px rgba(61, 73, 70, 0.20)'
      : '0px 0px 5px 0px var(--mint01)'};
`;

export const IconWrapper = styled.div`
  margin: auto 0;
  margin-right: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.div`
  ${font.bold}
  font-size: 1.25rem;
  color: var(--black);
`;

export const Subtitle = styled.div`
  ${font.medium}
  font-size: 0.875rem;
  color: #889493;
`;

export const Time = styled.div`
  ${font.medium}
  font-size: 0.875rem;
  color: #889493;
  margin-top: auto;
  margin-left: auto;
`;
