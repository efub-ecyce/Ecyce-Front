import { client } from './client';

export const getArtistInfo = async (userId: number) => {
    try {
        const res = await client.get(`/artist/${userId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};