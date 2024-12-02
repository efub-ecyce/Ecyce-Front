import * as S from './SignupPage.style';
import basicProfile from '../../../assets/SignupPage/basic_profile.svg';
import cameraIcon from '../../../assets/SignupPage/profile_upload_camera.svg';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import DaumPostcode from 'react-daum-postcode';
import { postNewUser } from '../../../api/user';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../store/userInfoAtom';

const SignupPage = () => {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<string>(basicProfile);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const setRecoilUserInfo = useSetRecoilState(userState);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          // 업로드된 이미지로 업데이트
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [nicknameMsg, setNicknameMsg] =
    useState<string>('최소 3자 ~ 최대 10자');
  const [nicknameValid, setNicknameValid] = useState(false);

  const [postcodeOpen, setPostcodeOpen] = useState<boolean>(false);
  const [postalCode, setPostalCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');

  const handlePostcodeComplete = (data: any) => {
    // 우편번호 & 주소 업데이트
    setPostalCode(data.zonecode);
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
      profileImageFile &&
      name.length > 0 &&
      nicknameValid &&
      phoneNumber.length === 11 &&
      postalCode &&
      address &&
      detailAddress
    ) {
      setIsAllFilled(true);
    } else {
      setIsAllFilled(false);
    }
  }, [
    name,
    nicknameValid,
    phoneNumber,
    postalCode,
    address,
    detailAddress,
    profileImageFile,
  ]);

  const validateNickname = (nickname: string) =>
    /^[가-힣a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ]{3,10}$/.test(nickname);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    if (value === '') {
      setNicknameMsg('최소 3자 ~ 최대 10자');
      setNicknameValid(false);
    } else if (validateNickname(value)) {
      setNicknameValid(true);
      setNicknameMsg('사용 가능한 닉네임입니다!');
    } else {
      setNicknameValid(false);
      setNicknameMsg('사용할 수 없는 닉네임입니다!');
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };

  const onClickButton = async () => {
    if (isAllFilled) {
      const userInfo = {
        name: name,
        nickname: nickname,
        phoneNumber: phoneNumber,
        postalCode: postalCode,
        address1: address,
        address2: detailAddress,
      };

      try {
        const res = await postNewUser(userInfo, profileImageFile);
        console.log(res);

        setRecoilUserInfo(prevState => ({
          ...prevState, // 기존 상태를 복사
          name: res.name,
          nickname: res.nickname,
          profileImageUrl: res.profileImageUrl,
        }));

        alert('회원 가입이 완료되었습니다.');
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('모든 입력값을 올바르게 입력해주세요.');
    }
  };

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage
          src={profileImage}
          alt='Profile'
          onClick={handleProfileImageClick}
        />
        <S.CameraIcon src={cameraIcon} alt='Upload Icon' />
      </S.ProfileWrapper>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <S.TextInput
        type='text'
        placeholder='이름'
        value={name}
        onChange={handleNameChange}
      />
      <S.TextInput
        type='text'
        placeholder='닉네임'
        value={nickname}
        onChange={handleNicknameChange}
      />
      <S.TextWrapper>
        <S.Text
          style={{
            color:
              nickname === ''
                ? '#C1D1D1'
                : nicknameValid
                ? '#00E5BA'
                : '#E46769',
          }}
        >
          {nicknameMsg}
        </S.Text>
      </S.TextWrapper>
      <S.TextInput
        type='text'
        placeholder='전화번호'
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
          value={postalCode}
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
        <Button isActive={isAllFilled} text='회원가입' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SignupPage;
