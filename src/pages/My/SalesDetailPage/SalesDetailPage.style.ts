import styled from 'styled-components';
import * as font from '../../../styles/font';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: var(--white02);

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  padding: 1.25rem;
  //padding-bottom: 0.65rem;
  box-sizing: border-box;
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.625rem;

  background-color: #e6e6e6;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Row2 = styled(Row1)`
  margin-bottom: 0.6rem;
`;

export const Title = styled.div`
  ${font.semibold}
  color: var(--black00);
  font-size: 1.25rem;
`;

export const State = styled.div`
  ${font.bold}
  font-size: 1rem;

  color: var(--mint02);
`;

export const OrderNum = styled.div`
  ${font.semibold}
  font-size: 1.5rem;
  color: var(--black00);
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid var(--gray02);
  margin: 0.62rem 0;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  margin-bottom: 0.6rem;
`;

export const TableHeader = styled.div`
  ${font.light}
  font-size: 1rem;
  color: var(--black00);

  width: 6rem;
`;

export const Data = styled.div`
  ${font.light}
  font-size: 1rem;
  color: var(--black00);
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalPrice = styled(Data)`
  ${font.semibold}
  font-size: 1.25rem;
`;

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.25rem;
  height: 100%;
  margin-left: auto;

  border-radius: 1.875rem;
  border: 1px solid var(--mint02);
  background: var(--white00);

  ${font.light}
  font-size: 0.875rem;
  color: var(--mint02);
`;

export const ShippingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.3125rem;
  margin: 0.6rem 0;

  border-radius: 1.875rem;
  border: 1px solid var(--mint02);
  background: var(--white00);

  ${font.light}
  font-size: 1rem;
  color: var(--mint02);
`;

export const TextInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  height: 2.1875rem;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  ${font.light}
  color: var(--black00);
  padding-left: 0.5rem;
`;

export const SaveButton = styled(ChatButton)`
  height: 1.5rem;
  background-color: var(--mint03);
  color: var(--white00);

  margin: auto 0 auto 0.44rem;
`;

export const AlertMessage = styled.div`
  ${font.bold}
  font-size: 1.5rem;
  color: var(--black00);
`;

export const AlertDesc = styled.div`
  ${font.regular}
  font-size: 1rem;
  color: var(--gray01);
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.7rem;

  width: 100%;
  padding: 0.6rem;
  box-sizing: border-box;
  margin-top: 0.75rem;

  border-radius: 0.625rem;
  border: 2px solid var(--mint02);
  background: var(--white00);
`;

export const Content = styled.div`
  ${font.regular}
  font-size: 1rem;
  color: var(--black00);
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const OpenTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.375rem;
`;

export const TabName = styled.div`
  ${font.semibold}
  font-size: 1.25rem;
  color: var(--black00);
`;
