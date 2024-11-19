import * as S from './ProfileCard.style';
import { ReactComponent as GoBackBtn } from '../../assets/ProfilePage/arrow_key_left.svg';
import { ReactComponent as Share } from '../../assets/ProfilePage/share.svg';
import { ReactComponent as Profile } from '../../assets/ProfilePage/profile.svg';
import { ReactComponent as YellowStar } from '../../assets/ReviewWritePage/karma-logo-yellow.svg';
import { ReactComponent as EmptyStar } from '../../assets/ReviewPage/karma-logo-gray.svg';
import { ReactComponent as BgLogo } from '../../assets/ProfilePage/karma_logo.svg';

interface ProfileProps {
    profileImg: string;
    userName: string;
    score: number;
    content: string;
}

const ProfileCard = ({ profileImg, userName, score, content }: ProfileProps) => {
    const integerScore = Math.floor(score);

    // 별점 렌더링
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => {
            if (index < integerScore) {
                return <YellowStar key={index} />;
            }
            return <EmptyStar key={index} />;
        });
    };

    return (
        <S.Container>
            <S.Top>
                <GoBackBtn />
                <Share />
            </S.Top>
            <S.BackgroundLogo><BgLogo /></S.BackgroundLogo>
            <S.ContentWrapper>
                <S.ProfileWrapper>
                    <S.ProfileImg><Profile /></S.ProfileImg>
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