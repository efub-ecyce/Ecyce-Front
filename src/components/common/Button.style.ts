import styled from 'styled-components';
import * as font from '../../styles/font';

export const colorMap = {
  mint: {
    bgColor: 'var(--mint02)',
    textColor: 'var(--white02)',
  },
  white: {
    bgColor: 'var(--white00)',
    textColor: 'var(--mint02)',
  },
};

export const ButtonContainer = styled.button<{
  isActive: boolean;
  color: keyof typeof colorMap;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4rem;

  border: 2px solid;
  border-color: ${({ isActive }) =>
    isActive ? 'var(--mint02)' : 'var(--gray03)'};
  border-radius: 1.875rem;
  background-color: ${({ isActive, color }) =>
    isActive ? colorMap[color].bgColor : 'var(--gray03)'};

  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

export const Text = styled.div<{
  isActive: boolean;
  color: keyof typeof colorMap;
}>`
  ${font.semibold}
  font-size: 1.5rem;
  color: ${({ isActive, color }) =>
    isActive ? colorMap[color].textColor : 'var(--gray01)'};
`;
