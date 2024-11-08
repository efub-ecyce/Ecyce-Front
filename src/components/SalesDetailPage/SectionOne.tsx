import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { ButtonBar } from './ButtonBar';

export const SectionOne = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  return (
    <S.Section>
      <S.Row1>
        <S.Title>{salesDetail.orderDate}</S.Title>
        <S.State>{salesDetail.state}</S.State>
      </S.Row1>
      <S.OrderNum>주문번호 {salesDetail.orderNum}</S.OrderNum>
      {['접수 완료', '제작 대기중', '제작중'].includes(salesDetail.state) && (
        <ButtonBar />
      )}
    </S.Section>
  );
};
