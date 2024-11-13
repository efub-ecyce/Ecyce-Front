import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  background-color: #fafafb;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.94rem;

  padding: 2rem 1.28125rem;
  box-sizing: border-box;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ProfileImage = styled.img`
  width: 5.5625rem;
  height: 5.5625rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const CameraIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-left: -20px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Text = styled.div`
  ${font.regular}
  color: var(--gray02);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 0.75rem 0.875rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  ${font.regular}
  font-size: 1.3rem;
`;

export const PostcodeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PostcodeButton = styled.div`
  width: 8.5rem;
  height: 2.8125rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid var(--mint02);
  color: var(--mint02);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-left: 0.87rem;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 6.1875rem;
  margin-bottom: 1rem;
`;
