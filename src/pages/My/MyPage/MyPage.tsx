import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import * as S from './MyPage.style';
import { ConfirmModal } from '../../../components/common/ConfirmModal';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as StoreIcon } from '../../../assets/MyPage/store.svg';
import { ReactComponent as WonIcon } from '../../../assets/MyPage/won.svg';
import { ReactComponent as BookmarkIcon } from '../../../assets/MyPage/bookmark.svg';
import { ReactComponent as ShoppingIcon } from '../../../assets/MyPage/shopping_bag.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/MyPage/logout.svg';
import { ReactComponent as SignoutIcon } from '../../../assets/MyPage/signout.svg';
import { useState } from 'react';
import { useResetRecoilState } from 'recoil';
import { userState } from '../../../store/userInfoAtom';

const MyPage = () => {
  const navigate = useNavigate();

  const [isSOModalOpen, setIsSOModalOpen] = useState<boolean>(false);
  const [isLOModalOpen, setIsLOModalOpen] = useState<boolean>(false);
  const resetUserInfo = useResetRecoilState(userState);

  const soModalHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsSOModalOpen(prev => !prev);
  };

  const SignOut = () => {
    console.log('임시 탈퇴 함수');
    setIsSOModalOpen(false);
  };

  const loModalHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsLOModalOpen(prev => !prev);
  };

  const LogOut = () => {
    localStorage.removeItem('token');
    resetUserInfo();
    setIsLOModalOpen(false);
    navigate('/login');
  };

  return (
    <>
      <S.Container>
        {isSOModalOpen && (
          <ConfirmModal
            modalHandler={soModalHandler}
            question='정말 탈퇴하시겠습니까?'
            yesFunction={SignOut}
            yes='탈퇴하기'
            no='취소하기'
          />
        )}

        {isLOModalOpen && (
          <ConfirmModal
            modalHandler={loModalHandler}
            question='로그아웃 하시겠습니까?'
            yesFunction={LogOut}
          />
        )}

        <Header title='내 정보' />

        <S.ProfileBar>
          <S.ProfImg />
          <S.Name>이끼끼</S.Name>
          <S.EditButton onClick={() => navigate('./edit')}>
            프로필 수정
          </S.EditButton>
        </S.ProfileBar>

        <S.Group>
          <S.Title>판매</S.Title>
          <S.Menu onClick={() => navigate('./manage')}>
            <StoreIcon /> 내 상품 관리
          </S.Menu>
          <S.Menu onClick={() => navigate('/sales')}>
            <WonIcon />
            판매 내역
          </S.Menu>
        </S.Group>

        <S.Group>
          <S.Title>구매</S.Title>
          <S.Menu onClick={() => navigate('/bookmark')}>
            <BookmarkIcon />
            북마크
          </S.Menu>
          <S.Menu onClick={() => navigate('/purchase')}>
            <ShoppingIcon />
            구매 내역
          </S.Menu>
        </S.Group>
        <S.Line />
        <S.Group>
          <S.Menu onClick={loModalHandler}>
            <LogoutIcon />
            로그아웃
          </S.Menu>
          <S.Menu onClick={soModalHandler}>
            <SignoutIcon />
            회원 탈퇴
          </S.Menu>
        </S.Group>
      </S.Container>
      <S.NavWrapper>
        <NavBar />
      </S.NavWrapper>
    </>
  );
};

export default MyPage;
