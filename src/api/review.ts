import { client } from './client';

export interface ReviewProps {
  orderId: number | undefined;
  content: string;
  rating: number;
}

export const getProductReviews = async ( productId: number ) => {
    try {
        const res = await client.get(`/product/${productId}/reviews`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewsRating = async ( productId: number ) => {
    try {
        const res = await client.get(`/product/${productId}/reviews?sort=rating`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewsOldest = async ( productId: number ) => {
    try {
        const res = await client.get(`/product/${productId}/reviews?sort=oldest`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getReviewsLatest = async ( productId: number ) => {
    try {
        const res = await client.get(`/product/${productId}/reviews?sort=latest`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const postReview = async (
  reviewData: ReviewProps,
  reviewImages: File[],
) => {
  try {
    const formData = new FormData();
    formData.append(
      'reviewRequestDto',
      new Blob([JSON.stringify(reviewData)], { type: 'application/json' }),
    );
    if (reviewImages && reviewImages.length > 0) {
      reviewImages.forEach(item => formData.append('reviewImages', item)); // 나중에 키 확인
    }

    const res = await client.post(`/reviews`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

