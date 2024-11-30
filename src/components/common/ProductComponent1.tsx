import React, { useState } from 'react';
import * as S from "../common/ProductComponent1.style";
import { ReactComponent as UnfilledBookmark } from '../../assets/common/ProductComponent1/bookmark_unfilled.svg';
import { ReactComponent as FilledBookmark } from '../../assets/common/ProductComponent1/bookmark_filled.svg';
import { useNavigate } from 'react-router-dom';

export interface ProductProps {
  productName: string;
  duration: number;
  price: number;
  isMarked: boolean;
  productId: number;
  // imageURL: string;
}

const ProductComponent1 = ({ productName, duration, price, isMarked, productId }: ProductProps) => {
  const [bookmarked, setBookmarked] = useState(isMarked);
  const navigate = useNavigate();

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(prev => !prev);
  }

  const handleNavigate = () => {
    navigate(`/product/${productId}`);
  };
  
  return (
    <S.Wrapper onClick={handleNavigate}>
      <S.ProductPicture imageURL={"imageURL"}></S.ProductPicture>
      <S.Title>{productName}</S.Title>
      <S.Term>제작 소요 기간 {duration}일</S.Term>
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
