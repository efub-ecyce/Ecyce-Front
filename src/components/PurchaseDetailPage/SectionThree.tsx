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
        <S.Data>{purchaseDetail.recipient}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{purchaseDetail.recipientNum}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주소</S.TableHeader>
        <S.Data>{`[${purchaseDetail.postcode}] ${purchaseDetail.address}`}</S.Data>
      </S.TableRow>
      {(purchaseDetail.state === '배송중' ||
        purchaseDetail.state === '배송 완료') && (
        <>
          <S.TableRow>
            <S.TableHeader>택배사</S.TableHeader>
            <S.Data>{purchaseDetail.delivery}</S.Data>
          </S.TableRow>
          <S.TableRow>
            <S.TableHeader>운송장번호</S.TableHeader>
            <S.Data>{purchaseDetail.trakingNum}</S.Data>
          </S.TableRow>
        </>
      )}
    </S.Section>
  );
};
