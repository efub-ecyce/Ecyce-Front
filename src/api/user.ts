import { client } from './client';


export interface UserInfo {
  name: string;
  nickname: string;
  phoneNumber: string;
  postalCode: string | undefined;
  address1: string;
  address2: string;
  profileImageUrl?: string;
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
  const { nickname, phoneNumber, postalCode, address1, address2, bio } =
    userInfo;
  const filteredInfo = {
    nickname,
    phoneNumber,
    bio,
  };
  const addressInfo = {
    postalCode,
    address1,
    address2,
  };

  try {
    const formData = new FormData();
    if (imageFile) {
      formData.append('profileImage', imageFile);
    }

    formData.append(
      'request',
      new Blob([JSON.stringify(filteredInfo)], { type: 'application/json' }),
    );

    const res = await client.patch('/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const res2 = await client.patch('/user/address', addressInfo);

    return res.data + res2.data;

  } catch (error) {
    throw error;
  }
};
