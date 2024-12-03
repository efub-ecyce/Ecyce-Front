import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import SearchBar from '../../../components/SearchPage/SearchBar';
import * as S from './SearchPage.style';
import { getAllProduct } from '../../../api/product';
import { getSearchResult } from '../../../api/search';

interface ResultProps {
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

const SearchPage = () => {
  const [productList, setProductList] = useState<ResultProps[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');

  const fetchAllProducts = async () => {
    try {
      const response = await getAllProduct();
      setProductList(response);
    } catch (error) {
      console.error('Failed to fetch all products:', error);
    }
  };

  const fetchSearchResults = async (word: string) => {
    try {
      const response = await getSearchResult(word);
      setProductList(response);
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };

  useEffect(() => {
    if (searchWord.trim() === '') {
      fetchAllProducts();
    } else {
      fetchSearchResults(searchWord);
    }
  }, [searchWord]);

  return (
    <S.Container>
      <S.Top>
        <SearchBar onSearch={setSearchWord} /> {/* 검색어 업데이트 */}
      </S.Top>
      <S.Contents>
        {productList.map(product => (
          <ProductComponent1
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            duration={product.duration}
            thumbnail={product.thumbnail}
            price={product.price}
            isMarked={product.isMarked}
          />
        ))}
      </S.Contents>
      <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default SearchPage;
