import * as S from './ReviewDetailComponent.style';
import { ReactComponent as ProfileImg } from '../../assets/ReviewPage/default-profile.svg';
import { ReactComponent as YellowStar } from '../../assets/ReviewPage/karma-logo-yellow.svg';
import { ReactComponent as EmptyStar } from '../../assets/ReviewPage/karma-logo-gray.svg';
import { ReactComponent as LeftArrow } from '../../assets/ReviewPage/arrow_key_left.svg';
import { ReactComponent as RightArrow } from '../../assets/ReviewPage/arrow_key_right.svg';

interface ReviewProps {
    profileImg: string;
    userName: string;
    score: number;
    content: string;
    reviewImg1: string;
    reviewImg2: string;
    reviewImg3: string;
    writtenDate: string;
}

const ReviewDetailComponent = ({ profileImg, userName, score, content, reviewImg1, reviewImg2, reviewImg3, writtenDate }: ReviewProps) => {
    
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
        <S.Wrapper>
            <S.ProfileWrapper>
                <S.UserWrapper>
                    <S.ProfileImg><ProfileImg /></S.ProfileImg>
                    <S.UserName>{userName}</S.UserName>
                </S.UserWrapper>
                <S.StarsWrapper>
                    <S.StarScore>{score.toFixed(1)}</S.StarScore>
                    <S.Stars>{renderStars()}</S.Stars>
                </S.StarsWrapper>
            </S.ProfileWrapper>
            <S.ReviewText>{content}</S.ReviewText>
            <S.ImagesWrapper>
                <S.ArrowBtn><LeftArrow /></S.ArrowBtn>
                <S.Image>
                    {reviewImg1 ? <img src={reviewImg1} alt="Review Image 1" /> : null}
                </S.Image>
                <S.ArrowBtn><RightArrow /></S.ArrowBtn>
            </S.ImagesWrapper>
            <S.WrittenDate>{writtenDate}</S.WrittenDate>
        </S.Wrapper>
    );
};
    
export default ReviewDetailComponent;
    