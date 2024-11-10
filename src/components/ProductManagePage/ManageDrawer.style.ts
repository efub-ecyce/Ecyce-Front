import styled from 'styled-components';
import { semibold } from '../../styles/font';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 17.6875rem;

  padding: 2.8rem 0;
  box-sizing: border-box;

  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background-color: var(--white00);
`;

export const Menu = styled.div`
  ${semibold}
  font-size: 1.875rem;
`;
