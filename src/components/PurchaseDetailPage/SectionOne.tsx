import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { ButtonBar } from './ButtonBar';

export const SectionOne = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  return (
    <S.Section>
      <S.Row1>
        <S.Title>{purchaseDetail.orderDate}</S.Title>
        <S.State>{purchaseDetail.state}</S.State>
      </S.Row1>
      <S.OrderNum>주문번호 {purchaseDetail.orderNum}</S.OrderNum>
      {[
        '접수 완료',
        '제작 대기중',
        '제작중',
        '제작 완료',
        '배송중',
        '배송 완료',
      ].includes(purchaseDetail.state) && <ButtonBar />}
    </S.Section>
  );
};
