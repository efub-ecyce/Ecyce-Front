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
  deliveryCompany: string;
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
  const orderId = useParams().orderId;

  useEffect(() => {
    const getSalesDetail = async () => {
      try {
        console.log(orderId);
        const response = await getDetailHistory(Number(orderId));
        setSalesDetail(response);
      } catch (error) {
        console.error(error);
      }
    };

    getSalesDetail();
  }, [orderId]);

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
