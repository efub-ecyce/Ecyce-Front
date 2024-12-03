import * as S from './Noti.style';
import { ReactComponent as ShipIcon } from '../../assets/NotificationPage/local_shipping.svg';
import { ReactComponent as BoxIcon } from '../../assets/NotificationPage/inventory_more.svg';
import { ReactComponent as CheckIcon } from '../../assets/NotificationPage/chat_check.svg';
import { ReactComponent as RefuseIcon } from '../../assets/NotificationPage/chat_close.svg';
import { useNavigate } from 'react-router-dom';
import { notiProps } from '../../api/notice';

export const Noti = ({
  orderId,
  orderState,
  productName,
  noticeContent,
  updatedAt,
}: notiProps) => {
  const navigate = useNavigate();

  const renderIcon = () => {
    switch (orderState) {
      case '배송중':
        return <ShipIcon />;
      case '접수완료':
        return <BoxIcon />;
      case '제작대기':
        return <CheckIcon />;
      case '주문거절':
        return <RefuseIcon />;
      default:
        return null;
    }
  };

  const formatTimeStamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const navigateDetail = () => {
    switch (orderState) {
      case '접수완료':
        navigate(`/sales/${orderId}`);
        return;
      default:
        navigate(`/purchase/${orderId}`);
        return;
    }
  };

  return (
    <S.Container $isRead={false} onClick={navigateDetail}>
      <S.IconWrapper>{renderIcon()}</S.IconWrapper>
      <S.InfoContainer>
        <S.Title>{noticeContent}</S.Title>
        <S.Subtitle>{productName}</S.Subtitle>
        <S.Time>{formatTimeStamp(updatedAt)}</S.Time>
      </S.InfoContainer>
    </S.Container>
  );
};
