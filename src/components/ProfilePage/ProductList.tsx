import React, { useState, useEffect } from 'react';
import ProductComponent1 from '../../components/common/ProductComponent1';
import * as S from './ProductList.style';
import { useParams } from 'react-router-dom';
import { getArtistProducts } from '../../api/artist';

export interface ArtistProduct {
  productId : number;
  userId : number;
  nickname : string;
  productName : string;
  price : number;
  duration : number;
  productState : string;
  isMarked : boolean;
}

const ProductList = () => {
  const { userId } = useParams<{ userId: string }>();
  const [productList, setProductList] = useState<ArtistProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArtistProducts = async () => {
      if (!userId) return;
      try {
        const response = await getArtistProducts(Number(userId));
        setProductList(response);
      } catch (error) {
        console.error('작가 상품 정보 로드 실패', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtistProducts();
  }, [userId]);

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (productList.length === 0) {
    return <S.Notice>등록된 상품이 없습니다.</S.Notice>;
  }

  return (
    <S.Container>
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
    </S.Container>
  );
};

export default ProductList;
