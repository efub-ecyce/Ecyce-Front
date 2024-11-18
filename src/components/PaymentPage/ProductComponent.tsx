import * as S from './ProductComponent.style';

interface ProductProps {
    seller: string;
    title: string;
    price: number;
    imageURL: string;
    option1: number;
    option2: number;
}

const ProductComponent = ({seller, title, price, imageURL, option1, option2} : ProductProps) => {
    return (
        <S.Wrapper>
            <S.Title>주문 상품</S.Title>
            <S.ProductWrapper>
                <S.Title>{seller}</S.Title>
                <S.ContentWrapper>
                    <S.ProductPicture imageURL={imageURL}></S.ProductPicture>
                    <S.TextWrapper>
                        <S.Title>{title}</S.Title>
                        <S.OptionWrapper>
                            <S.Option>옵션1</S.Option>
                            <S.Option>{option1}개</S.Option>
                        </S.OptionWrapper>
                        <S.OptionWrapper>
                            <S.Option>옵션2</S.Option>
                            <S.Option>{option2}개</S.Option>
                        </S.OptionWrapper>
                        <S.Title>{price.toLocaleString()}원</S.Title>
                    </S.TextWrapper>
                </S.ContentWrapper>
            </S.ProductWrapper>
        </S.Wrapper>
    );
};

export default ProductComponent;