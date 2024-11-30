import { client } from './client';

export const getSearchResult = async (searchWord: string) => {
    try {
        const res = await client.get(`/product/search?word=${searchWord}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};