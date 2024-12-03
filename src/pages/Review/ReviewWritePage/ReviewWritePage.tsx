import { Button } from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import * as S from './ReviewWritePage.style';
import { ReactComponent as StarYellow } from '../../../assets/ReviewWritePage/karma-logo-yellow.svg';
import { ReactComponent as StarGray } from '../../../assets/ReviewWritePage/karma-logo-gray.svg';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageUpload } from '../../../components/common/ImageUpload';
import { postReview, ReviewProps } from '../../../api/review';
import { PurchaseDetailState } from '../../My/PurchaseDetailPage/PurchaseDetailPage';
import { useRecoilValue } from 'recoil';

const ReviewWritePage = () => {
  const navigate = useNavigate();
  const orderId = useParams().orderId;

  const [stars, setStars] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [imgFile, setImgFile] = useState<File[]>([]);
  const [imgPreview, setImgPreview] = useState<string[]>([]);
  const [reviewData, setReviewData] = useState<ReviewProps>({
    orderId: Number(orderId),
    content: '',
    rating: 0,
  });

  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const purchaseDetail = useRecoilValue(PurchaseDetailState);

  useEffect(() => {
    const isAllFilled = (): boolean => {
      const { rating, content } = reviewData;

      return rating > 0 && content.trim() !== '' && imgFile.length > 0;
    };

    setIsAllFilled(isAllFilled());
  }, [reviewData, imgFile]);

  const handleStars = (id: number) => {
    setStars(stars.map((_, index) => index <= id));
    setReviewData({ ...reviewData, rating: id + 1 });
  };

  const onChangeReviewText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewData({ ...reviewData, content: e.target.value });
  };

  const onClickButton = async () => {
    if (isAllFilled) {
      try {
        const res = await postReview(reviewData, imgFile);
        navigate('/review/complete');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <S.Container>
      <Header title='후기 작성' />

      <S.ProductInfo>
        <S.Image src={purchaseDetail.productThumbnail} />
        <S.TextInfo>
          <S.Name>{purchaseDetail.productName}</S.Name>
          <S.Options>{purchaseDetail.productOption}</S.Options>
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
        imageNum={3}
        imgFile={imgFile}
        setImgFile={setImgFile}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
      />
      <S.ReviewText
        placeholder='구매하신 상품에 대한 리뷰를 남겨주세요'
        value={reviewData?.content}
        onChange={onChangeReviewText}
      />
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='등록하기' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ReviewWritePage;
