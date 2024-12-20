import * as S from './ReviewComponent.style';
import { ReactComponent as ProfileImg } from '../../assets/ReviewPage/default-profile.svg';
import { ReactComponent as YellowStar } from '../../assets/ReviewPage/karma-logo-yellow.svg';
import { ReactComponent as EmptyStar } from '../../assets/ReviewPage/karma-logo-gray.svg';
import { ReactComponent as EmptyStar_s } from '../../assets/ReviewPage/karma-logo-gray copy.svg';

import type { ReviewImages } from '../ProfilePage/ReviewList';

interface ReviewProps {
  profileImg: string;
  userName: string;
  score: number;
  content: string;
  reviewImg1: ReviewImages;
  reviewImg2: ReviewImages;
  reviewImg3: ReviewImages;
  writtenDate: string;
  onClick?: () => void;
}

const ReviewComponent = ({
  profileImg,
  userName,
  score,
  content,
  reviewImg1,
  reviewImg2,
  reviewImg3,
  writtenDate,
  onClick,
}: ReviewProps) => {
  const integerScore = Math.floor(Number(score));

  // 별점 렌더링
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < integerScore) {
        return <YellowStar key={index} />;
      }
      return <EmptyStar_s key={index} />;
    });
  };

  return (
    <S.Wrapper onClick={onClick}>
      <S.ProfileWrapper>
        <S.UserWrapper>
          <S.ProfileImg src={profileImg} />
          <S.UserName>{userName}</S.UserName>
        </S.UserWrapper>
        <S.StarsWrapper>
          <S.StarScore>{score}</S.StarScore>
          <S.Stars>{renderStars()}</S.Stars>
        </S.StarsWrapper>
      </S.ProfileWrapper>
      <S.ReviewText>{content}</S.ReviewText>
      <S.ImagesWrapper>
        <S.Image1>
          {reviewImg1 ? (
            <img src={reviewImg1.imageUrl} alt='Review Image 1' />
          ) : null}
        </S.Image1>
        <S.SmallImagesWrapper>
          <S.Image2>
            {reviewImg2 ? (
              <img src={reviewImg2.imageUrl} alt='Review Image 2' />
            ) : null}
          </S.Image2>
          <S.Image3>
            {reviewImg3 ? (
              <img src={reviewImg3.imageUrl} alt='Review Image 3' />
            ) : null}
          </S.Image3>
        </S.SmallImagesWrapper>
      </S.ImagesWrapper>
      <S.WrittenDate>{writtenDate}</S.WrittenDate>
    </S.Wrapper>
  );
};

export default ReviewComponent;
