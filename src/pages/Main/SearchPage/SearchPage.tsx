import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import SearchBar from '../../../components/SearchPage/SearchBar';
import { useNavigate } from 'react-router-dom';
import * as S from './SearchPage.style';
import { getAllProduct } from '../../../api/product';
import type { ProductProps } from '../../../components/common/ProductComponent1';

const productDummyData: ProductProps[] = [
  {
    duration: 3,
    isMarked: false,
    price: 20000,
    productName: "청바지를 활용한 텀블러 가방",
    // imageURL: "",
    productId: 1,
  },
];

const SearchPage = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await getAllProduct();
        if (!response || response.length === 0) {
          setProductList(productDummyData);
        } else {
          setProductList(response);
          console.log(response);
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
        <SearchBar />
      </S.Top>
      {/* <S.Contents>
      {productList.map((product, index) => (
          <ProductComponent1
            key={index}
            productName={product.productName}
            duration={product.duration}
            price={product.price}
            // imageURL={product.imageURL}
            isMarked={product.isMarked}
          />
        ))}
      </S.Contents> */}
      <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default SearchPage;
