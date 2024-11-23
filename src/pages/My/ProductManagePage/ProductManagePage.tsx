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

const dummyData = [
  {
    productId: 1,
    userId: 1, // 판매자 ID
    nickname: '이끼끼 상점',
    productName: '파우치 가방 리사이클링링링',
    price: 40000,
    duration: 5,
    productState: 'ON_SALE',
    isMarked: false,
    thumbnail:
      'https://karma-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/reviewImages/example1.jpg',
  },
  {
    productId: 2,
    userId: 1, // 판매자 ID
    nickname: '이끼끼 상점',
    productName: '신발을 지갑으로',
    price: 30000,
    duration: 7,
    productState: 'ON_SALE',
    isMarked: false,
    thumbnail:
      'https://karma-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/reviewImages/example1.jpg',
  },
];

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
        setProductList(response);

        if (productList.length == 0) {
          setProductList(dummyData);
        }
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
