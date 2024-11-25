import styled from 'styled-components';
import { semibold } from '../../styles/font';

export const PageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.13rem;
  overflow-y: auto;

  width: 100%;
  height: 35.875rem;

  padding: 2.25rem 2rem;
  box-sizing: border-box;

  border-radius: 0.9375rem 0.9375rem 0rem 0rem;
  background-color: var(--white00);
`;

export const Option = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const OptionPrice = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1.56rem 2rem;
  box-sizing: border-box;
  flex-shrink: 0;
  background: var(--white02);
  cursor: pointer;

  &:hover {
    background: var(--white01);
  }
`;

export const OptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1.56rem 2rem;
  box-sizing: border-box;
  flex-shrink: 0;
  background: var(--white02);
  cursor: pointer;
`;

export const OptionDrawer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  background: var(--White-02, #FAFAFB);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 15;

  max-height: ${({ isOpen }) => (isOpen ? '20rem' : '5rem')};
`;

export const SelectedOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 8.5rem;
  padding: 0.94rem 1rem;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: var(--mint06);
`;

export const SelectedTitle = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const SelectedOptionName = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Gray-01, #A3A3A3);
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const FinalPrice = styled.div`
  ${semibold}
  font-size: 1.875rem;
  color: var(--Black-02, #3D4946);
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FinalPriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
`;

export const SelectedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  justify-content: space-between;
  align-items: center;
  
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 90%;
  position: absolute;
  bottom: 0;
  margin: 0rem 1rem 1rem 1rem;
`;
