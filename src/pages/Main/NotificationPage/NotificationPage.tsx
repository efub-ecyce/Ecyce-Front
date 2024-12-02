import * as S from './NotificationPage.style';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import { Noti } from '../../../components/NotificationPage/Noti';
import { useEffect, useRef, useState } from 'react';
import { getAlertList, notiProps } from '../../../api/notice';
import { useResetRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../My/PurchaseDetailPage/PurchaseDetailPage';
import { SalesDetailState } from '../../My/SalesDetailPage/SalesDetailPage';

const NotificationPage = () => {
  const [notiList, setNotiList] = useState<notiProps[]>([]);
  const resetPurchaseState = useResetRecoilState(PurchaseDetailState);
  const resetSalesState = useResetRecoilState(SalesDetailState);

  useEffect(() => {
    const getNotiList = async () => {
      try {
        const res = await getAlertList();
        setNotiList(res);
      } catch (error) {
        console.error(error);
      }
    };
    getNotiList();
    resetPurchaseState();
    resetSalesState();
  }, []);

  return (
    <>
      <S.Container>
        <Header title='알림' />
        <S.NotiContainer>
          {notiList.map(item => (
            <Noti {...item} />
          ))}
        </S.NotiContainer>
      </S.Container>
      <S.NavWrapper>
        <NavBar />
      </S.NavWrapper>
    </>
  );
};

export default NotificationPage;
