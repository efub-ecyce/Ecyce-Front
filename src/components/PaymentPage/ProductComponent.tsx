import * as S from './ProductComponent.style';

interface ProductProps {
  seller: string;
  title: string;
  price: number;
  imageURL: string;
  option: string;
}

const ProductComponent = ({
  seller,
  title,
  price,
  imageURL,
  option,
}: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Title>주문 상품</S.Title>
      <S.ProductWrapper>
        <S.Title>{seller}</S.Title>
        <S.ContentWrapper>
          <S.ProductPicture imageURL={imageURL}></S.ProductPicture>
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.OptionWrapper>
              <S.Option>{option}</S.Option>
              <S.Option>1개</S.Option>
            </S.OptionWrapper>
            {/* <S.OptionWrapper>
                            <S.Option>옵션2</S.Option>
                            <S.Option>{option2}개</S.Option>
                        </S.OptionWrapper> */}
            <S.Title>{price.toLocaleString()}원</S.Title>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.ProductWrapper>
    </S.Wrapper>
  );
};

export default ProductComponent;
