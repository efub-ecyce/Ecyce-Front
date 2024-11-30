import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewComponent from '../ReviewPage/ReviewComponent';
import * as S from './ReviewList.style';
import ReviewDetailComponent from '../../components/ReviewPage/ReviewDetailComponent';
import { getArtistReviews } from '../../api/artist';

interface ArtistReview {
    reviewId : number;
    reviewer: string;
    reviewContent: string;
    reviewDate: string;
    reviewImages: string;
}


// interface ReviewDataType {
//     profileImg: string;
//     userName: string;
//     score: number;
//     content: string;
//     reviewImg1: string;
//     reviewImg2: string;
//     reviewImg3: string;
//     writtenDate: string;
// }

// const ReviewData = {
//     profileImg: "",
//     userName: "가장긴닉네임은열글자",
//     score: 5.0,
//     content: "수없이 연결된 실 속에서 사랑한 너와 나의 모습은 헝클어진 채로 버려지고 말았지 영원히 남을 매듭과 시간의 흐름을 기억하는 것 바라지 않았던 눈보라 속에 빗발치듯이 쏟아진 눈물 이제야 마주한 꿈의 대양 춤을 추듯이 흘러가보자 믿을 수 없을만큼 아름다운 그 바다로 함께 갈 수 있다면",
//     reviewImg1: "",
//     reviewImg2: "",
//     reviewImg3: "",
//     writtenDate: "2024.10.13",
// }

const ReviewList = () => {
    const { userId } = useParams<{ userId: string }>();
    const [reviewList, setReviewList] = useState<ArtistReview[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedReview, setSelectedReview] = useState<ArtistReview | null>(null);

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
                {reviewList.map((review) => (
                    <ReviewComponent
                        key={review.reviewId}
                        profileImg="" // 이미지 데이터 추가 처리하기
                        userName={review.reviewer}
                        score={5}
                        content={review.reviewContent}
                        reviewImg1={review.reviewImages[0] || ""}
                        reviewImg2={review.reviewImages[1] || ""}
                        reviewImg3={review.reviewImages[2] || ""}
                        writtenDate={review.reviewDate}
                        onClick={() => handleReviewClick(review)}
                    />
                ))}
            </S.Contents>

            {selectedReview && (
                <S.Overlay onClick={handleOverlayClick}>
                    <S.DetailWrapper onClick={(e) => e.stopPropagation()}>
                        <ReviewDetailComponent
                            profileImg="" // 이미지 데이터 추가 처리하기
                            userName={selectedReview.reviewer}
                            score={5}
                            content={selectedReview.reviewContent}
                            reviewImg1={selectedReview.reviewImages[0] || ""}
                            reviewImg2={selectedReview.reviewImages[1] || ""}
                            reviewImg3={selectedReview.reviewImages[2] || ""}
                            writtenDate={selectedReview.reviewDate}
                        />
                    </S.DetailWrapper>
                </S.Overlay>
            )}
        </S.Container>
    );
};

export default ReviewList;
