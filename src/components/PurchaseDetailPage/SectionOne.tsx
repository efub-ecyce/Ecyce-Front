import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { ButtonBar } from './ButtonBar';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}. ${month}. ${day}.`;
};

export const SectionOne = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  return (
    <S.Section>
      <S.Row1>
        <S.Title>{formatDate(purchaseDetail.createdAt)}</S.Title>
        <S.State>{purchaseDetail.orderState}</S.State>
      </S.Row1>
      <S.OrderNum>주문번호 {purchaseDetail.orderId}</S.OrderNum>
      {[
        '접수완료',
        '제작대기',
        '제작중',
        '제작완료',
        '배송중',
        '구매확정',
      ].includes(purchaseDetail.orderState) && <ButtonBar />}
    </S.Section>
  );
};
