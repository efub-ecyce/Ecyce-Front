import * as S from './ChatPreview.style';
import defaultProfile from '../../assets/ChatListPage/default-profile.png';
import { ChatPreviewProps } from '../../pages/Chat/ChatListPage/ChatListPage';

export const ChatPreview = ({
  profileImage,
  name,
  message,
  unread,
}: ChatPreviewProps) => {
  return (
    <S.Container>
      <S.ProfileImage src={profileImage ? profileImage : defaultProfile} />
      <S.TextContainer>
        <S.Name>{name}</S.Name>
        <S.Message>{message}</S.Message>
      </S.TextContainer>
      {unread && <S.Unread>{unread}</S.Unread>}
    </S.Container>
  );
};
