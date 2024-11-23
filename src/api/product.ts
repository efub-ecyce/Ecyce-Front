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
  option: Option[];
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

interface patchProductInfo {
  productName?: string;
  price?: number;
  content?: string;
  duration?: number;
  deliveryFee?: string;

  materialInfo?: string;
  buyerNotice?: string;
}

export const patchProduct = async (
  productId: number,
  productData: patchProductInfo,
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
