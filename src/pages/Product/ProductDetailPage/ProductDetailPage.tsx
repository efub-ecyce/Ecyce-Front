import * as S from './ProductDetailPage.style';
import React, { useState } from 'react';
import ProductImage from '../../../components/ProductDetailPage/ProductImage';
import DetailContent from '../../../components/ProductDetailPage/DetailContent';
import ReviewContent from '../../../components/ProductDetailPage/ReviewContent';
import Footer from '../../../components/ProductDetailPage/Footer';
import { OrderModal } from '../../../components/ProductDetailPage/OrderModal';

const ProductImgData = {
  reviewImg1: "",
  reviewImg2: "",
  reviewImg3: "",
  reviewImg4: "",
  reviewImg5: "",
}

const ProductData = {
  userName: "이끼끼상점",
  title: "양말목 지구 네임택",
  price: 3000,
  material: "양말 한 켤레",
  period: 3,
  bio: "버려지는 양말목에 새로운 쓰임을 불어넣어드립니다. 환경을 생각하는 나만의 잇아이템을 이끼끼 상점에서 만나보세요. 지구 네임택은 가방이나 열쇠에 달면 정말 예뻐요! 수수수수퍼노바 노바 캔스탑 하이퍼 스텔라 원초 그걸 찾아",
}

const ProductDetailPage = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // 구매하기 버튼 클릭 핸들러
  const handlePurchaseClick = () => {
    setIsOrderModalOpen(true);
  };

  // 모달 닫기 핸들러
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
      <DetailContent 
        userName={ProductData.userName}
        title={ProductData.title}
        price={ProductData.price}
        material={ProductData.material}
        period={ProductData.period}
        bio={ProductData.bio}
      />
      <ReviewContent />
      <Footer onPurchaseClick={handlePurchaseClick}/>
      {isOrderModalOpen && (
        <OrderModal
          modalHandler={handleModalClose}
        />
      )}
    </S.Container>
  );
};

export default ProductDetailPage;
