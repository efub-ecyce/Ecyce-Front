import React, { useState } from 'react';
import ReviewComponent from '../ReviewPage/ReviewComponent';
import * as S from './ReviewList.style';
import ReviewDetailComponent from '../../components/ReviewPage/ReviewDetailComponent';


interface ReviewDataType {
    profileImg: string;
    userName: string;
    score: number;
    content: string;
    reviewImg1: string;
    reviewImg2: string;
    reviewImg3: string;
    writtenDate: string;
}

const ReviewData = {
    profileImg: "",
    userName: "가장긴닉네임은열글자",
    score: 5.0,
    content: "수없이 연결된 실 속에서 사랑한 너와 나의 모습은 헝클어진 채로 버려지고 말았지 영원히 남을 매듭과 시간의 흐름을 기억하는 것 바라지 않았던 눈보라 속에 빗발치듯이 쏟아진 눈물 이제야 마주한 꿈의 대양 춤을 추듯이 흘러가보자 믿을 수 없을만큼 아름다운 그 바다로 함께 갈 수 있다면",
    reviewImg1: "",
    reviewImg2: "",
    reviewImg3: "",
    writtenDate: "2024.10.13",
}

const ReviewList = () => {
    const [selectedReview, setSelectedReview] = useState<ReviewDataType | null>(null);

    const handleReviewClick = (review: ReviewDataType) => {
        setSelectedReview(review);
    };

    const handleOverlayClick = () => {
        setSelectedReview(null);
    };

    return (
        <S.Container>
            <S.Contents>
            {Array(6)
                .fill(ReviewData)
                .map((review, index) => (
                    <ReviewComponent
                    key={index}
                    profileImg={review.profileImg}
                    userName={review.userName}
                    score={review.score}
                    content={review.content}
                    reviewImg1={review.reviewImg1}
                    reviewImg2={review.reviewImg2}
                    reviewImg3={review.reviewImg3}
                    writtenDate={review.writtenDate}
                    onClick={() => handleReviewClick(review)}
                    />
                ))}
            </S.Contents>

            {selectedReview && (
                <S.Overlay onClick={handleOverlayClick}>
                <S.DetailWrapper onClick={(e) => e.stopPropagation()}>
                    <ReviewDetailComponent
                    profileImg={selectedReview.profileImg}
                    userName={selectedReview.userName}
                    score={selectedReview.score}
                    content={selectedReview.content}
                    reviewImg1={selectedReview.reviewImg1}
                    reviewImg2={selectedReview.reviewImg2}
                    reviewImg3={selectedReview.reviewImg3}
                    writtenDate={selectedReview.writtenDate}
                    />
                </S.DetailWrapper>
                </S.Overlay>
            )}
        </S.Container>
    );
};

export default ReviewList;
