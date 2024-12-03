import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewComponent from '../ReviewPage/ReviewComponent';
import * as S from './ReviewList.style';
import ReviewDetailComponent from '../../components/ReviewPage/ReviewDetailComponent';
import { getArtistReviews } from '../../api/artist';

interface ArtistReview {
  reviewId: number;
  reviewerName: string;
  content: string;
  reviewDate: string;
  reviewImages: ReviewImages[];
  userImage: string;
  rating: number;
}

export interface ReviewImages {
  imageId: number;
  imageUrl: string;
}

const ReviewList = () => {
  const { userId } = useParams<{ userId: string }>();
  const [reviewList, setReviewList] = useState<ArtistReview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedReview, setSelectedReview] = useState<ArtistReview | null>(
    null,
  );

  const handleReviewClick = (review: ArtistReview) => {
    setSelectedReview(review);
  };

  const handleOverlayClick = () => {
    setSelectedReview(null);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      if (!userId) return;
      try {
        const response = await getArtistReviews(Number(userId));
        setReviewList(response);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  if (isLoading) {
    return <S.Notice>로딩 중</S.Notice>;
  }

  if (reviewList.length === 0) {
    return <S.Notice>등록된 리뷰가 없습니다.</S.Notice>;
  }

  return (
    <S.Container>
      <S.Contents>
        {reviewList.map(review => (
          <ReviewComponent
            key={review.reviewId}
            profileImg={review.userImage} // 이미지 데이터 추가 처리하기
            userName={review.reviewerName}
            score={review.rating}
            content={review.content}
            reviewImg1={review.reviewImages[0] || ''}
            reviewImg2={review.reviewImages[1] || ''}
            reviewImg3={review.reviewImages[2] || ''}
            writtenDate={review.reviewDate}
            onClick={() => handleReviewClick(review)}
          />
        ))}
      </S.Contents>

      {selectedReview && (
        <S.Overlay onClick={handleOverlayClick}>
          <S.DetailWrapper onClick={e => e.stopPropagation()}>
            <ReviewDetailComponent
              profileImg='' // 이미지 데이터 추가 처리하기
              userName={selectedReview.reviewerName}
              score={selectedReview.rating}
              content={selectedReview.content}
              reviewImg1={selectedReview.reviewImages[0]}
              reviewImg2={selectedReview.reviewImages[1]}
              reviewImg3={selectedReview.reviewImages[2]}
              writtenDate={selectedReview.reviewDate}
            />
          </S.DetailWrapper>
        </S.Overlay>
      )}
    </S.Container>
  );
};

export default ReviewList;
