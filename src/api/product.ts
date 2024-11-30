import { client } from './client';

export interface Option {
  optionName: string;
  optionPrice: number;
}

export interface ProductInfo {
  productName: string;
  price: number | undefined;
  content: string;
  duration: number | undefined;
  deliveryFee: number | undefined;

  materialInfo: string;
  buyerNotice: string;
  options: Option[];
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
    productImages.forEach(file => {
      formData.append('productImages', file);
    });

    formData.append('materialExample', materialImage[0]);

    Object.entries(productData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // const res = await client.post('/product', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    const res = await client.post('/product', productData);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const patchProduct = async (
  productId: number,
  productData: PatchInfo,
  productImages: File[],
  materialImage: File[],
) => {
  try {
    const formData = new FormData();
    if (productImages) {
      productImages.forEach(file => {
        formData.append('productImages', file);
      });
    }
    if (materialImage) {
      formData.append('materialExample', materialImage[0]);
    }

    Object.entries(productData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // const res = await client.patch(`/product/${productId}`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

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
