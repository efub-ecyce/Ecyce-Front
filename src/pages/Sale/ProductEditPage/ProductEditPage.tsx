import * as S from '../ProductRegistPage/ProductRegistPage.style';
import { ImageUpload } from '../../../components/common/ImageUpload';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import { OptionComponent } from '../../../components/ProductRegisterPage/OptionComponent';
import { Button } from '../../../components/common/Button';
import {
  getProductDetail,
  patchProduct,
  postProduct,
  ProductInfo,
} from '../../../api/product';

export interface Option_Client {
  id: number;
  name: string | undefined;
  price: number | undefined;
}

const dummyData = {
  productId: 1,
  userId: 1,
  sellerNickname: '이끼끼47212',
  productName: '파우치 가방 리사이클링',
  isMarked: false, // false면 북마크 안한거임
  price: 40000,
  content: '안쓰는 학잠이나 바지를 파우치로 만들어드려요.',
  duration: 1,
  rating: 0,
  productState: 'ON_SALE',
  deliveryFee: 3000,
  materialInfo: '이 제품은 오직 ',
  buyerNotice: '배송이 늦어질 수 있습니다.',
  options: [
    {
      optionId: 1,
      optionName: 'L 사이즈',
      optionPrice: 3000,
    },
    {
      optionId: 2,
      optionName: 'M 사이즈',
      optionPrice: 2000,
    },
    {
      optionId: 3,
      optionName: 'S 사이즈',
      optionPrice: 1000,
    },
  ],
};

const extractProductData = (data: any) => {
  const {
    productName,
    price,
    content,
    duration,
    deliveryFee,
    materialInfo,
    buyerNotice,
    options,
  } = data;

  return {
    productName,
    price,
    content,
    duration,
    deliveryFee,
    materialInfo,
    buyerNotice,
    options: options.map((opt: any) => ({
      optionName: opt.optionName,
      optionPrice: opt.optionPrice,
    })),
  };
};

const ProductEditPage = () => {
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);
  const [productImgFile, setProductImgFile] = useState<File[]>([]);
  const [productImgPreview, setProductImgPreview] = useState<string[]>([]);
  const [materialImgFile, setMaterialImgFile] = useState<File[]>([]);
  const [materialImgPreview, setMaterialImgPreview] = useState<string[]>([]);

  const [productData, setProductData] = useState<ProductInfo>({
    productName: '',
    price: undefined,
    content: '',
    duration: undefined,
    deliveryFee: undefined,
    materialInfo: '',
    buyerNotice: '',
    options: [],
  });

  const [options, setOptions] = useState<Option_Client[]>([]);

  const navigate = useNavigate();
  const productId = useLocation().state.productId;

  useEffect(() => {
    const getProductData = async () => {
      try {
        //const res = await getProductDetail(productId);
        const res = dummyData;
        const extractedData = extractProductData(res);
        setProductData(extractedData);
      } catch (error) {
        console.error(error);
      }
    };

    getProductData();
  }, []);

  useEffect(() => {
    const isAllFilled = (): boolean => {
      const {
        productName,
        price,
        content,
        duration,
        deliveryFee,
        materialInfo,
        buyerNotice,
        options,
      } = productData;

      // Check if all fields are filled
      return (
        productName.trim() !== '' && // productName is not empty
        !!price && // price is defined
        content.trim() !== '' && // content is not empty
        !!duration && // duration is defined
        !!deliveryFee && // deliveryFee is defined
        materialInfo.trim() !== '' && // materialInfo is not empty
        buyerNotice.trim() !== '' && // buyerNotice is not empty
        options.length > 0 && // option array is not empty
        options.every(
          opt =>
            opt.optionName?.trim() !== '' && // optionName is not empty
            !!opt.optionPrice, // optionPrice is defined
        ) &&
        productImgFile.length > 0 && // productImgFile has at least one file
        materialImgFile.length > 0 // materialImgFile has at least one file
      );
    };

    setIsAllFilled(isAllFilled);
  }, [productData, productImgFile, materialImgFile]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //숫자 외 텍스트 입력 금지
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const isNumber = /^[0-9]$/;

    if (!isNumber.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const onChangeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const onClickButton = async () => {
    if (isAllFilled) {
      try {
        const res = await patchProduct(
          productId,
          productData,
          productImgFile,
          materialImgFile,
        );
        navigate('./complete');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <S.Container>
      <Header title='등록하기' />
      <S.Title>기본 정보</S.Title>
      <ImageUpload
        id='product'
        imageNum={5}
        imgFile={productImgFile}
        setImgFile={setProductImgFile}
        imgPreview={productImgPreview}
        setImgPreview={setProductImgPreview}
      />
      <S.TextInput
        type='text'
        placeholder='상품명'
        value={productData.productName}
        name='productName'
        onChange={onChangeData}
      />
      <S.TextArea
        placeholder='업사이클링 상품에 대해 소개해주세요!'
        value={productData.content}
        name='content'
        onChange={onChangeData}
      />
      <S.TextInput
        type='text'
        placeholder='₩ 가격'
        value={productData.price}
        name='price'
        onChange={onChangeData}
        onKeyDown={handleKeyDown}
      />
      <S.TextInput
        type='text'
        placeholder='₩ 배송비'
        value={productData.deliveryFee}
        name='deliveryFee'
        onChange={onChangeData}
        onKeyDown={handleKeyDown}
      />

      <OptionComponent
        options={options}
        setOptions={setOptions}
        setProductData={setProductData}
      />

      <S.Title>추가 정보</S.Title>
      <S.TextInput
        type='text'
        placeholder='구매자가 보내야 하는 소재'
        value={productData.materialInfo}
        name='materialInfo'
        onChange={onChangeData}
      />
      <div>
        <S.Subtitle>소재 예시 사진</S.Subtitle>
        <ImageUpload
          id='material'
          imageNum={1}
          imgFile={materialImgFile}
          setImgFile={setMaterialImgFile}
          imgPreview={materialImgPreview}
          setImgPreview={setMaterialImgPreview}
        />
      </div>
      <div>
        <S.Subtitle>제작 소요 기간</S.Subtitle>
        <S.DaysContainer>
          <S.TextBox
            type='number'
            value={productData.duration}
            name='duration'
            onChange={onChangeData}
          />
          <S.Title>일</S.Title>
        </S.DaysContainer>
      </div>

      <S.TextArea
        placeholder='구매자에게 안내해야 할 사항이 있다면 적어주세요. (ex. 소재를 배송 보낼 때 주의할 점 등)'
        value={productData.buyerNotice}
        name='buyerNotice'
        onChange={onChangeData}
      />
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='저장하기' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ProductEditPage;
