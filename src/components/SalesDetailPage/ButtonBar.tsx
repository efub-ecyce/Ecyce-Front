import { useState, useEffect } from 'react';
import * as S from './ButtonBar.style';
import {
  AcceptModal,
  CancelModal,
  DoneModal,
  RejectModal,
  StartModal,
} from './CustomConfirmModal';
import { useRecoilState } from 'recoil';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';

const NameMap: { [key: string]: [string, string] } = {
  '접수 완료': ['주문 수락하기', '주문 거절하기'],
  '제작 대기중': ['제작 시작하기', '주문 취소하기'],
  제작중: ['제작 완료하기', '주문 취소하기'],
};

export const ButtonBar = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const modalHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsModalActive(prev => !prev);
  };

  const openModal = (type: string) => {
    setModalType(type);
    setIsModalActive(true);
  };

  const getModal = () => {
    if (!modalType) return null;
    switch (modalType) {
      case '주문 수락하기':
        return (
          <AcceptModal modalHandler={modalHandler} setState={setSalesDetail} />
        );
      case '주문 거절하기':
        return (
          <RejectModal modalHandler={modalHandler} setState={setSalesDetail} />
        );
      case '주문 취소하기':
        return (
          <CancelModal modalHandler={modalHandler} setState={setSalesDetail} />
        );
      case '제작 시작하기':
        return (
          <StartModal modalHandler={modalHandler} setState={setSalesDetail} />
        );
      case '제작 완료하기':
        return (
          <DoneModal modalHandler={modalHandler} setState={setSalesDetail} />
        );
      default:
        return null;
    }
  };

  return (
    <S.Container>
      {isModalActive && getModal()}
      <S.YButton onClick={event => openModal(NameMap[salesDetail.state][0])}>
        {NameMap[salesDetail.state][0]}
      </S.YButton>
      <S.NButton onClick={event => openModal(NameMap[salesDetail.state][1])}>
        {NameMap[salesDetail.state][1]}
      </S.NButton>
    </S.Container>
  );
};