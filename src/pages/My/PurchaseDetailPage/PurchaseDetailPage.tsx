import Header from '../../../components/common/Header';
import * as S from '../SalesDetailPage/SalesDetailPage.style';
import { SalesDetail } from '../SalesDetailPage/SalesDetailPage';
import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { SectionOne } from '../../../components/PurchaseDetailPage/SectionOne';
import { SectionTwo } from '../../../components/PurchaseDetailPage/SectionTwo';
import { SectionThree } from '../../../components/PurchaseDetailPage/SectionThree';
import { SectionFour } from '../../../components/PurchaseDetailPage/SectionFour';
import { AlertSection } from '../../../components/PurchaseDetailPage/AlertSection';

const DummyDetail = {
  orderNum: 202709281234,
  orderDate: '2024.10.05.',
  state: '제작 대기중',
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
  sellerName: '김승자',
  sellerNum: '010-1234-4567',
  sellerAddress: '서울 서대문구 어쩌구 주소',
  sellerPostcode: 12345,
};

export const PurchaseDetailState = atom<SalesDetail>({
  key: 'purchaseDetail',
  default: {} as SalesDetail,
});

const PurchaseDetailPage = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  useEffect(() => {
    setPurchaseDetail(DummyDetail);
  }, []);

  return (
    <S.Container>
      <Header title='구매 내역' />
      <SectionOne />
      <S.Bar />
      {['제작 대기중', '제작중', '제작 완료', '배송중', '배송 완료'].includes(
        purchaseDetail.state,
      ) && (
        <>
          <AlertSection />
          <S.Bar />
        </>
      )}

      <SectionTwo />
      <S.Bar />
      <SectionThree />
      <S.Bar />
      <SectionFour />
    </S.Container>
  );
};

export default PurchaseDetailPage;
