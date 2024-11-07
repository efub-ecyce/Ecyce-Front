import * as S from './Noti.style';
import { ReactComponent as ShipIcon } from '../../assets/NotificationPage/local_shipping.svg';
import { ReactComponent as BoxIcon } from '../../assets/NotificationPage/inventory_more.svg';
import { ReactComponent as CheckIcon } from '../../assets/NotificationPage/chat_check.svg';

interface NotiProps {
  isRead: boolean;
  type: string;
  title: string;
  subtitle: string;
  time: string;
}

export const Noti = ({ isRead, type, title, subtitle, time }: NotiProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'ship':
        return <ShipIcon />;
      case 'box':
        return <BoxIcon />;
      case 'check':
        return <CheckIcon />;
      default:
        return null;
    }
  };

  return (
    <S.Container $isRead={isRead}>
      <S.IconWrapper>{renderIcon()}</S.IconWrapper>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Time>{time}</S.Time>
      </S.InfoContainer>
    </S.Container>
  );
};
