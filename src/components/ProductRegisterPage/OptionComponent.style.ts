import styled from 'styled-components';
import * as font from '../../styles/font';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;

  width: 100%;

  margin: 2.5rem 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Title = styled.div`
  ${font.semibold}
  font-size: 1.5rem;
`;

export const PlusWrapper = styled.div``;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const OptionName = styled.input`
  width: 60%;
  height: 3.375rem;

  margin-right: 0.5rem;
  padding: 0.75rem 0.875rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  ${font.regular}
  font-size: 1.3rem;
  color: var(--gray01);
`;

export const Price = styled.input`
  width: 30%;
  height: 3.375rem;

  margin-right: 0.5rem;
  padding: 0.75rem 0.875rem;
  box-sizing: border-box;

  border-radius: 0.3125rem;
  border: 1px solid var(--mint03);
  background: var(--white00);
  box-shadow: 0px 0px 4px 0px var(--mint03);

  ${font.regular}
  font-size: 1.3rem;
  color: var(--gray01);
`;

export const DeleteWrapper = styled.div`
  //width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
