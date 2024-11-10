import React, { useState } from 'react';
import * as S from "../common/ProductComponent1.style";
import { ReactComponent as UnfilledBookmark } from '../../assets/common/ProductComponent1/bookmark_unfilled.svg';
import { ReactComponent as FilledBookmark } from '../../assets/common/ProductComponent1/bookmark_filled.svg';

interface ProductProps {
  title: string;
  term: number;
  price: number;
  imageURL: string;
  bookmarkedData: boolean;
}

const ProductComponent1 = ({ title, term, price, imageURL, bookmarkedData }: ProductProps) => {
  const [bookmarked, setBookmarked] = useState(bookmarkedData);

  const toggleBookmark = () => {
    setBookmarked(prev => !prev);
  }
  
  return (
    <S.Wrapper>
      <S.ProductPicture imageURL={imageURL}></S.ProductPicture>
      <S.Title>{title}</S.Title>
      <S.Term>제작 소요 기간 {term}일</S.Term>
      <S.PNB>
        <S.Price>{price.toLocaleString()}원</S.Price>
        {bookmarked ? (
          <FilledBookmark onClick={toggleBookmark} />
        ) : (
          <UnfilledBookmark onClick={toggleBookmark} />
        )}
      </S.PNB>
    </S.Wrapper>
  );
};

export default ProductComponent1;
