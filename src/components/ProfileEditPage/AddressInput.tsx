import { useState } from 'react';
import * as S from '../../pages/My/ProfileEditPage/ProfileEditPage.style';
import DaumPostcode from 'react-daum-postcode';
import { UserInfo } from '../../api/user';

interface AddressInputProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  onChangeData: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const AddressInput = ({
  userInfo,
  setUserInfo,
  onChangeData,
}: AddressInputProps) => {
  const [postcodeOpen, setPostcodeOpen] = useState<boolean>(false);

  const handlePostcodeComplete = (data: any) => {
    // 우편번호 & 주소 업데이트
    setUserInfo({
      ...userInfo,
      postalCode: data.zonecode,
      address1: data.address,
    });
    setPostcodeOpen(false);
  };

  const handlePostcodeSearch = () => {
    setPostcodeOpen(true);
  };

  const handlePostcodeClose = () => {
    setPostcodeOpen(false);
  };

  return (
    <S.AddressContainer>
      <S.Postcode>
        <S.TextInput type='text' value={userInfo.postalCode} readOnly />
        <S.SearchButton onClick={handlePostcodeSearch}>
          우편번호 검색
        </S.SearchButton>
      </S.Postcode>
      <S.TextInput type='text' value={userInfo.address1} readOnly />
      <S.TextInput
        type='text'
        value={userInfo.address2}
        name='address2'
        onChange={onChangeData}
      />
      {/* 우편번호 검색창 */}
      {postcodeOpen && (
        <S.PostcodeWindow>
          <DaumPostcode
            onComplete={handlePostcodeComplete}
            autoClose={false}
            defaultQuery=''
          />
          <button
            style={{
              background: 'none',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
            }}
            onClick={handlePostcodeClose}
          >
            닫기
          </button>
        </S.PostcodeWindow>
      )}
    </S.AddressContainer>
  );
};
