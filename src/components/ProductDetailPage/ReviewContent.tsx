import * as S from './ReviewContent.style'
import { ReactComponent as ToReview } from '../../assets/ProductDetailPage/arrow_key_right.svg';
import ReviewComponent from './ReviewComponent';
import { useNavigate } from 'react-router-dom';
import { getProductReviews } from '../../api/review';
import { useState, useEffect } from 'react';

export interface ReviewData {
    content: string;
    rating: number;
    reviewDate: string;
    reviewImages: ReviewImages[];
    reviewerName: string;
}

export interface ReviewImages {
    imageId: number;
    imageUrl: string;
}

interface ReviewContentProps {
    productId: number;
}

const ReviewContent: React.FC<ReviewContentProps> = ({ productId }) => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState<ReviewData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await getProductReviews(productId);
                setReviews(response.slice(0, 3));
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

    return (
        <S.Container>
            <S.Header onClick={() => navigate(`/review/${productId}`)}>
                <S.Title>후기</S.Title>
                <ToReview/>
            </S.Header>
            <S.Contents>
        {reviews.map((review, index) => (
            <ReviewComponent
                key={index}
                profileImg={""}
                userName={review.reviewerName}
                content={review.content}
                score={review.rating.toFixed(1)}
            />
            ))}
        </S.Contents>
        </S.Container>
    );
};

export default ReviewContent;
