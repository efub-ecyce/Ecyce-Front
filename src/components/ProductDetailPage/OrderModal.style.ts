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
  height: 35.875rem;

  padding: 2rem 2.25rem;
  box-sizing: border-box;

  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background-color: var(--white00);
`;

export const Option = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const OptionPrice = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100rem;
  height: 3.75rem;
  padding: 1.56rem 2rem;
  box-sizing: border-box;
  flex-shrink: 0;
  background: var(--white02);

  &:hover {
    background: var(--white01);
  }
`;

export const OptionDrawer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
