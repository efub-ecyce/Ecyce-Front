import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Image = styled.img`
  width: 5.5625rem;
  height: 5.5625rem;
  border-radius: 50%;

  object-fit: cover;
`;

export const EditIconWrapper = styled.label`
  position: absolute;
  top: 70%;
  right: -5%;
`;
