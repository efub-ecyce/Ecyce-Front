import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';

export const SectionFour = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  return (
    <S.Section>
      <S.Title>결제 정보</S.Title>
      <S.Line />
      <S.Row2>
        <S.TableHeader>상품 금액</S.TableHeader>
        <S.Data>{Number(purchaseDetail.price).toLocaleString()}원</S.Data>
      </S.Row2>
      <S.Row2>
        <S.TableHeader>배송비</S.TableHeader>
        <S.Data>{Number(purchaseDetail.shipping).toLocaleString()}원</S.Data>
      </S.Row2>
      <S.Row2>
        <S.Title>총 금액</S.Title>
        <S.Title>
          {Number(purchaseDetail.totalPrice).toLocaleString()}원
        </S.Title>
      </S.Row2>
    </S.Section>
  );
};
