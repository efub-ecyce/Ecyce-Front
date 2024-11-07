import { useState } from 'react';
import Header from '../../../components/common/Header';
import * as S from './ProductManagePage.style';
import { MyProduct } from '../../../components/ProductManagePage/MyProduct';
import { ManageDrawer } from '../../../components/ProductManagePage/ManageDrawer';
import { ConfirmModal } from '../../../components/common/ConfirmModal';

const filterList = ['판매중', '숨김'];

const ProductManagePage = () => {
  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);
  const [isDrawerActive, setIsDrawerActive] = useState<boolean>(false);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

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

  const deleteProduct = () => {
    console.log('임시 삭제 함수');
    setIsModalActive(false);
  };

  return (
    <S.Container>
      <Header title='내 상품 관리' />
      <S.FilterBar>
        {filterList.map((item, idx) => (
          <S.Filter
            $isActive={activeFilter === item}
            onClick={() => handleFiltering(item)}
          >
            {item}
          </S.Filter>
        ))}
      </S.FilterBar>
      <S.ProductContainer>
        <MyProduct drawerHandler={drawerHandler} />
        <MyProduct drawerHandler={drawerHandler} />
        <MyProduct drawerHandler={drawerHandler} />
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
          yesFunction={deleteProduct}
          yes='삭제하기'
          no='취소하기'
        />
      )}
    </S.Container>
  );
};

export default ProductManagePage;
