import { ConfirmModal } from '../common/ConfirmModal';
import { SalesDetail } from '../../pages/My/SalesDetailPage/SalesDetailPage';

interface ModalProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  setState: React.Dispatch<React.SetStateAction<SalesDetail>>;
}

export const AcceptModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '제작 대기중' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='주문을 수락하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};

export const RejectModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '주문 취소' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='주문을 거절하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};

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

export const StartModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '제작중' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='제작을 시작하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};

export const DoneModal = ({ modalHandler, setState }: ModalProps) => {
  const yesFunction = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    setState(prev => ({ ...prev, state: '제작 완료' }));
    modalHandler(e);
  };

  return (
    <ConfirmModal
      question='제작을 완료하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};
