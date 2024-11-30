import styled from 'styled-components';
import * as font from '../../styles/font';

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  flex-shrink: 0;
`;

export const Filter = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  height: 100%;

  ${font.semibold}
  font-size: 1.5rem;
  color: ${props => (props.$isActive ? 'var(--mint02)' : 'var(--gray02)')};

  border-bottom: 1px solid
    ${props => (props.$isActive ? 'var(--mint02)' : 'var(--gray02)')};
`;
