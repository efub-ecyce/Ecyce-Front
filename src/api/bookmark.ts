import { client } from './client';

export const postBookmark = async ( productId: number ) => {
    try {
        const res = await client.post(`/product/${productId}/bookmark`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const deleteBookmark = async ( productId: number ) => {
    try {
        const res = await client.delete(`/product/${productId}/bookmark`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const getBookmarks = async () => {
    try {
        const res = await client.get(`/users/bookmarks`);
        return res.data;
    } catch (error) {
        throw error;
    }
};