import { ConfirmModal } from '../common/ConfirmModal';
import { SalesDetail } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';
import { useRecoilValue } from 'recoil';
import { patchCancelOrder, patchConfirmOrder } from '../../api/order';
interface ModalProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  setState: React.Dispatch<React.SetStateAction<SalesDetail>>;
}

export const CancelModal = ({ modalHandler, setState }: ModalProps) => {
  const purchaseDetail = useRecoilValue(PurchaseDetailState);

  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchCancelOrder(purchaseDetail.orderId);
      modalHandler(e);
      window.location.reload();
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

export const FinishModal = ({ modalHandler, setState }: ModalProps) => {
  const purchaseDetail = useRecoilValue(PurchaseDetailState);

  const yesFunction = async (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    try {
      const res = await patchConfirmOrder(purchaseDetail.orderId);
      modalHandler(e);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfirmModal
      question='구매를 확정하시겠습니까?'
      yesFunction={yesFunction}
      modalHandler={modalHandler}
    />
  );
};
