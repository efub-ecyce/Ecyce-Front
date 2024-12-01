import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import Header from '../../../components/MainPage/Header';
import Filter from '../../../components/MainPage/Filter';
import * as S from './MainPage.style';
import { getAllProduct, getProductCategory } from '../../../api/product';

export interface ProductProps {
  key: number;
  duration: number;
  isMarked: boolean;
  nickname: string;
  price: number;
  productId: number;
  productName: string;
}

const productDummyData: ProductProps[] = [
  {
    key: 0,
    duration: 3,
    isMarked: false,
    nickname: "뉴진스",
    price: 20000,
    productId: 1,
    productName: "청바지를 활용한 텀블러 가방",
    // imageURL: "",
  },
];

const MainPage = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const fetchProductList = async (filterName: string | null) => {
    try {
      if (!filterName) {
        // 기본값 == 모든 제품
        const response = await getAllProduct();
        console.log(response);
        setProductList(response.length ? response : productDummyData);
      } else {
        // 필터가 선택된 경우
        const filterMap: { [key: string]: number } = {
          후기순: 1,
          북마크순: 2,
          최신순: 3,
        };
        const categoryId = filterMap[filterName];
        const response = await getProductCategory(categoryId);
        setProductList(response.length ? response : productDummyData);
      }
    } catch (error) {
      console.error(error);
      setProductList(productDummyData);
    }
  };

  useEffect(() => {
    fetchProductList(selectedFilter);
  }, [selectedFilter]);

  const handleFilterChange = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  return (
    <S.Container>
      <S.Top>
        <Header />
        <Filter onFilterChange={handleFilterChange} />
      </S.Top>
      <S.Contents>
        {productList.map((product, index) => (
          <ProductComponent1
            key={index}
            productName={product.productName}
            duration={product.duration}
            price={product.price}
            // imageURL={product.imageURL}
            isMarked={product.isMarked}
            productId={product.productId}
          />
        ))}
      </S.Contents>
      <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default MainPage;
