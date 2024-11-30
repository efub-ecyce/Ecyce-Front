import { client } from './client';


interface UserInfo {
  name: string;
  nickname: string;
  phoneNumber: string;
  postalCode: string;
  address1: string;
  address2: string;
  bio?: string;
}

export const postNewUser = async (
  userInfo: UserInfo,
  imageFile: File | null,
) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('profileImage', imageFile);
  }
  formData.append(
    'request',
    new Blob([JSON.stringify(userInfo)], { type: 'application/json' }),
  );

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

export const getUserInfo = async () => {
  try {
    const res = await client.get('/user');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const patchUserInfo = async (
  userInfo: UserInfo,
  imageFile: File | null,
) => {
  try {
    const formData = new FormData();
    if (imageFile) {
      formData.append('profileImage', imageFile);
    }
    Object.entries(userInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await client.patch('/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    return res.data;
  } catch (error) {
    throw error;
  }
};
