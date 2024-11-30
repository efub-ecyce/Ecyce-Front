import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';

export const SectionThree = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  return (
    <S.Section>
      <S.Title>배송 정보</S.Title>
      <S.Line />
      <S.TableRow>
        <S.TableHeader>수령인</S.TableHeader>
        <S.Data>{purchaseDetail.buyerName}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{purchaseDetail.buyerPhone}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주소</S.TableHeader>
        <S.Data>{purchaseDetail.buyerAddress}</S.Data>
      </S.TableRow>
      {(purchaseDetail.orderState === '배송중' ||
        purchaseDetail.orderState === '구매확정') && (
        <>
          <S.TableRow>
            <S.TableHeader>택배사</S.TableHeader>
            <S.Data>{}</S.Data>
          </S.TableRow>
          <S.TableRow>
            <S.TableHeader>운송장번호</S.TableHeader>
            <S.Data>{purchaseDetail.invoiceNumber}</S.Data>
          </S.TableRow>
        </>
      )}
    </S.Section>
  );
};
