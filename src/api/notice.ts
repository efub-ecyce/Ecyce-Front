import { client } from './client';

export interface notiProps {
  userId: number;
  orderId: number;
  productName: string;
  orderState: string;
  noticeContent: string;
  updatedAt: string;
}

export const getAlertList = async () => {
  try {
    const res = await client.get('/notice');
    return res.data;
  } catch (error) {
    throw error;
  }
};
