import { client } from './client';

export const postPayInfo = async (
        imp_uid: string,
        orderId: string,
        payAmount: number,
        payStatus: string,
        payTime: string,
    ) => {
        try {
        const res = await client.post(`/pay/${imp_uid}`, {
            imp_uid: imp_uid,
            orderId: orderId,
            payAmount: payAmount,
            payStatus: payStatus,
            payTime: payTime,
        });
        return res.data;
        } catch (error) {
        throw error;
        }
};