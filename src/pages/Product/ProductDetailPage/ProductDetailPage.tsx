import * as S from './ProductDetailPage.style';
import React, { useState, useEffect } from 'react';
import ProductImage from '../../../components/ProductDetailPage/ProductImage';
import DetailContent from '../../../components/ProductDetailPage/DetailContent';
import ReviewContent from '../../../components/ProductDetailPage/ReviewContent';
import Footer from '../../../components/ProductDetailPage/Footer';
import { OrderModal } from '../../../components/ProductDetailPage/OrderModal';
import { getProductDetail } from '../../../api/product';
import { useParams } from 'react-router-dom';

interface ProductProps {
  productId: number;
  userId: number;
  sellerNickname: string;
  productName: string;
  isMarked: boolean;
  price: number;
  content: string;
  duration: number;
  rating: number;
  productState: string;
  deliveryFee: number;
  materialInfo: string;
  buyerNotice: string;
  options: Option[];
}

interface Option {
  optionId: number;
  optionName: string;
  optionPrice: number;
}

const ProductImgData = {
  reviewImg1: "",
  reviewImg2: "",
  reviewImg3: "",
  reviewImg4: "",
  reviewImg5: "",
};

const productDummyData: ProductProps[] = [
  {
    productId: 1,
    userId: 1,
    sellerNickname: "이화여대1886",
    productName: "더미데이터 리사이클링",
    isMarked: false,
    price: 18000,
    content: "더미데이터입니다 대충 설명란임",
    duration: 1,
    rating: 0,
    productState: "ON_SALE",
    deliveryFee: 3000,
    materialInfo: "이 제품은 오직 ",
    buyerNotice: "배송이 늦어질 수 있습니다.",
    options: [
      { optionId: 1, optionName: "L 사이즈", optionPrice: 3000 },
      { optionId: 2, optionName: "M 사이즈", optionPrice: 2000 },
      { optionId: 3, optionName: "S 사이즈", optionPrice: 1000 },
    ],
  },
];

const ProductDetailPage = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState<ProductProps | null>(null);

  const { productId } = useParams() as { productId: string };

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await getProductDetail(productId);
        console.log(response)
        if (!response || response.length === 0) {
          setProductInfo(productDummyData[0]);
        } else {
          setProductInfo(Array.isArray(response) ? response[0] : response);
        }
      } catch (error) {
        console.error(error);
        setProductInfo(productDummyData[0]);
      }
    };

    getProductInfo();
  }, []);

  const handlePurchaseClick = () => {
    setIsOrderModalOpen(true);
  };

  const handleModalClose = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <S.Container>
      <ProductImage 
        reviewImg1={ProductImgData.reviewImg1}
        reviewImg2={ProductImgData.reviewImg2}
        reviewImg3={ProductImgData.reviewImg3}
        reviewImg4={ProductImgData.reviewImg4}
        reviewImg5={ProductImgData.reviewImg5}
      />
      {productInfo ? (
        <DetailContent 
          userName={productInfo.sellerNickname}
          title={productInfo.productName}
          price={productInfo.price}
          material={productInfo.materialInfo}
          period={productInfo.duration}
          bio={productInfo.content}
        />
      ) : (
        <div>로딩 중</div>
      )}
      <ReviewContent />
      <Footer onPurchaseClick={handlePurchaseClick} />
      {isOrderModalOpen && <OrderModal modalHandler={handleModalClose} />}
    </S.Container>
  );
};

export default ProductDetailPage;
