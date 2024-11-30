import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewComponent from '../../../components/ReviewPage/ReviewComponent';
import NavBar from '../../../components/common/NavBar';
import Header from '../../../components/ReviewPage/Header';
import Filter from '../../../components/ReviewPage/Filter';
import * as S from './ReviewPage.style';
import ReviewDetailComponent from '../../../components/ReviewPage/ReviewDetailComponent';
import { getProductReviews } from '../../../api/review';
import type { ReviewData, ReviewImages } from '../../../components/ProductDetailPage/ReviewContent';


// interface ReviewDataType {
//   profileImg: string;
//   userName: string;
//   score: number;
//   content: string;
//   reviewImg1: string;
//   reviewImg2: string;
//   reviewImg3: string;
//   writtenDate: string;
// }

// const ReviewData = {
//   profileImg: "",
//   userName: "가장긴닉네임은열글자",
//   score: 5.0,
//   content: "수없이 연결된 실 속에서 사랑한 너와 나의 모습은 헝클어진 채로 버려지고 말았지 영원히 남을 매듭과 시간의 흐름을 기억하는 것 바라지 않았던 눈보라 속에 빗발치듯이 쏟아진 눈물 이제야 마주한 꿈의 대양 춤을 추듯이 흘러가보자 믿을 수 없을만큼 아름다운 그 바다로 함께 갈 수 있다면",
//   reviewImg1: "",
//   reviewImg2: "",
//   reviewImg3: "",
//   writtenDate: "2024.10.13",
// }

const ReviewPage = () => {
  const { productId } = useParams() as { productId: string };
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedReview, setSelectedReview] = useState<ReviewData | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await getProductReviews(Number(productId));
                setReviews(response);
            } catch (error) {
                console.error('리뷰 정보 불러오기 실패', error);
            } finally {
                setIsLoading(false);
            }
            };
        
            fetchReviews();
        }, [productId]);
        
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
        <Filter />
      </S.Top>
      <S.Contents>
        {reviews.map((review, index) => (
            <ReviewComponent
              key={index}
              profileImg={""}
              userName={review.reviewerName}
              score={review.rating.toFixed(1)}
              content={review.content}
              reviewImg1={""}
              reviewImg2={""}
              reviewImg3={""}
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
              reviewImg1={""}
              reviewImg2={""}
              reviewImg3={""}
              writtenDate={selectedReview.reviewDate}
            />
          </S.DetailWrapper>
        </S.Overlay>
      )}
    </S.Container>
  );
};

export default ReviewPage;
