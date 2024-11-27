import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import Header from '../../../components/MainPage/Header';
import Filter from '../../../components/MainPage/Filter';
import * as S from './MainPage.style';
import { getAllProduct } from '../../../api/product';

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

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await getAllProduct();
        if (!response || response.length === 0) {
          setProductList(productDummyData);
        } else {
          setProductList(response);
        }
      } catch (error) {
        console.error(error);
        setProductList(productDummyData);
      }
    };
  
    getProductList();
  }, []);

  return (
    <S.Container>
      <S.Top>
        <Header />
        <Filter />
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
