import { client } from './client';

export const getArtistInfo = async (userId: number) => {
    try {
        const res = await client.get(`/artist/${userId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getArtistProducts = async (userId: number) => {
    try {
        const res = await client.get(`/artist/${userId}/product`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getArtistReviews = async (userId: number) => {
    try {
        const res = await client.get(`/artist/${userId}/review`);
        return res.data;
    } catch (error) {
        throw error;
    }
};