import * as S from './DetailContent.style'
import { ReactComponent as ProfileImg } from '../../assets/ProductDetailPage/profile.svg'

interface ProductProps {
    userName: string;
    title: string;
    price: number;
    material: string;
    period: number;
    bio: string;
}

const DetailContent = ({userName, title, price, material, period, bio}: ProductProps) => {
    return (
        <S.Container>
            <S.ProfileWrapper>
                <ProfileImg />
                <S.UserName>{userName}</S.UserName>
            </S.ProfileWrapper>
            <S.Title>{title}</S.Title>
            <S.Price>{price.toLocaleString()}원</S.Price>
            <S.Info>필요한 재료  |  {material}</S.Info>
            <S.Info>예상 제작 기간  |  평균 {period}일</S.Info>
            <S.Bio>{bio}</S.Bio>
        </S.Container>
    );
};

export default DetailContent;
