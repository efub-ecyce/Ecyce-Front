import { Button } from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import * as S from './ReviewWritePage.style';
import { ReactComponent as StarYellow } from '../../../assets/ReviewWritePage/karma-logo-yellow.svg';
import { ReactComponent as StarGray } from '../../../assets/ReviewWritePage/karma-logo-gray.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from '../../../components/common/ImageUpload';

const ReviewWritePage = () => {
  const navigate = useNavigate();

  const [stars, setStars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [imgFile, setImgFile] = useState<File[]>([]);
  const [imgPreview, setImgPreview] = useState<string[]>([]);

  const [isAllFilled, setIsAllFilled] = useState<boolean>(true);

  const handleStars = (id: number) => {
    setStars(stars.map((_, index) => index <= id));
  };

  const onClickButton = () => {
    if (isAllFilled) {
      navigate('./complete');
    }
  };

  return (
    <S.Container>
      <Header title='후기 작성' />

      <S.ProductInfo>
        <S.Image />
        <S.TextInfo>
          <S.Name>텀블러 가방</S.Name>
          <S.Options>옵션1, 옵션2</S.Options>
        </S.TextInfo>
      </S.ProductInfo>
      <S.Text>구매하신 상품은 어떠셨나요?</S.Text>
      <S.StarContainer>
        {stars.map((it, index) => (
          <S.Star onClick={() => handleStars(index)}>
            {it ? <StarYellow /> : <StarGray />}
          </S.Star>
        ))}
      </S.StarContainer>
      <ImageUpload
        id='review'
        imageNum={5}
        imgFile={imgFile}
        setImgFile={setImgFile}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
      />
      <S.ReviewText placeholder='구매하신 상품에 대한 리뷰를 남겨주세요' />
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='등록하기' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ReviewWritePage;
