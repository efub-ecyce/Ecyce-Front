import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.62rem;

  flex-wrap: nowrap;
  overflow-x: auto;

  width: 100%;
  min-height: 6.5rem;
`;

export const UploadButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 6.3rem;
  height: 6.3rem;
  flex: 0 0 auto;

  border-radius: 0.625rem;
  border: 2px solid var(--mint03);
  background-color: var(--white00);
`;

export const ImageNum = styled.div`
  ${font.medium}
  font-size: 1.25rem;
  color: var(--mint03);
`;

export const ImagePreview = styled.div`
  width: 6.3rem;
  height: 6.3rem;
  flex: 0 0 auto;

  position: relative;
`;

export const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 0.44rem;
  right: 0.44rem;
`;

export const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  object-fit: contain;
`;
