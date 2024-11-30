import { client } from './client';

export const postNewChatRoom = async (userName: string, isSeller: boolean) => {
  try {
    const res = await client.post(`/chat/room`, {
      otherUserName: userName,
      isOtherUserBuyer: isSeller,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getChatRoomListAll = async () => {
  try {
    const res = await client.get(`/chat/rooms/all`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getChatRoomListSale = async () => {
  try {
    const res = await client.get(`/chat/rooms/selling`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getChatRoomListPurchase = async () => {
  try {
    const res = await client.get(`/chat/rooms/buying`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getChatHistory = async (roomId: number) => {
  try {
    const res = await client.get(`/chat/room/${roomId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
