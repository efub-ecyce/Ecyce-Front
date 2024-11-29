import * as S from './ProfileEditPage.style';
import { useEffect, useState } from 'react';

import { Button } from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import { ProfileImage } from '../../../components/ProfileEditPage/ProfileImage';
import { AddressInput } from '../../../components/ProfileEditPage/AddressInput';
import {
  NumNotice,
  AddressNotice,
} from '../../../components/ProfileEditPage/NoticeModal';
import { ReactComponent as QIcon } from '../../../assets/MyPage/question_circle.svg';
import { getUserInfo, patchUserInfo } from '../../../api/user';
import { UserInfo } from '../../../api/user';
import { useNavigate } from 'react-router-dom';

const ProfileEditPage = () => {
  const [isAllFilled, setIsAllFilled] = useState(false);
  const [isNNVisible, setIsNNVisible] = useState(false);
  const [isANVisible, setIsANVisible] = useState(false);

  const [ImgFile, setImgFile] = useState<File>();
  const [ImgPreview, setImgPreivew] = useState<string>();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    nickname: '',
    phoneNumber: '',
    postalCode: undefined,
    address1: '',
    address2: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getPrevUserInfo = async () => {
      try {
        const res = await getUserInfo();
        setUserInfo(res);
      } catch (error) {
        console.error(error);
      }
    };

    getPrevUserInfo();
  }, []);

  useEffect(() => {
    const isAllFilled = (): boolean => {
      const { name, nickname, phoneNumber, postalCode, address1, address2 } =
        userInfo;

      return (
        name?.trim() !== '' &&
        nickname?.trim() !== '' &&
        phoneNumber?.trim() !== '' &&
        !!postalCode &&
        address1?.trim() !== '' &&
        address2?.trim() !== ''
      );
    };

    setIsAllFilled(isAllFilled());
  }, [userInfo]);

  const onChangeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onClickSaveButton = async () => {
    if (isAllFilled) {
      try {
        const res = await patchUserInfo(userInfo, ImgFile || null);
        alert('저장되었습니다.');
        navigate('/my');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <S.Container>
      <Header title='내 프로필' />
      <S.ImageSection>
        <ProfileImage
          id='profile'
          imgFile={ImgFile || undefined}
          setImgFile={setImgFile}
          imgPreview={ImgPreview}
          setImgPreview={setImgPreivew}
        />
      </S.ImageSection>
      <S.TextSection>
        <S.Title>기본 정보</S.Title>
        <S.Subtitle>이름</S.Subtitle>
        <S.TextInput type='text' value={userInfo?.name} name='name' readOnly />
        <S.Subtitle>닉네임</S.Subtitle>
        <S.TextInput
          type='text'
          value={userInfo?.nickname}
          name='nickname'
          onChange={onChangeData}
        />
        <S.Subtitle>전화번호</S.Subtitle>
        <S.TextInput
          type='text'
          value={userInfo?.phoneNumber}
          name='phoneNumber'
          onChange={onChangeData}
        />
        <S.Subtitle>주소</S.Subtitle>
        <AddressInput
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          onChangeData={onChangeData}
        />
      </S.TextSection>

      <S.TextSection>
        <S.Title>작가 정보</S.Title>
        <S.Subtitle>작가 소개글</S.Subtitle>
        <S.TextArea value={userInfo?.bio} name='bio' onChange={onChangeData} />
        {/* <S.FlexDiv>
          <S.Subtitle>작가 연락처</S.Subtitle>
          <S.QWrapper onClick={() => setIsNNVisible(prev => !prev)}>
            <QIcon />
            {isNNVisible && <NumNotice />}
          </S.QWrapper>
        </S.FlexDiv>

        <S.TextInput />
        <S.FlexDiv>
          <S.Subtitle>작가 주소</S.Subtitle>
          <S.QWrapper onClick={() => setIsANVisible(prev => !prev)}>
            <QIcon />
            {isANVisible && <AddressNotice />}
          </S.QWrapper>
        </S.FlexDiv>
        <AddressInput />
        <S.Subtitle>정산 계좌</S.Subtitle>
        <S.Account>
          <S.Bank />
          <S.AccountNum />
        </S.Account> */}
      </S.TextSection>
      <S.ButtonWrapper onClick={onClickSaveButton}>
        <Button text='저장하기' color='mint' isActive={isAllFilled} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ProfileEditPage;
