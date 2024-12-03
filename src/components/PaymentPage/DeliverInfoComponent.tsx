import * as S from './DeliverInfoComponent.style';
import { ReactComponent as EditIcon } from '../../assets/PaymentPage/edit.svg';

interface AddressProps {
  recipient: string;
  phoneNumber: string;
  postCode: string;
  address: string;
  addressDetail: string;
  onEditAddress: () => void;
}

const DeliverInfoComponent = ({
  recipient,
  phoneNumber,
  postCode,
  address,
  addressDetail,
  onEditAddress,
}: AddressProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>배송 정보</S.Title>
        <S.Btn onClick={onEditAddress}>
          <EditIcon />
        </S.Btn>
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
          <S.Text>
            [{postCode}] {address} {addressDetail}
          </S.Text>
        </S.TextWrapper>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default DeliverInfoComponent;
