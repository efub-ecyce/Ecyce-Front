import * as S from './ChatPreview.style';
import defaultProfile from '../../assets/ChatListPage/default-profile.png';
import { ChatPreviewProps } from '../../pages/Chat/ChatListPage/ChatListPage';
import { useNavigate } from 'react-router-dom';

export const ChatPreview = ({
  roomId,
  profileImage,
  name,
  message,
  unread,
}: ChatPreviewProps) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(`/chat/${roomId}`)}>
      <S.ProfileImage src={profileImage ? profileImage : defaultProfile} />
      <S.TextContainer>
        <S.Name>{name}</S.Name>
        <S.Message>{message}</S.Message>
      </S.TextContainer>
      {unread && <S.Unread>{unread}</S.Unread>}
    </S.Container>
  );
};
