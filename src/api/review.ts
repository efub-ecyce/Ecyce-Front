import { client } from './client';

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