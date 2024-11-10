import { ConfirmModal } from '../common/ConfirmModal';
import { SalesDetail } from '../../pages/My/SalesDetailPage/SalesDetailPage';

interface ModalProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  setState: React.Dispatch<React.SetStateAction<SalesDetail>>;
}

export const CancelModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '주문 취소' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='주문을 취소하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};

export const FinishModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '배송 완료' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='구매를 확정하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};
