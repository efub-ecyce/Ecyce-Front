import * as S from './Footer.style'
import React, { useState } from 'react';
import { ReactComponent as Review } from '../../assets/ProductDetailPage/review.svg'
import { ReactComponent as Bookmark } from '../../assets/ProductDetailPage/bookmark.svg'
import { useNavigate } from 'react-router-dom';

interface FooterProps {
    onPurchaseClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPurchaseClick }) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Wrapper>
                <S.ButtonWrapper onClick={() => navigate('/review/1')}>
                    <Review />
                    <S.Text>후기</S.Text>
                </S.ButtonWrapper>
                <S.ButtonWrapper>
                    <Bookmark />
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
