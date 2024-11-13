import { client } from './client';

interface userInfo {
  name: string;
  nickname: string;
  phoneNumber: string;
  postcode: string;
  address1: string;
  address2: string;
}

export const postNewUser = async (userInfo: userInfo) => {
  try {
    const res = await client.post(`user/new`, userInfo);
    return res.data;
  } catch (error) {
    throw error;
  }
};
