import Header from '../../../components/common/Header';
import * as S from './SalesDetailPage.style';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { SectionOne } from '../../../components/SalesDetailPage/SectionOne';
import { SectionTwo } from '../../../components/SalesDetailPage/SectionTwo';
import { SectionThree } from '../../../components/SalesDetailPage/SectionThree';
import { SectionFour } from '../../../components/SalesDetailPage/SectionFour';
import { getDetailHistory } from '../../../api/order';
import { useParams } from 'react-router-dom';

const DummyDetail = {
  // 주문 상품
  orderId: 2,
  productName: '에코백',
  productOption: '에코백 옵션 1',
  orderCount: 4,
  orderState: '접수완료',
  // 안내 사항
  materialInfo: '단단한 가죽',
  buyerNotice: '가죽이 변형될 수 있습니다.',
  // 요청 사항
  request: '과잠으로 에코백을 만들어주세요.',
  createdAt: '2024-11-08T22:39:14.612877',
  // 판매자
  sellerNickname: '판매자 닉네임',
  sellerName: '판매자 이름',
  sellerPhone: '010-1234-5678',
  sellerAddress: '[12345] 서울특별시 강남구 테헤란로 123',
  // 구매자
  buyerNickname: '구매자 닉네임',
  buyerName: '구매자 이름',
  buyerPhone: '010-1234-5678',
  buyerAddress: '[12345] 서울특별시 강남구 테헤란로 123',
  invoiceNumber: '대한통운 122223333', // 배송 전이라면 "미발행"
  // 결제 정보
  price: 36000,
  deliveryFee: 3000,
  totalPrice: 39000,
};

export interface SalesDetail {
  orderId: number;
  productName: string;
  productOption: string;
  orderCount: number;
  orderState: string;

  materialInfo: string;
  buyerNotice: string;

  request: string;
  createdAt: string;

  sellerNickname: string;
  sellerName: string;
  sellerPhone: string;
  sellerAddress: string;

  buyerNickname: string;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  invoiceNumber: string;

  price: number;
  deliveryFee: number;
  totalPrice: number;
}

export const SalesDetailState = atom<SalesDetail>({
  key: 'salesDetail',
  default: {} as SalesDetail,
});

const SalesDetailPage = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);
  const orderId = useParams();

  useEffect(() => {
    const getSalesDetail = async () => {
      try {
        // const response = await getDetailHistory(Number(orderId));
        // setSalesDetail(response);
        setSalesDetail(DummyDetail);
      } catch (error) {
        console.error(error);
      }
    };

    getSalesDetail();
  }, []);

  return (
    <S.Container>
      <S.HeaderWrapper>
        <Header title='판매 내역' />
      </S.HeaderWrapper>
      <SectionOne />
      <S.Bar />
      <SectionTwo />
      <S.Bar />
      <SectionThree />
      <S.Bar />
      <SectionFour />
    </S.Container>
  );
};

export default SalesDetailPage;
