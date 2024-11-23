import * as S from './History.style';
import { ReactComponent as ArrowIcon } from '../../assets/HistoryPage/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import { HistoryProps } from '../../pages/My/PurchaseHistoryPage/PurchaseHistoryPage';

function formatTimestamp(isoTimestamp: string) {
  const date = new Date(isoTimestamp);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}. ${month}. ${day}.`;
}

export const History = (props: HistoryProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.Date>{formatTimestamp(props.createdAt)}</S.Date>
        <S.State>{props.orderState}</S.State>
      </S.Header>
      <S.Content>
        <S.Image src={props.productImages.productImageUrl} />
        <S.Info>
          <S.Name>{props.productName}</S.Name>
          <S.Options>
            <S.Option>
              {props.productOption} | {props.orderCount}개
            </S.Option>
          </S.Options>
          <S.Price>{props.totalPrice.toLocaleString()}원</S.Price>
        </S.Info>
      </S.Content>
      <S.IconWrapper onClick={() => navigate(`./${props.orderId}`)}>
        <ArrowIcon />
      </S.IconWrapper>
    </S.Container>
  );
};
