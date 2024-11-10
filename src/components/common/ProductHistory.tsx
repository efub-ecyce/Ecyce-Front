import * as S from './ProductHistory.style';
import { ReactComponent as ArrowBtn } from '../../assets/arrow_key_right.svg';

interface Product {
  date: string;
  state: string;
  image: string;
  name: string;
  option: string[];
  num: number[];
  totalPrice: number;
} //API 명세서 나오면 추후 수정

interface ProductHistoryProps {
  product: Product;
}

export const ProductHistory = ({ product }: ProductHistoryProps) => {
  return (
    <S.ProductContainer>
      <S.Header>
        <S.Date>{product.date}</S.Date>
        <S.State>{product.state}</S.State>
      </S.Header>
      <S.ProductInfo>
        <S.Image />
        <S.TextContainer>
          <S.Name>{product.name}</S.Name>
          {product.option.map((opt, index) => (
            <S.OptionContainer>
              <S.Option>{opt}</S.Option>
              <S.Num>
                {'\u00A0'}| {product.num[index]}개
              </S.Num>
            </S.OptionContainer>
          ))}
          <S.TotalPrice>{product.totalPrice.toLocaleString()}원</S.TotalPrice>
        </S.TextContainer>
      </S.ProductInfo>
      <S.Btn>
        <ArrowBtn />
      </S.Btn>
    </S.ProductContainer>
  );
};
