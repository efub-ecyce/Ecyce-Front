import { deleteProduct, patchProductState } from '../../api/product';
import * as S from './ManageDrawer.style';
import { useNavigate } from 'react-router-dom';
import { selectedProduct } from '../../pages/My/ProductManagePage/ProductManagePage';
import { useRecoilValue } from 'recoil';
interface DrawerProps {
  drawerHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const ManageDrawer = ({ drawerHandler, modalHandler }: DrawerProps) => {
  const navigate = useNavigate();
  const productInfo = useRecoilValue(selectedProduct);

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 드로어 외부 클릭 시에만 drawerHandler 실행
    if (event.currentTarget === event.target) {
      drawerHandler(event);
    }
  };

  const handleProductState = async (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    try {
      if (productInfo.productState === 'ON_SALE') {
        const res = await patchProductState(productInfo.productId, 'HIDDEN');
      } else {
        const res = await patchProductState(productInfo.productId, 'ON_SALE');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    try {
      drawerHandler(event);
      modalHandler(event);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.PageWrapper onClick={handleScreenClick}>
      <S.Container>
        {productInfo.productState == 'ON_SALE' ? (
          <S.Menu onClick={handleProductState}>숨기기</S.Menu>
        ) : (
          <S.Menu onClick={handleProductState}>판매하기</S.Menu>
        )}
        <S.Menu
          onClick={() =>
            navigate('/post', { state: { productId: productInfo.productId } })
          }
        >
          수정하기
        </S.Menu>
        <S.Menu onClick={e => handleClickDelete(e)}>삭제하기</S.Menu>
      </S.Container>
    </S.PageWrapper>
  );
};
