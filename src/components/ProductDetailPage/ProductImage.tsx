import * as S from './ProductImage.style';
import { useNavigate } from 'react-router-dom';

interface ReviewProps {
  reviewImg1: string;
  reviewImg2: string;
  reviewImg3: string;
  reviewImg4: string;
  reviewImg5: string;
}

const ProductImage = ({
  reviewImg1,
  reviewImg2,
  reviewImg3,
  reviewImg4,
  reviewImg5,
}: ReviewProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ImgContainer>
        {reviewImg1 ? <img src={reviewImg1} alt='Review Image 1' /> : null}
      </S.ImgContainer>
    </S.Container>
  );
};

export default ProductImage;
