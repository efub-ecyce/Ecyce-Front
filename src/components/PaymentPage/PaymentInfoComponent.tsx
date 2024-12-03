import * as S from './PaymentInfoComponent.style';

interface PriceProps {
  productPrice: number;
  deliveryCharge: number;
}

const PaymentInfoComponent = ({ productPrice, deliveryCharge }: PriceProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>결제 정보</S.Title>
      </S.TitleWrapper>
      <S.Line></S.Line>
      <S.InfoWrapper>
        <S.TextWrapper>
          <S.IndexText>상품 금액</S.IndexText>
          <S.Text>{productPrice.toLocaleString()}원</S.Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.IndexText>배송비</S.IndexText>
          <S.Text>{deliveryCharge.toLocaleString()}원</S.Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.TotalPrice>총 결제 금액</S.TotalPrice>
          <S.TotalPrice>
            {(productPrice + deliveryCharge).toLocaleString()}원
          </S.TotalPrice>
        </S.TextWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default PaymentInfoComponent;
