import { client } from './client';

interface userInfo {
  name: string;
  nickname: string;
  phoneNumber: string;
  postcode: string;
  address1: string;
  address2: string;
}

export const postNewUser = async (
  userInfo: userInfo,
  imageFile: File | null,
) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('profileImage', imageFile);
  }
  Object.entries(userInfo).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const res = await client.post(`/user`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
