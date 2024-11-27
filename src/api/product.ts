import { client } from './client';

export const getAllProduct = async () => {
    try {
        const res = await client.get(`/product`);
        return res.data;
    } catch (error) {
        throw error;
    }
};