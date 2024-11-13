import * as S from './NotificationPage.style';
import Header from '../../../components/common/Header';
import NavBar from '../../../components/common/NavBar';
import { Noti } from '../../../components/NotificationPage/Noti';

const NotificationPage = () => {
  return (
    <>
      <S.Container>
        <Header title='알림' />
        <S.NotiContainer>
          <Noti
            isRead={false}
            type='ship'
            title={'상품 배송이 시작됐어요!'}
            subtitle={'청바지 텀블러 가방'}
            time={'5분 전'}
          />
          <Noti
            isRead={true}
            type='box'
            title={'상품을 제작하고 있어요!'}
            subtitle={'청바지 텀블러 가방'}
            time={'7일 전'}
          />

          <Noti
            isRead={true}
            type='check'
            title={'판매자가 주문을 수락했어요!'}
            subtitle={'청바지 텀블러 가방'}
            time={'24 / 09 / 26'}
          />
        </S.NotiContainer>
      </S.Container>
      <S.NavWrapper>
        <NavBar />
      </S.NavWrapper>
    </>
  );
};

export default NotificationPage;
