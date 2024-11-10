import styled from 'styled-components';
import * as font from '../../styles/font';

export const ScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  z-index: 5;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  width: 20.375rem;
  height: 9.625rem;

  padding: 2.3rem;
  box-sizing: border-box;

  border-radius: 1.25rem;
  background-color: var(--white00);
`;

export const Question = styled.div`
  ${font.semibold}
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const YesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.5rem;
  height: 2.3125rem;

  border: none;
  border-radius: 1.875rem;
  background-color: var(--mint02);

  ${font.bold}
  font-size: 1rem;
  color: var(--white00);
`;

export const NoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.5rem;
  height: 2.3125rem;

  border: none;
  border-radius: 1.875rem;
  background-color: var(--red01);

  ${font.bold}
  font-size: 1rem;
  color: var(--white00);
`;
