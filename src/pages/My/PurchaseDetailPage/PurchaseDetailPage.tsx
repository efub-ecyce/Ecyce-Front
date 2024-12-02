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
import { getDetailHistory } from '../../../api/order';
import { useParams } from 'react-router-dom';

const DummyDetail = {
  // 주문 상품
  orderId: 2,
  productName: '에코백',
  productOption: '에코백 옵션 1',
  orderCount: 4,
  orderState: '구매확정',
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

export const PurchaseDetailState = atom<SalesDetail>({
  key: 'purchaseDetail',
  default: {} as SalesDetail,
});

const PurchaseDetailPage = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  const orderId = useParams().orderId;

  useEffect(() => {
    const getSalesDetail = async () => {
      try {
        const response = await getDetailHistory(Number(orderId));
        setPurchaseDetail(response);
      } catch (error) {
        console.error(error);
      }
    };

    getSalesDetail();
  }, []);

  return (
    <S.Container>
      <S.HeaderWrapper>
        <Header title='구매 내역' />
      </S.HeaderWrapper>

      {typeof purchaseDetail.orderId === 'number' && (
        <>
          <SectionOne />
          <S.Bar />
          {['제작대기', '제작중', '제작완료', '배송중', '구매확정'].includes(
            purchaseDetail.orderState,
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
        </>
      )}
    </S.Container>
  );
};

export default PurchaseDetailPage;
