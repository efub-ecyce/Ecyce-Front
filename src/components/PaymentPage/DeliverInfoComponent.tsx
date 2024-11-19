import * as S from './DeliverInfoComponent.style';
import { ReactComponent as EditIcon } from '../../assets/PaymentPage/edit.svg';
import { useNavigate } from 'react-router-dom';

interface AddressProps {
    recipient: string;
    phoneNumber: string;
    postCode: number;
    address: string;
    addressDetail: string;
}

const DeliverInfoComponent = ({ recipient, phoneNumber, postCode, address, addressDetail }: AddressProps) => {

    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.Title>배송 정보</S.Title>
                <S.Btn onClick={() => navigate('/payment/address')}><EditIcon /></S.Btn>
            </S.TitleWrapper>
            <S.Line></S.Line>
            <S.InfoWrapper>
                <S.TextWrapper>
                    <S.IndexText>수령인</S.IndexText>
                    <S.Text>{recipient}</S.Text>
                </S.TextWrapper>
                <S.TextWrapper>
                    <S.IndexText>연락처</S.IndexText>
                    <S.Text>{phoneNumber}</S.Text>
                </S.TextWrapper>
                <S.TextWrapper>
                    <S.IndexText>주소</S.IndexText>
                    <S.Text>[{postCode}] {address} {addressDetail}</S.Text>
                </S.TextWrapper>
            </S.InfoWrapper>
        </S.Wrapper>
    );
};

export default DeliverInfoComponent;
