import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewComponent from '../../../components/ReviewPage/ReviewComponent';
import NavBar from '../../../components/common/NavBar';
import Header from '../../../components/ReviewPage/Header';
import Filter from '../../../components/ReviewPage/Filter';
import * as S from './ReviewPage.style';
import ReviewDetailComponent from '../../../components/ReviewPage/ReviewDetailComponent';
import { getProductReviews, getReviewsRating, getReviewsOldest, getReviewsLatest } from '../../../api/review';
import type { ReviewData, ReviewImages } from '../../../components/ProductDetailPage/ReviewContent';

const ReviewPage = () => {
  const { productId } = useParams() as { productId: string };
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedReview, setSelectedReview] = useState<ReviewData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('전체');

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      let response: ReviewData[] = [];
      if (activeFilter === '별점순') {
        response = await getReviewsRating(Number(productId));
      } else if (activeFilter === '최신순') {
        response = await getReviewsLatest(Number(productId));
      } else if (activeFilter === '오래된순') {
        response = await getReviewsOldest(Number(productId));
      } else {
        response = await getProductReviews(Number(productId)); // 디폴트
      }
      setReviews(response);
    } catch (error) {
      console.error('리뷰 정보 불러오기 실패', error);
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 필터 변경 시 데이터 재요청
  useEffect(() => {
    fetchReviews();
  }, [activeFilter, productId]);

  if (isLoading) {
    return <S.Notice>로딩 중</S.Notice>;
  }

  if (reviews.length === 0) {
    return <S.Notice>등록된 리뷰가 없습니다.</S.Notice>;
  }

  const handleReviewClick = (review: ReviewData) => {
    setSelectedReview(review);
  };

  const handleOverlayClick = () => {
    setSelectedReview(null);
  };


  return (
    <S.Container>
      <S.Top>
        <Header title="후기" num={reviews.length} />
        <Filter onFilterChange={setActiveFilter}/>
      </S.Top>
      <S.Contents>
        {reviews.map((review, index) => (
            <ReviewComponent
              key={index}
              profileImg={""}
              userName={review.reviewerName}
              score={review.rating.toFixed(1)}
              content={review.content}
              reviewImg1={review.reviewImages[0]}
              reviewImg2={review.reviewImages[1]}
              reviewImg3={review.reviewImages[2]}
              writtenDate={review.reviewDate}
              onClick={() => handleReviewClick(review)}
            />
          ))}
      </S.Contents>
      <S.NavBar>
        <NavBar />
      </S.NavBar>

      {selectedReview && (
        <S.Overlay onClick={handleOverlayClick}>
          <S.DetailWrapper onClick={(e) => e.stopPropagation()}>
            <ReviewDetailComponent
              profileImg={""}
              userName={selectedReview.reviewerName}
              score={selectedReview.rating.toFixed(1)}
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

export default ReviewPage;
