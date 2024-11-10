import * as S from './ProfileEditPage.style';
import { useState } from 'react';

import { Button } from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import { ProfileImage } from '../../../components/ProfileEditPage/ProfileImage';
import { AddressInput } from '../../../components/ProfileEditPage/AddressInput';
import {
  NumNotice,
  AddressNotice,
} from '../../../components/ProfileEditPage/NoticeModal';
import { ReactComponent as QIcon } from '../../../assets/MyPage/question_circle.svg';

const ProfileEditPage = () => {
  const [isAllFilled, setIsAllFilled] = useState(false);
  const [isNNVisible, setIsNNVisible] = useState(false);
  const [isANVisible, setIsANVisible] = useState(false);

  const [ImgFile, setImgFile] = useState<File>();
  const [ImgPreview, setImgPreivew] = useState<string>();

  return (
    <S.Container>
      <Header title='내 프로필' />
      <S.ImageSection>
        <ProfileImage
          id='profile'
          imgFile={ImgFile}
          setImgFile={setImgFile}
          imgPreview={ImgPreview}
          setImgPreview={setImgPreivew}
        />
      </S.ImageSection>
      <S.TextSection>
        <S.Title>기본 정보</S.Title>
        <S.Subtitle>이름</S.Subtitle>
        <S.TextInput />
        <S.Subtitle>닉네임</S.Subtitle>
        <S.TextInput />
        <S.Subtitle>전화번호</S.Subtitle>
        <S.TextInput />
        <S.Subtitle>주소</S.Subtitle>
        <AddressInput />
      </S.TextSection>

      <S.TextSection>
        <S.Title>작가 정보</S.Title>
        <S.Subtitle>작가 소개글</S.Subtitle>
        <S.TextArea />
        <S.FlexDiv>
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
        </S.Account>
      </S.TextSection>
      <S.ButtonWrapper>
        <Button text='저장하기' color='mint' isActive={isAllFilled} />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ProfileEditPage;
