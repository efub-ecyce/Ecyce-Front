import { client } from './client';

export const getMyProducts = async (userId: number) => {
  try {
    const res = await client.get(`artist/${userId}/product`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
