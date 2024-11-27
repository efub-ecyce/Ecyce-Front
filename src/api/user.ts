import { client } from './client';

interface UserInfo {
  name: string;
  nickname: string;
  phoneNumber: string;
  postcode: string;
  address1: string;
  address2: string;
}

export const postNewUser = async (
  userInfo: UserInfo,
  imageFile: File | null,
) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append('profileImage', imageFile);
  }
  Object.entries(userInfo).forEach(([key, value]) => {
    if (key == 'postcode') {
      formData.append('postalCode', value);
    }
    formData.append(key, value);
  });

  try {
    // const res = await client.post(`/user`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    const tempData = {
      name: userInfo.name,
      nickname: userInfo.nickname,
      phoneNumber: userInfo.phoneNumber,
      postalCode: userInfo.postcode,
      address1: userInfo.address1,
      address2: userInfo.address2,
    };
    const res = await client.post(`/user`, tempData);
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

    // const res = await client.patch('/user', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    const res = await client.patch('/user', userInfo);

    return res.data;
  } catch (error) {
    throw error;
  }
};
