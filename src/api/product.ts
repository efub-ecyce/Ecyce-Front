import { client } from './client';

export interface Option {
  optionName: string;
  optionPrice: number;
}

export interface ProductImage {
  imgId: number;
  productImgUrl: string;
}
export interface ProductInfo {
  productName: string;
  price: number | undefined;
  content: string;
  duration: number | undefined;
  deliveryFee: number | undefined;

  materialInfo: string;
  materialExample?: string;
  buyerNotice: string;
  options: Option[];
  imgs?: ProductImage[];
}

export const getAllProduct = async () => {
  try {
    const res = await client.get(`/product`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (productId: string | number) => {
  try {
    const res = await client.get(`/product/${productId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductCategory = async (categoryId: number) => {
  try {
    const res = await client.get(`/product/category?code=${categoryId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

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

export interface PatchInfo {
  productName: string;
  price: number;
  content: string;
  duration: number;
  deliveryFee: number;

  materialInfo: string;
  buyerNotice: string;
}

export const postProduct = async (
  productData: ProductInfo,
  productImages: File[],
  materialImage: File[],
) => {
  try {
    const formData = new FormData();

    formData.append('productImages', materialImage[0]);
    productImages.forEach(file => {
      formData.append('productImages', file);
    });

    formData.append(
      'request',
      new Blob([JSON.stringify(productData)], {
        type: 'application/json',
      }),
    );

    const res = await client.post('/product', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const patchProduct = async (
  productId: number,
  productData: PatchInfo,
) => {
  try {
    const formData = new FormData();

    Object.entries(productData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await client.patch(`/product/${productId}`, productData);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteOptions = async (productId: number, optionId: number) => {
  try {
    const res = await client.delete(`/product/${productId}/option/${optionId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const postOptions = async (
  productId: number,
  optionName: string,
  optionPrice: number,
) => {
  try {
    const res = await client.post(`/product/${productId}/option`, {
      optionName: optionName,
      optionPrice: optionPrice,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const patchPostImages = async (
  productId: number,
  productImages: File[],
  materialImage: File,
) => {
  try {
    if (productImages.length > 0) {
      const formData_pro = new FormData();
      productImages.forEach(img => {
        formData_pro.append('productImg', img);
      });
      const res_pro = await client.post(
        `/product/${productId}/image`,
        formData_pro,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
    }

    if (materialImage) {
      const formData_mat = new FormData();
      formData_mat.append('materialEx', materialImage);
      const res_mat = await client.patch(
        `/product/${productId}/mat`,
        formData_mat,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
    }
  } catch (error) {
    throw error;
  }
};

export const deleteImages = async (productId: number, imageId: number) => {
  try {
    const res = await client.delete(`/product/${productId}/image/${imageId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
