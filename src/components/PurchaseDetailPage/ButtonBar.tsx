import { useState, useEffect } from 'react';
import * as S from './ButtonBar.style';
import { CancelModal, FinishModal } from './CustomConfirmModal';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { useNavigate } from 'react-router-dom';

const NameMap: { [key: string]: string[] } = {
  접수완료: ['문의하기', '주문 취소하기'],
  제작대기: ['문의하기', '주문 취소하기'],
  제작중: ['문의하기'],
  제작완료: ['문의하기'],
  배송중: ['문의하기', '구매 확정하기'],
  구매확정: ['문의하기', '후기 작성하기'],
};

export const ButtonBar = () => {
  const navigate = useNavigate();

  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const modalHandler = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    setIsModalActive(prev => !prev);
  };

  const openModal = (type: string | null) => {
    if (type) {
      setModalType(type);
      setIsModalActive(true);
    } else return;
  };

  const getModal = () => {
    if (!modalType) return null;
    switch (modalType) {
      case '문의하기':
        navigate('/chat');
        return null;
      case '주문 취소하기':
        return (
          <CancelModal
            modalHandler={modalHandler}
            setState={setPurchaseDetail}
          />
        );
      case '구매 확정하기':
        return (
          <FinishModal
            modalHandler={modalHandler}
            setState={setPurchaseDetail}
          />
        );

      case '후기 작성하기':
        navigate(`/review/write/${purchaseDetail.orderId}`);
        return null;

      default:
        return null;
    }
  };

  return (
    <S.Container>
      {isModalActive && getModal()}
      <S.YButton
        onClick={event => openModal(NameMap[purchaseDetail.orderState][0])}
      >
        {NameMap[purchaseDetail.orderState][0]}
      </S.YButton>
      {NameMap[purchaseDetail.orderState][1] && (
        <S.NButton
          onClick={event => openModal(NameMap[purchaseDetail.orderState][1])}
        >
          {NameMap[purchaseDetail.orderState][1]}
        </S.NButton>
      )}
    </S.Container>
  );
};
