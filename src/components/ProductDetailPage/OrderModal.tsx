import React, { useState } from 'react';
import * as S from './OrderModal.style';
import { ReactComponent as DrawerBtn } from '../../assets/ProductDetailPage/arrow_key_down.svg';
import { Button } from '../common/Button';
import { ReactComponent as CloseBtn } from '../../assets/ProductDetailPage/close.svg';
import { ProductProps } from '../../pages/Product/ProductDetailPage/ProductDetailPage';
import { useNavigate } from 'react-router-dom';

interface DrawerProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  productInfo: ProductProps;
}

export const OrderModal = ({ modalHandler, productInfo }: DrawerProps) => {
  
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    optionId: number;
    optionName: string;
    optionPrice: number;
  } | null>(null);

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      modalHandler(event);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (optionId: number, optionName: string, optionPrice: number) => {
    setSelectedOption({ optionId, optionName, optionPrice });
    setIsDrawerOpen(false);
  };

  const handleOptionClose = () => {
    setSelectedOption(null);
  };

  const handlePurchase = () => {
    if (selectedOption) {
      const paymentData = {
        seller: productInfo.sellerNickname,
        title: productInfo.productName,
        option: selectedOption.optionName,
        optionId: selectedOption.optionId,
        productId: productInfo.productId,
        price: productInfo.price + selectedOption.optionPrice,
        deliveryCharge: productInfo.deliveryFee,
      };
      navigate('/payment', { state: paymentData });
    } else {
      alert('옵션을 선택해주세요.');
    }
  };

  return (
    <S.PageWrapper onClick={handleScreenClick}>
      <S.Container>
        <S.OptionDrawer isOpen={isDrawerOpen}>
          <S.OptionTitle onClick={toggleDrawer}>
            <S.Option>옵션 선택</S.Option>
            <DrawerBtn />
          </S.OptionTitle>
          {isDrawerOpen && productInfo.options.map((option) => (
            <S.OptionWrapper 
              key={option.optionId}
              onClick={() => handleOptionSelect(option.optionId, option.optionName, option.optionPrice)}
            >
              <S.Option>{option.optionName}</S.Option>
              <S.OptionPrice>+{option.optionPrice.toLocaleString()}원</S.OptionPrice>
            </S.OptionWrapper>
          ))}
        </S.OptionDrawer>
        {selectedOption && (
          <S.SelectedWrapper>
            <S.SelectedOption>
              <S.TitleWrapper>
                <S.SelectedTitle>{productInfo.productName}</S.SelectedTitle>
                <CloseBtn onClick={handleOptionClose}/>
              </S.TitleWrapper>
              <S.SelectedOptionName>{selectedOption.optionName}</S.SelectedOptionName>
              <S.PriceWrapper>
                <S.SelectedTitle>
                {(productInfo.price + selectedOption.optionPrice).toLocaleString()}원
                </S.SelectedTitle>
              </S.PriceWrapper>
            </S.SelectedOption>
            <S.FinalPriceWrapper>
              <S.FinalPrice>결제 예상 금액</S.FinalPrice>
              <S.FinalPrice>{(productInfo.price + selectedOption.optionPrice).toLocaleString()}원</S.FinalPrice>
            </S.FinalPriceWrapper>
          </S.SelectedWrapper>
        )}
        <S.ButtonWrapper onClick={handlePurchase}>
          <Button isActive={true} text="구매하기" color="mint" />
        </S.ButtonWrapper>
      </S.Container>
    </S.PageWrapper>
  );
};