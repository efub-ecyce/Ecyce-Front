import Header from '../../../components/common/Header';
import * as S from './SalesDetailPage.style';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { SectionOne } from '../../../components/SalesDetailPage/SectionOne';
import { SectionTwo } from '../../../components/SalesDetailPage/SectionTwo';
import { SectionThree } from '../../../components/SalesDetailPage/SectionThree';
import { SectionFour } from '../../../components/SalesDetailPage/SectionFour';

const DummyDetail = {
  orderNum: 202709281234,
  orderDate: '2024.10.05.',
  state: '접수 완료',
  productName: '텀블러 가방',
  options: { S: 1, M: 2 },
  customer: '이끼끼',
  phoneNum: '010-1234-5678',
  orderDetail: '라라ㅏㄹ',
  recipient: '이끼끼',
  recipientNum: '010-1234-5678',
  address: '서울 서대문구 어쩌구 주소',
  postcode: 12345,
  delivery: '대한통운',
  trakingNum: 12345678910,
  price: 40000,
  shipping: 4000,
  totalPrice: 44000,
};

export interface SalesDetail {
  orderNum: number;
  orderDate: string;
  state: string;
  productName: string;
  options: { [key: string]: number };
  customer: string;
  phoneNum: string;
  orderDetail: string;
  recipient: string;
  recipientNum: string;
  address: string;
  postcode: number;
  delivery: string;
  trakingNum: number;
  price: number;
  shipping: number;
  totalPrice: number;
}

export const SalesDetailState = atom<SalesDetail>({
  key: 'salesDetail',
  default: {} as SalesDetail,
});

const SalesDetailPage = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  useEffect(() => {
    setSalesDetail(DummyDetail);
  }, []);

  return (
    <S.Container>
      <Header title='판매 내역' />
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
