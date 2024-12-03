import * as S from './ProfileCard.style';
import { ReactComponent as GoBackBtn } from '../../assets/ProfilePage/arrow_key_left.svg';
import { ReactComponent as Share } from '../../assets/ProfilePage/share.svg';
import { ReactComponent as Profile } from '../../assets/ProfilePage/profile.svg';
import { ReactComponent as YellowStar } from '../../assets/ReviewWritePage/karma-logo-yellow.svg';
import { ReactComponent as EmptyStar } from '../../assets/ReviewPage/karma-logo-gray.svg';
import { ReactComponent as BgLogo } from '../../assets/ProfilePage/karma_logo.svg';
import { ReactComponent as ChatIcon } from '../../assets/ProfilePage/ChatIcon.svg';
import { useNavigate } from 'react-router-dom';
import { postNewChatRoom } from '../../api/chat';
import { userState } from '../../store/userInfoAtom';
import { useRecoilValue } from 'recoil';
interface ProfileProps {
  userId: number;
  profileImg: string;
  userName: string;
  score: number;
  content: string;
}

const ProfileCard = ({
  userId,
  profileImg,
  userName,
  score,
  content,
}: ProfileProps) => {
  const integerScore = Math.floor(score);
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userState);

  // 별점 렌더링
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < integerScore) {
        return <YellowStar key={index} />;
      }
      return <EmptyStar key={index} />;
    });
  };

  const navigateChat = async () => {
    try {
      const response = await postNewChatRoom(userName, false);
      navigate(`/chat/${response.roomId}`, {
        state: { name: userName },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Top>
        <GoBackBtn onClick={() => navigate(-1)} />
        <S.ChatAndShare>
          {/* 이거 나중에 사용자 id 받아서 그 채팅창으로 이동하도록 */}
          {userInfo.userId !== userId && (
            <S.Btn onClick={navigateChat}>
              <ChatIcon />
            </S.Btn>
          )}
          <S.Btn>
            <Share />
          </S.Btn>
        </S.ChatAndShare>
      </S.Top>
      <S.BackgroundLogo>
        <BgLogo />
      </S.BackgroundLogo>
      <S.ContentWrapper>
        <S.ProfileWrapper>
          <S.ProfileImg src={profileImg} />
          <S.UserName>{userName}</S.UserName>
        </S.ProfileWrapper>
        <S.Bio>{content}</S.Bio>
        <S.StarsWrapper>
          <S.Stars>{renderStars()}</S.Stars>
          <S.StarScore>{score.toFixed(1)}</S.StarScore>
        </S.StarsWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ProfileCard;
