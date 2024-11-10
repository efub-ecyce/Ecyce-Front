import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { useNavigate } from 'react-router-dom';

export const SectionTwo = () => {
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);
  const navigate = useNavigate();

  const optionEntries = purchaseDetail?.options
    ? Object.entries(purchaseDetail.options)
    : [];

  return (
    <S.Section>
      <S.Title>주문 정보</S.Title>
      <S.Line />
      <S.TableRow>
        <S.TableHeader>상품명</S.TableHeader>
        <S.Data>{purchaseDetail.productName}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>옵션</S.TableHeader>
        <S.OptionContainer>
          {optionEntries.map(([option, count]) => (
            <S.Data>
              {option} | {count}개
            </S.Data>
          ))}
        </S.OptionContainer>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주문자</S.TableHeader>
        <S.Data>{purchaseDetail.customer}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{purchaseDetail.phoneNum}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>요청 사항</S.TableHeader>
        <S.Data>{purchaseDetail.orderDetail}</S.Data>
      </S.TableRow>
    </S.Section>
  );
};
