import React, { useState } from 'react';
import * as S from "../common/ProductComponent1.style";
import { ReactComponent as UnfilledBookmark } from '../../assets/common/ProductComponent1/bookmark_unfilled.svg';
import { ReactComponent as FilledBookmark } from '../../assets/common/ProductComponent1/bookmark_filled.svg';
import { useNavigate } from 'react-router-dom';
import { postBookmark, deleteBookmark } from '../../api/bookmark';

export interface ProductProps {
  productName: string;
  duration: number;
  price: number;
  isMarked: boolean;
  productId?: number;
  // imageURL: string;
}

const ProductComponent1 = ({ productName, duration, price, isMarked, productId }: ProductProps) => {
  const [bookmarked, setBookmarked] = useState(isMarked);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleBookmark = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!productId) return; // productId가 없는 경우 무시

    setIsLoading(true);

    try {
      if (bookmarked) {
        await deleteBookmark(productId);
        setBookmarked(false);
      } else {
        await postBookmark(productId);
        setBookmarked(true);
      }
    } catch (error) {
      console.error("Failed to toggle bookmark:", error);
      alert("북마크 상태를 변경하는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

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
