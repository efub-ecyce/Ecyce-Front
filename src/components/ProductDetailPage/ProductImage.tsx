import * as S from './ProductImage.style'
import { ReactComponent as GoBack } from '../../assets/ProductDetailPage/arrow_key_left.svg'
import { ReactComponent as Share } from '../../assets/ProductDetailPage/share.svg'

interface ReviewProps {
    reviewImg1: string;
    reviewImg2: string;
    reviewImg3: string;
    reviewImg4: string;
    reviewImg5: string;
}

const ProductImage = ({ reviewImg1, reviewImg2, reviewImg3, reviewImg4, reviewImg5}: ReviewProps) => {
    return (
        <S.Container>
            <S.ImgContainer>
                {reviewImg1 ? <img src={reviewImg1} alt="Review Image 1" /> : null}
            </S.ImgContainer>
            <S.Top>
                <GoBack />
                <Share />
            </S.Top>
        </S.Container>
    );
};

export default ProductImage;