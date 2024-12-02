import { client } from './client';

export const getSalesHistory = async () => {
  try {
    const res = await client.get(`/orders/seller`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getPurchaseHistory = async () => {
  try {
    const res = await client.get(`/orders/buyer`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getDetailHistory = async (orderId: number) => {
  try {
    const res = await client.get(`/orders/${orderId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const patchCancelOrder = async (orderId: number) => {
  try {
    const res = await client.patch(`/orders/${orderId}/cancel`);
  } catch (error) {
    throw error;
  }
};

export const patchAcceptOrder = async (
  orderId: number,
  isAccepted: boolean,
) => {
  try {
    const res = await client.patch(
      `/orders/${orderId}/accept?accepted=${isAccepted}`,
    );
  } catch (error) {
    throw error;
  }
};

export const patchStartOrder = async (orderId: number) => {
  try {
    const res = await client.patch(`/orders/${orderId}/start`);
  } catch (error) {
    throw error;
  }
};

export const patchCompleteOrder = async (orderId: number) => {
  try {
    const res = await client.patch(`/orders/${orderId}/complete`);
  } catch (error) {
    throw error;
  }
};

export const patchShipOrder = async (
  orderId: number,
  comp: string,
  invoice: string,
) => {
  try {
    const res = await client.patch(
      `/orders/${orderId}/ship?invoiceNumber=${invoice}&deliveryCompany=${comp}`,
    );
  } catch (error) {
    throw error;
  }
};

export const patchConfirmOrder = async (orderId: number) => {
  try {
    const res = await client.patch(`/orders/${orderId}/confirm`);
  } catch (error) {
    throw error;
  }
};
