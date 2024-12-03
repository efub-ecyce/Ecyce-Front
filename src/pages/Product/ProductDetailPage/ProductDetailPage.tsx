import * as S from './ProductDetailPage.style';
import React, { useState, useEffect } from 'react';
import ProductImage from '../../../components/ProductDetailPage/ProductImage';
import DetailContent from '../../../components/ProductDetailPage/DetailContent';
import ReviewContent from '../../../components/ProductDetailPage/ReviewContent';
import Footer from '../../../components/ProductDetailPage/Footer';
import { OrderModal } from '../../../components/ProductDetailPage/OrderModal';
import { getProductDetail } from '../../../api/product';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as GoBack } from '../../../assets/ProductDetailPage/arrow_key_left.svg';
import { ReactComponent as Share } from '../../../assets/ProductDetailPage/share.svg';

export interface ProductProps {
  productId: number;
  userId: number;
  sellerNickname: string;
  sellerProfileImg: string;
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
  imgs: Image[];
}

interface Option {
  optionId: number;
  optionName: string;
  optionPrice: number;
}

interface Image {
  imgId: number;
  productImgUrl: string;
}

const ProductImgData = {
  reviewImg1: '',
  reviewImg2: '',
  reviewImg3: '',
  reviewImg4: '',
  reviewImg5: '',
};

const productDummyData: ProductProps[] = [
  {
    productId: 1,
    userId: 1,
    sellerNickname: '이화여대1886',
    sellerProfileImg: '',
    productName: '더미데이터 리사이클링',
    isMarked: false,
    price: 18000,
    content: '더미데이터입니다 대충 설명란임',
    duration: 1,
    rating: 0,
    productState: 'ON_SALE',
    deliveryFee: 3000,
    materialInfo: '이 제품은 오직 ',
    buyerNotice: '배송이 늦어질 수 있습니다.',
    options: [
      { optionId: 1, optionName: 'L 사이즈', optionPrice: 3000 },
      { optionId: 2, optionName: 'M 사이즈', optionPrice: 2000 },
      { optionId: 3, optionName: 'S 사이즈', optionPrice: 1000 },
    ],
    imgs: [{ imgId: 0, productImgUrl: '' }],
  },
];

const ProductDetailPage = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState<ProductProps | null>(null);

  const { productId } = useParams() as { productId: string };
  const navigate = useNavigate();

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await getProductDetail(productId);
        console.log(response.options);
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
  }, [productId]);

  const handlePurchaseClick = () => {
    setIsOrderModalOpen(true);
  };

  const handleModalClose = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <S.Container>
      <S.Top>
        <S.BackBtn onClick={() => navigate(-1)}>
          <GoBack />
        </S.BackBtn>
        <Share />
      </S.Top>

      <S.ContentContainer>
        <ProductImage
          reviewImg1={productInfo?.imgs[0].productImgUrl as string}
          reviewImg2={productInfo?.imgs[0].productImgUrl as string}
          reviewImg3={productInfo?.imgs[0].productImgUrl as string}
          reviewImg4={productInfo?.imgs[0].productImgUrl as string}
          reviewImg5={productInfo?.imgs[0].productImgUrl as string}
        />
        {productInfo ? (
          <>
            <DetailContent
              userId={productInfo.userId}
              userName={productInfo.sellerNickname}
              profileImg={productInfo.sellerProfileImg}
              title={productInfo.productName}
              price={productInfo.price}
              material={productInfo.materialInfo}
              period={productInfo.duration}
              bio={productInfo.content}
            />
            <ReviewContent productId={productInfo.productId} />
          </>
        ) : (
          <div>로딩 중</div>
        )}
      </S.ContentContainer>
      {productInfo && (
        <Footer
          onPurchaseClick={handlePurchaseClick}
          productInfo={productInfo}
        />
      )}
      {isOrderModalOpen && productInfo && (
        <OrderModal modalHandler={handleModalClose} productInfo={productInfo} />
      )}
    </S.Container>
  );
};

export default ProductDetailPage;
