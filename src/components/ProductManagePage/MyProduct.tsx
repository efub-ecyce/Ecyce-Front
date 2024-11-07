import * as S from './MyProduct.style';
import { ReactComponent as MoreButton } from '../../assets/ProductManagePage/more_vert.svg';

interface MyProductProps {
  drawerHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const MyProduct = ({ drawerHandler }: MyProductProps) => {
  return (
    <S.Container>
      <S.ProductImage />
      <S.ProductInfo>
        <S.Row>
          <S.Title>텀블러 가방 만들기</S.Title>
          <S.IconWrapper onClick={drawerHandler}>
            <MoreButton />
          </S.IconWrapper>
        </S.Row>
        <S.Price>20,000원</S.Price>
      </S.ProductInfo>
    </S.Container>
  );
};
