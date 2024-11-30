import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { ButtonBar } from './ButtonBar';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}. ${month}. ${day}.`;
};

export const SectionOne = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  return (
    <S.Section>
      <S.Row1>
        <S.Title>{formatDate(salesDetail.createdAt)}</S.Title>
        <S.State>{salesDetail.orderState}</S.State>
      </S.Row1>
      <S.OrderNum>주문번호 {salesDetail.orderId}</S.OrderNum>
      {['접수완료', '제작대기중', '제작중'].includes(
        salesDetail.orderState,
      ) && <ButtonBar />}
    </S.Section>
  );
};
