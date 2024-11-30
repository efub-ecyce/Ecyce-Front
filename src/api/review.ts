import { client } from './client';

export const getProductReviews = async ( productId: number ) => {
    try {
        const res = await client.get(`/product/${productId}/reviews`);
        return res.data;
    } catch (error) {
        throw error;
    }
};