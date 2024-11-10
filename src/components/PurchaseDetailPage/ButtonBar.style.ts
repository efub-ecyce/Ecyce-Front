import styled from 'styled-components';
import { regular } from '../../styles/font';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  box-sizing: border-box;
  padding: 0.7rem 0.5rem 0.5rem 0.5rem;
`;

export const YButton = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  height: 2.3rem;

  border-radius: 1.875rem;
  border: 1px solid var(--mint02);
  background-color: var(--white00);

  ${regular}
  font-size: 1rem;
  color: var(--mint02);
`;

export const NButton = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  height: 2.3rem;

  border-radius: 1.875rem;
  border: 1px solid var(--red01);
  background-color: var(--white00);

  ${regular}
  font-size: 1rem;
  color: var(--red01);
`;
