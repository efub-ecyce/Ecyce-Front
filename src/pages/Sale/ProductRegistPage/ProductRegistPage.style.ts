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
  align-items: flex-start;
  gap: 0.94rem;

  padding: 0 1.28125rem;
  box-sizing: border-box;
`;

export const Title = styled.div`
  ${font.semibold}
  font-size: 1.5rem;
`;

export const Subtitle = styled.div`
  ${font.regular}
  font-size: 1.2rem;
  color: var(--gray01);

  margin-bottom: 0.38rem;
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

export const DaysContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

export const TextBox = styled.input`
  width: 3.375rem;
  height: 3.375rem;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  text-align: center;
  ${font.semibold}
  font-size: 1.5rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 20rem;
  padding: 0.75rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  ${font.regular}
  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 6.1875rem;
  margin-bottom: 1rem;
`;
