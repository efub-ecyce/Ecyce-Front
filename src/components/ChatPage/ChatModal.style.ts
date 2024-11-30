import styled from 'styled-components';
import { medium } from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 1;
  top: 0.94rem;
  right: 0.94rem;

  width: 7.5625rem;
  //height: 6.375rem;
  padding: 0.5625rem 0.9375rem;
  box-sizing: border-box;

  border-radius: 0.9375rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
`;

export const Menu = styled.div`
  ${medium}
  font-size: 1rem;
  text-align: center;
`;
