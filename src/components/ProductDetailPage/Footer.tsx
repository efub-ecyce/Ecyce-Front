import * as S from './Footer.style'
import React, { useState } from 'react';
import { ReactComponent as Review } from '../../assets/ProductDetailPage/review.svg'
import { ReactComponent as Bookmark } from '../../assets/ProductDetailPage/bookmark.svg'
import { ReactComponent as FilledBookmark} from '../../assets/ProductDetailPage/bookmark_filled.svg';
import { useNavigate } from 'react-router-dom';
import type { ProductProps } from '../../pages/Product/ProductDetailPage/ProductDetailPage';

interface FooterProps {
    onPurchaseClick: () => void;
    productInfo: ProductProps;
}

const Footer: React.FC<FooterProps> = ({ onPurchaseClick, productInfo }) => {
    const navigate = useNavigate();
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    const handleBookmarkToggle = () => {
        setIsBookmarked((prev) => !prev);
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.ButtonWrapper onClick={() => navigate(`/review/${productInfo.productId}`)}>
                    <Review />
                    <S.Text>후기</S.Text>
                </S.ButtonWrapper>
                <S.ButtonWrapper onClick={handleBookmarkToggle}>
                    {isBookmarked ? <FilledBookmark /> : <Bookmark />}
                    <S.Text>북마크</S.Text>
                </S.ButtonWrapper>
            </S.Wrapper>
            <S.ButtonContainer onClick={onPurchaseClick}>
                <S.ButtonText>구매하기</S.ButtonText>
            </S.ButtonContainer>
        </S.Container>
    );
};

export default Footer;
