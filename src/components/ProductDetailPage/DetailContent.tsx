import * as S from './ProductImage.style'
import { ReactComponent as GoBack } from '../../assets/ProductDetailPage/arrow_key_left.svg'
import { ReactComponent as Share } from '../../assets/ProductDetailPage/share.svg'
import { ReactComponent as ProfileImg } from '../../assets/ProductDetailPage/profile.svg'

const ProductImage = () => {
    return (
        <S.Container>
            <S.Top>
                <GoBack />
                <Share />
            </S.Top>
        </S.Container>
    );
};

export default ProductImage;
