import { client } from './client';

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

export const getProductDetail = async (productId: number) => {
  try {
    const res = await client.get(`/product/${productId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

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
  productData: ProductInfo,
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

    const res = await client.patch(`/product/${productId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const patchOptions = async (productId:number, options : Option[]) => {
//     try{
//         const res = await client.patch(`/product/${productId}`,)

//     }catch(error){
//         throw error;
//     }
// }
