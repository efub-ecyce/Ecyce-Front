import * as S from '../../pages/My/ProfileEditPage/ProfileEditPage.style';

export const AddressInput = () => {
  return (
    <S.AddressContainer>
      <S.Postcode>
        <S.TextInput />
        <S.SearchButton>우편번호 검색</S.SearchButton>
      </S.Postcode>
      <S.TextInput />
      <S.TextInput />
    </S.AddressContainer>
  );
};
