import * as S from './EditAddressPage.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import DaumPostcode from 'react-daum-postcode';
import Header from '../../../components/common/Header';

const EditAddressPage = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const [postcodeOpen, setPostcodeOpen] = useState<boolean>(false);
  const [postcode, setPostcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');

  const handlePostcodeComplete = (data: any) => {
    // 우편번호 & 주소 업데이트
    setPostcode(data.zonecode);
    setAddress(data.address);
    setPostcodeOpen(false);
  };

  const handlePostcodeSearch = () => {
    setPostcodeOpen(true);
  };

  const handlePostcodeClose = () => {
    setPostcodeOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (
      name.length > 0 &&
      phoneNumber.length === 11 &&
      postcode &&
      address &&
      detailAddress
    ) {
      setIsAllFilled(true);
    } else {
      setIsAllFilled(false);
    }
  }, [name, phoneNumber, postcode, address, detailAddress]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const onClickButton = async () => {
      if (isAllFilled) {
        //api 코드 넣기
        navigate('/payment');
    };
  }

  return (
    <S.Container>
      <Header title='배송지 변경'/>
      <S.TextInput
        type='text'
        placeholder='이름'
        value={name}
        onChange={handleNameChange}
      />
      <S.TextInput
        type='text'
        placeholder='연락처'
        onKeyDown={e => {
          if (
            !/[0-9]/.test(e.key) &&
            !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
          ) {
            e.preventDefault();
          }
        }}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <S.PostcodeWrapper>
        <S.TextInput
          type='text'
          placeholder='우편번호'
          value={postcode}
          readOnly
        />
        <S.PostcodeButton onClick={handlePostcodeSearch}>
          우편번호 검색
        </S.PostcodeButton>
      </S.PostcodeWrapper>
      <S.TextInput type='text' placeholder='주소' value={address} readOnly />
      <S.TextInput
        type='text'
        placeholder='상세주소'
        value={detailAddress}
        // 상세주소는 readonly 아님. 사용자 입력 가능
        onChange={e => setDetailAddress(e.target.value)}
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

      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='배송지 변경하기' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default EditAddressPage;
