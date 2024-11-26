import React, { useState } from 'react';
import * as S from './OrderModal.style';
import { ReactComponent as DrawerBtn } from '../../assets/ProductDetailPage/arrow_key_down.svg';
import { Button } from '../common/Button';
import { ReactComponent as CloseBtn } from '../../assets/ProductDetailPage/close.svg';

interface DrawerProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const OrderModal = ({ modalHandler }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      modalHandler(event);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <S.PageWrapper onClick={handleScreenClick}>
      <S.Container>
        <S.OptionDrawer isOpen={isDrawerOpen}>
          <S.OptionTitle onClick={toggleDrawer}>
            <S.Option>옵션 선택</S.Option>
            <DrawerBtn />
          </S.OptionTitle>
          {isDrawerOpen && (
            <>
              <S.OptionWrapper>
                <S.Option>옵션 1</S.Option>
                <S.OptionPrice>+800원</S.OptionPrice>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.Option>옵션 2</S.Option>
                <S.OptionPrice>+1200원</S.OptionPrice>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.Option>옵션 3</S.Option>
                <S.OptionPrice>+1200원</S.OptionPrice>
              </S.OptionWrapper>
            </>
          )}
        </S.OptionDrawer>
        <S.SelectedWrapper>
          <S.SelectedOption>
            <S.TitleWrapper>
              <S.SelectedTitle>양말목 지구 네임택</S.SelectedTitle>
              <CloseBtn />
            </S.TitleWrapper>
            <S.SelectedOptionName>옵션2: 어쩌구저쩌구</S.SelectedOptionName>
            <S.PriceWrapper>
              <S.SelectedTitle>4,200원</S.SelectedTitle>
            </S.PriceWrapper>
          </S.SelectedOption>
          <S.FinalPriceWrapper>
            <S.FinalPrice>결제 예상 금액</S.FinalPrice>
            <S.FinalPrice>4,200원</S.FinalPrice>
          </S.FinalPriceWrapper>
        </S.SelectedWrapper>
        <S.ButtonWrapper>
          <Button isActive={true} text="구매하기" color="mint" />
        </S.ButtonWrapper>
      </S.Container>
    </S.PageWrapper>
  );
};
