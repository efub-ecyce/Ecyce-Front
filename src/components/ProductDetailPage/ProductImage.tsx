import * as S from './ProductImage.style'
import { ReactComponent as GoBack } from '../../assets/ProductDetailPage/arrow_key_left.svg'
import { ReactComponent as Share } from '../../assets/ProductDetailPage/share.svg'
import { useNavigate } from 'react-router-dom'

interface ReviewProps {
    reviewImg1: string;
    reviewImg2: string;
    reviewImg3: string;
    reviewImg4: string;
    reviewImg5: string;
}

const ProductImage = ({ reviewImg1, reviewImg2, reviewImg3, reviewImg4, reviewImg5}: ReviewProps) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.ImgContainer>
                {reviewImg1 ? <img src={reviewImg1} alt="Review Image 1" /> : null}
            </S.ImgContainer>
            <S.Top>
                <S.BackBtn onClick={() => navigate(-1)}>
                    <GoBack />
                </S.BackBtn>
                <Share />
            </S.Top>
        </S.Container>
    );
};

export default ProductImage;
