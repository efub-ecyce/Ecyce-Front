import * as S from './MyProduct.style';
import { ReactComponent as MoreButton } from '../../assets/ProductManagePage/more_vert.svg';
import { ProductProps } from '../../pages/My/ProductManagePage/ProductManagePage';
import { useNavigate } from 'react-router-dom';
import { selectedProduct } from '../../pages/My/ProductManagePage/ProductManagePage';
import { useSetRecoilState } from 'recoil';
interface MyProductProps {
  productInfo: ProductProps;
  drawerHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const MyProduct = ({ productInfo, drawerHandler }: MyProductProps) => {
  const navigate = useNavigate();
  const setProductInfo = useSetRecoilState(selectedProduct);

  const handleDrawer = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    drawerHandler(e);
    setProductInfo({
      productId: productInfo.productId,
      productState: productInfo.productState,
    });
  };

  return (
    <S.Container onClick={() => navigate(`/product/${productInfo.productId}`)}>
      <S.ProductImage src={productInfo.thumbnail} />
      <S.ProductInfo>
        <S.Row>
          <S.Title>{productInfo.productName}</S.Title>
          <S.IconWrapper onClick={handleDrawer}>
            <MoreButton />
          </S.IconWrapper>
        </S.Row>
        <S.Price>{productInfo.price.toLocaleString()}원</S.Price>
      </S.ProductInfo>
    </S.Container>
  );
};
