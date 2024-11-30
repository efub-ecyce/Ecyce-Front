import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }

  padding: 0 1.25rem;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  ${font.semibold}
  font-size: 1.5rem;
  color: var(--black00);
`;

export const Subtitle = styled.div`
  ${font.regular}
  font-size: 1rem;
  color: var(--gray01);
`;

export const TextInput = styled.input`
  flex-grow: 1;
  min-width: 0;
  height: 2.1875rem;

  padding-left: 0.5rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px rgba(143, 201, 203, 0.25);

  ${font.regular}
  font-size: 1.25rem;
  color: var(--black00);
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 0.5rem;
`;

export const Postcode = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  width: 8.75rem;
  height: 2.3125rem;
  box-sizing: border-box;

  border-radius: 1.875rem;
  border: 1px solid var(--mint02);
  background: var(--white00);

  ${font.light}
  font-size: 1rem;
  color: var(--mint02);
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 8.75rem;

  padding: 0.5rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px rgba(143, 201, 203, 0.25);

  ${font.regular}
  font-size: 1rem;
  color: var(--black00);

  resize: none;
`;

export const Account = styled.div`
  display: flex;
  gap: 0.3rem;

  width: 100%;
  box-sizing: border-box;
`;

export const Bank = styled(TextInput)`
  flex-grow: 1;
  flex-basis: 0;
`;
export const AccountNum = styled(TextInput)`
  flex-grow: 6;
  flex-basis: 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const QWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostcodeWindow = styled.div`
  position: absolute;
  z-index: 100;
  background: var(--white00);
  padding: 20px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
