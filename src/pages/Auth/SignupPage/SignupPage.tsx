import * as S from './SignupPage.style';
import basicProfile from '../../../assets/SignupPage/basic_profile.svg';
import cameraIcon from '../../../assets/SignupPage/profile_upload_camera.svg';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/common/Button';
import DaumPostcode from 'react-daum-postcode';
import { postNewUser } from '../../../api/user';

const SignupPage = () => {
  const [name, setName] = useState<string>('');
  //const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  //const [password, setPassword] = useState<string>('');
  //const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const [profileImage, setProfileImage] = useState<string>(basicProfile);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
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

  //const [emailMsg, setEmailMsg] = useState<string | null>(null);
  //const [emailValid, setEmailValid] = useState(false);
  const [nicknameMsg, setNicknameMsg] =
    useState<string>('최소 3자 ~ 최대 10자');
  const [nicknameValid, setNicknameValid] = useState(false);
  //const [passwordValid, setPasswordValid] = useState<string | null>(null);
  //const [confirmPasswordMsg, setConfirmPasswordMsg] = useState<string | null>(
  //  null,
  //);

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

  // useEffect(() => {
  //   if (
  //     emailValid &&
  //     nicknameValid &&
  //     password === confirmPassword &&
  //     password.length >= 8
  //   ) {
  //     setIsAllFilled(true);
  //   } else {
  //     setIsAllFilled(false);
  //   }
  // }, [emailValid, nicknameValid, password, confirmPassword]);

  useEffect(() => {
    if (name.length > 0 && nicknameValid && phoneNumber.length === 11) {
      setIsAllFilled(true);
    } else {
      setIsAllFilled(false);
    }
  }, [name, nicknameValid, phoneNumber]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNickname = (nickname: string) =>
    /^[가-힣a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ]{3,10}$/.test(nickname);
  const validatePassword = (password: string) =>
    /^[a-zA-Z0-9!@#$%^&*()]+$/.test(password);

  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   if (value === '') {
  //     setEmailMsg(null);
  //   } else if (validateEmail(value)) {
  //     setEmailValid(true);
  //     setEmailMsg('유효한 이메일입니다.');
  //   } else {
  //     setEmailValid(false);
  //     setEmailMsg('유효하지 않은 이메일 형식입니다.');
  //   }
  // };

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

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setPassword(value);
  //   if (value === '') {
  //     setPasswordValid(null);
  //   } else if (
  //     validatePassword(value) &&
  //     value.length >= 8 &&
  //     value.length <= 20
  //   ) {
  //     setPasswordValid('비밀번호가 유효합니다.');
  //   } else {
  //     setPasswordValid('비밀번호는 8-20자 이내, 특수문자를 포함해야 합니다.');
  //   }
  // };

  // const handleConfirmPasswordChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   const value = e.target.value;
  //   setConfirmPassword(value);
  //   if (value === '') {
  //     setConfirmPasswordMsg(null);
  //   } else if (value === password) {
  //     setConfirmPasswordMsg('비밀번호가 일치합니다.');
  //   } else {
  //     setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.');
  //   }
  // };

  const onClickButton = async () => {
    if (isAllFilled) {
      const userInfo = {
        name: name,
        nickname: nickname,
        phoneNumber: phoneNumber,
        postcode: postcode,
        address1: address,
        address2: detailAddress,
      };

      try {
        const res = await postNewUser(userInfo);
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
      {/* <S.TextInput
        type="text"
        placeholder="이메일"
        value={email}
        onChange={handleEmailChange}
      />
      {emailMsg && (
        <S.TextWrapper>
          <S.Text style={{ color: emailValid ? '#00E5BA' : '#E46769' }}>{emailMsg}</S.Text>
        </S.TextWrapper>
      )} */}
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
      {/* <S.TextInput
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordValid && (
        <S.TextWrapper>
          <S.Text
            style={{
              color:
                passwordValid === '비밀번호가 유효합니다.'
                  ? '#00E5BA'
                  : '#E46769',
            }}
          >
            {passwordValid}
          </S.Text>
        </S.TextWrapper>
      )}
      <S.TextInput
        type='password'
        placeholder='비밀번호 확인'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {confirmPasswordMsg && (
        <S.TextWrapper>
          <S.Text
            style={{
              color:
                confirmPasswordMsg === '비밀번호가 일치합니다.'
                  ? 'mint/02'
                  : '#E46769',
            }}
          >
            {confirmPasswordMsg}
          </S.Text>
        </S.TextWrapper>
      )} */}
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text='회원가입' color='mint' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SignupPage;
