import { useEffect, useState } from 'react';
import Header from '../../../components/common/Header';
import * as S from './ProductManagePage.style';
import { MyProduct } from '../../../components/ProductManagePage/MyProduct';
import { ManageDrawer } from '../../../components/ProductManagePage/ManageDrawer';
import { ConfirmModal } from '../../../components/common/ConfirmModal';
import NavBar from '../../../components/common/NavBar';
import { getMyProducts } from '../../../api/artist';
import { userState } from '../../../store/userInfoAtom';
import { atom, useRecoilValue } from 'recoil';
import { deleteProduct } from '../../../api/product';

const filterList = ['판매중', '숨김'];

export interface ProductProps {
  productId: number;
  userId: number;
  nickname: string;
  productName: string;
  price: number;
  duration: number;
  productState: string;
  isMarked: boolean;
  thumbnail: string;
}

export const selectedProduct = atom<{
  productId: number;
  productState: string;
}>({
  key: 'selectedProduct',
  default: {
    productId: 0,
    productState: 'ON_SALE',
  },
});

const ProductManagePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);
  const [isDrawerActive, setIsDrawerActive] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const [filteredList, setFilteredList] = useState<ProductProps[]>([]);

  const userId = useRecoilValue(userState).userId;
  const productId = useRecoilValue(selectedProduct).productId;

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await getMyProducts(userId as number);
        console.log(response);
        setProductList(response);
      } catch (error) {
        console.error(error);
      }
    };

    getProductList();
  }, []);

  useEffect(() => {
    const filteredList = productList.filter(product => {
      if (activeFilter === '판매중') {
        return product.productState === 'ON_SALE';
      } else if (activeFilter === '숨김') {
        return product.productState === 'HIDDEN';
      }
      return true; // 다른 필터의 경우 모든 상품 표시
    });
    setFilteredList(filteredList);
  }, [activeFilter, productList]);

  const handleFiltering = (fil: string) => {
    if (fil !== activeFilter) {
      setActiveFilter(fil);
    }
  };

  const drawerHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsDrawerActive(prev => !prev);
  };

  const modalHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsModalActive(prev => !prev);
  };

  const handleDeleteProduct = async () => {
    try {
      const res = await deleteProduct(productId);
      setIsModalActive(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Container>
        <Header title='내 상품 관리' />
        <S.FilterBar>
          {filterList.map((item, idx) => (
            <S.Filter
              key={idx}
              $isActive={activeFilter === item}
              onClick={() => handleFiltering(item)}
            >
              {item}
            </S.Filter>
          ))}
        </S.FilterBar>
        <S.ProductContainer>
          {filteredList.map((item, idx) => (
            <MyProduct
              key={idx}
              productInfo={item}
              drawerHandler={drawerHandler}
            />
          ))}
        </S.ProductContainer>
        {isDrawerActive && (
          <ManageDrawer
            modalHandler={modalHandler}
            drawerHandler={drawerHandler}
          />
        )}
        {isModalActive && (
          <ConfirmModal
            question='정말 삭제하시겠습니까?'
            modalHandler={modalHandler}
            yesFunction={handleDeleteProduct}
            yes='삭제하기'
            no='취소하기'
          />
        )}
      </S.Container>
      <S.NavWrapper>
        <NavBar />
      </S.NavWrapper>
    </>
  );
};

export default ProductManagePage;
