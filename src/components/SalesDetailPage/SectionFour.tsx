import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';

export const SectionFour = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  return (
    <S.Section>
      <S.Title>결제 정보</S.Title>
      <S.Line />
      <S.Row2>
        <S.TableHeader>상품 금액</S.TableHeader>
        <S.Data>{Number(salesDetail.price).toLocaleString()}원</S.Data>
      </S.Row2>
      <S.Row2>
        <S.TableHeader>배송비</S.TableHeader>
        <S.Data>{Number(salesDetail.deliveryFee).toLocaleString()}원</S.Data>
      </S.Row2>
      <S.Row2>
        <S.Title>총 금액</S.Title>
        <S.Title>{Number(salesDetail.totalPrice).toLocaleString()}원</S.Title>
      </S.Row2>
    </S.Section>
  );
};
