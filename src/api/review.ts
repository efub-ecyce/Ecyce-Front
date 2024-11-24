import { client } from './client';

export interface ReviewProps {
  orderId: number | undefined;
  content: string;
  rating: number;
}

export const postReview = async (
  reviewData: ReviewProps,
  reviewImages: File[],
) => {
  try {
    const formData = new FormData();
    Object.entries(reviewData).forEach(([key, value]) =>
      formData.append(key, String(value)),
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
