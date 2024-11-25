import * as S from './ReviewComponent.style';
import { ReactComponent as ReviewProfileImg } from '../../assets/ProductDetailPage/review_profile.svg';
import { ReactComponent as Star } from '../../assets/ProductDetailPage/star.svg';

interface ReviewProps {
    profileImg: string;
    userName: string;
    content: string;
    score: number;
}

const ReviewComponent = ({profileImg, userName, content, score}: ReviewProps) => {
    return (
        <S.Container>
            <S.ProfileWrapper>
                <ReviewProfileImg />
                <S.UserName>{userName}</S.UserName>
            </S.ProfileWrapper>
            <S.Content>{content}</S.Content>
            <S.ScoreWrapper>
                <Star />
                <S.Score>{score}</S.Score>
            </S.ScoreWrapper>
        </S.Container>
    );
};

export default ReviewComponent;
