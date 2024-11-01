import * as S from './ProductRegistPage.style';
import { ImageUpload } from '../../../components/common/ImageUpload';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import { OptionComponent } from '../../../components/ProductRegisterPage/OptionComponent';
import { Button } from '../../../components/common/Button';

export interface Option {
  id: number;
  name: string | undefined;
  price: number | undefined;
}

const ProductRegistPage = () => {
  const [isAllFilled, setIsAllFilled] = useState<boolean>(true); //추후 수정
  const [imgFile, setImgFile] = useState<File[]>([]);
  const [imgPreview, setImgPreview] = useState<string[]>([]);
  const [options, setOptions] = useState<Option[]>([]);

  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //숫자 외 텍스트 입력 금지
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const isNumber = /^[0-9]$/;

    if (!isNumber.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const onClickButton = () => {
    if (isAllFilled) {
      navigate('./complete');
    }
  };

  return (
    <S.Container>
      <Header title='등록하기' />
      <S.Title>기본 정보</S.Title>
      <ImageUpload
        imageNum={5}
        imgFile={imgFile}
        setImgFile={setImgFile}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
      />
      <S.TextInput type='text' placeholder='상품명' />
      <S.TextArea placeholder='업사이클링 상품에 대해 소개해주세요!' />
      <S.TextInput type='text' placeholder='₩ 가격' onKeyDown={handleKeyDown} />
      <S.TextInput
        type='text'
        placeholder='₩ 배송비'
        onKeyDown={handleKeyDown}
      />

      <OptionComponent options={options} setOptions={setOptions} />

      <S.Title>추가 정보</S.Title>
      <S.TextInput type='text' placeholder='구매자가 보내야 하는 소재' />
      {/* <S.Subtitle>소재 예시 사진</S.Subtitle>
      <ImageUpload imageNum={}/> */}
      <S.Subtitle>제작 소요 기간</S.Subtitle>
      <S.DaysContainer>
        <S.TextBox></S.TextBox>
        <S.Title>일 ~ </S.Title>
        <S.TextBox></S.TextBox>
        <S.Title>일</S.Title>
      </S.DaysContainer>

      <S.TextArea placeholder='구매자에게 안내해야 할 사항이 있다면 적어주세요. (ex. 소재를 배송 보낼 때 주의할 점 등)' />
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='저장하기' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ProductRegistPage;
