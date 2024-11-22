import { client } from './client';

export const patchProductState = async (productId: number, state: string) => {
  try {
    const res = await client.patch(`/product/${productId}`, {
      productState: state,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const res = await client.delete(`/product/${productId}`);
  } catch (error) {
    throw error;
  }
};
