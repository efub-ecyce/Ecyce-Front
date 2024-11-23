import { ConfirmModal } from '../common/ConfirmModal';
import { SalesDetail } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import {
  patchAcceptOrder,
  patchCompleteOrder,
  patchShipOrder,
  patchStartOrder,
} from '../../api/order';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { useRecoilValue } from 'recoil';
interface ModalProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  setState: React.Dispatch<React.SetStateAction<SalesDetail>>;
}

export const AcceptModal = ({ modalHandler, setState }: ModalProps) => {
  const salesDetail = useRecoilValue(SalesDetailState);
  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchAcceptOrder(salesDetail.orderId, true);
      modalHandler(e);
    } catch (error) {
      console.error(error);
    }
    //setState(prev => ({ ...prev, orderState: '제작대기중' }));
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
  const salesDetail = useRecoilValue(SalesDetailState);
  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchAcceptOrder(salesDetail.orderId, false);
      modalHandler(e);
    } catch (error) {
      console.error(error);
    }
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
  const salesDetail = useRecoilValue(SalesDetailState);
  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchAcceptOrder(salesDetail.orderId, false);
      modalHandler(e);
    } catch (error) {
      console.error(error);
    }
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
  const salesDetail = useRecoilValue(SalesDetailState);
  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchStartOrder(salesDetail.orderId);
      modalHandler(e);
    } catch (error) {
      console.error(error);
    }
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
  const salesDetail = useRecoilValue(SalesDetailState);
  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchCompleteOrder(salesDetail.orderId);
      modalHandler(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfirmModal
      question='제작을 완료하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};
