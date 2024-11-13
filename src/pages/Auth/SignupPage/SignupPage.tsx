import * as S from './SignupPage.style';
import basicProfile from '../../../assets/SignupPage/basic_profile.svg';
import cameraIcon from '../../../assets/SignupPage/profile_upload_camera.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/common/Button';

const SignupPage = () => {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  const [emailMsg, setEmailMsg] = useState<string | null>(null);
  const [emailValid, setEmailValid] = useState(false);
  const [nicknameMsg, setNicknameMsg] = useState<string>('최소 3자 ~ 최대 10자');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState<string | null>(null);
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (emailValid && nicknameValid && password === confirmPassword && password.length >= 8) {
      setIsAllFilled(true);
    } else {
      setIsAllFilled(false);
    }
  }, [emailValid, nicknameValid, password, confirmPassword]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNickname = (nickname: string) => /^[가-힣a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ]{3,10}$/.test(nickname);
  const validatePassword = (password: string) => /^[a-zA-Z0-9!@#$%^&*()]+$/.test(password);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') {
      setEmailMsg(null);
    } else if (validateEmail(value)) {
      setEmailValid(true);
      setEmailMsg('유효한 이메일입니다.');
    } else {
      setEmailValid(false);
      setEmailMsg('유효하지 않은 이메일 형식입니다.');
    }
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value === '') {
      setPasswordValid(null);
    } else if (validatePassword(value) && value.length >= 8 && value.length <= 20) {
      setPasswordValid('비밀번호가 유효합니다.');
    } else {
      setPasswordValid('비밀번호는 8-20자 이내, 특수문자를 포함해야 합니다.');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === '') {
      setConfirmPasswordMsg(null);
    } else if (value === password) {
      setConfirmPasswordMsg('비밀번호가 일치합니다.');
    } else {
      setConfirmPasswordMsg('비밀번호가 일치하지 않습니다.');
    }
  };

  const onClickButton = () => {
    if (isAllFilled) {
      navigate('/');
    } else {
      alert('모든 입력값을 올바르게 입력해주세요.');
    }
  };

  return (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImage src={basicProfile} />
        <S.CameraIcon src={cameraIcon} />
      </S.ProfileWrapper>
      <S.TextInput type="text" placeholder="이름" />
      <S.TextInput
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <S.TextWrapper>
        <S.Text
          style={{
            color: nickname === '' 
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
        type="text"
        placeholder="전화번호"
        onKeyDown={(e) => {
          if (!/[0-9]/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
            e.preventDefault();
          }
        }}
      />
      <S.TextInput
        type="text"
        placeholder="이메일"
        value={email}
        onChange={handleEmailChange}
      />
      {emailMsg && (
        <S.TextWrapper>
          <S.Text style={{ color: emailValid ? '#00E5BA' : '#E46769' }}>{emailMsg}</S.Text>
        </S.TextWrapper>
      )}
      <S.PostcodeWrapper>
        <S.TextInput type="text" placeholder="우편번호" />
        <S.PostcodeButton>우편번호 검색</S.PostcodeButton>
      </S.PostcodeWrapper>
      <S.TextInput type="text" placeholder="주소" />
      <S.TextInput type="text" placeholder="상세주소" />
      <S.TextInput
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordValid && (
        <S.TextWrapper>
          <S.Text style={{ color: passwordValid === '비밀번호가 유효합니다.' ? '#00E5BA' : '#E46769' }}>
            {passwordValid}
          </S.Text>
        </S.TextWrapper>
      )}
      <S.TextInput
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {confirmPasswordMsg && (
        <S.TextWrapper>
          <S.Text
            style={{ color: confirmPasswordMsg === '비밀번호가 일치합니다.' ? 'mint/02' : '#E46769' }}
          >
            {confirmPasswordMsg}
          </S.Text>
        </S.TextWrapper>
      )}
      <S.ButtonWrapper onClick={onClickButton}>
        <Button isActive={isAllFilled} text="회원가입" color="mint" />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default SignupPage;
