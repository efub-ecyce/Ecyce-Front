import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  padding: 0 1.25rem;
  box-sizing: border-box;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.75rem;

  margin-bottom: 1rem;
`;

export const Filter = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  ${font.semibold}
  font-size: 1.5rem;
  color: ${props => (props.$isActive ? 'var(--mint02)' : 'var(--gray02)')};

  border-bottom: 1px solid
    ${props => (props.$isActive ? 'var(--mint01)' : 'var(--gray02)')};
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
