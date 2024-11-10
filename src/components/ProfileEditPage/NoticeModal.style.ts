import styled from 'styled-components';
import { light } from '../../styles/font';

export const Container = styled.div`
  width: 14.875rem;
  padding: 1.19rem 0.81rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--gray02);
  background: var(--white00);

  ${light}
  font-size: 0.875rem;
  color: var(--black00);

  position: absolute;
  top: 100%;
  right: 80%;

  z-index: 1;
`;
