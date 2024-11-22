import { useEffect, useState } from 'react';
import * as S from './SalesHistoryPage.style';
import Header from '../../../components/common/Header';
import { FilterBar } from '../../../components/HistoryPage/FilterBar';
import { DatePickerBar } from '../../../components/HistoryPage/DatePickerBar';
import { History } from '../../../components/HistoryPage/History';
import NavBar from '../../../components/common/NavBar';
import { HistoryProps } from '../PurchaseHistoryPage/PurchaseHistoryPage';
import { getSalesHistory } from '../../../api/order';

const filterList = ['전체', '접수', '진행중', '완료'];

const dummyHistory = [
  {
    orderId: 1,
    productName: '파우치 가방 리사이클링',
    productOption: '텀블러 옵션 1',
    orderCount: 1,
    orderState: '접수완료',
    createdAt: '2024-11-08T22:35:53.26533',
    totalPrice: 15000, // 배송비 + 상품가격
    productImages: {
      productImageId: 1,
      productImageUrl:
        'https://karma-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/reviewImages/example1.jpg',
    },
  },
  {
    orderId: 1,
    productName: '파우치 가방 리사이클링',
    productOption: '텀블러 옵션 1',
    orderCount: 1,
    orderState: '접수완료',
    createdAt: '2024-11-08T22:35:53.26533',
    totalPrice: 15000, // 배송비 + 상품가격
    productImages: {
      productImageId: 1,
      productImageUrl:
        'https://karma-s3-bucket.s3.ap-northeast-2.amazonaws.com/images/reviewImages/example1.jpg',
    },
  },
];

const SalesHistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);
  const handleFiltering = (fil: string) => {
    if (fil !== activeFilter) {
      setActiveFilter(fil);
    }
  };

  const [startDate, setStartDate] = useState<Date | null>(
    new Date(new Date().setMonth(new Date().getMonth() - 3)),
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [historyList, setHistoryList] = useState<HistoryProps[]>([]);
  const [filteredList, setFilteredList] = useState<HistoryProps[]>([]);

  const isDateInRange = (date: string) => {
    const createdDate = new Date(date);
    return (
      (!startDate || createdDate >= startDate) &&
      (!endDate || createdDate <= endDate)
    );
  };

  useEffect(() => {
    const getHistoryList = async () => {
      try {
        const response = await getSalesHistory();
        setHistoryList(response);

        if (historyList.length == 0) {
          setHistoryList(dummyHistory);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getHistoryList();
  }, []);

  useEffect(() => {
    const filteredList = historyList.filter(history => {
      const isInDateRange = isDateInRange(history.createdAt);
      if (isInDateRange) {
        if (activeFilter === '접수') {
          return ['접수완료'].includes(history.orderState);
        } else if (activeFilter === '진행중') {
          return ['제작대기', '제작중', '제작완료', '배송중'].includes(
            history.orderState,
          );
        } else if (activeFilter === '완료') {
          return ['구매확정', '주문취소', '주문거절'].includes(
            history.orderState,
          );
        }
        return true; // 다른 필터의 경우 모든 상품 표시
      }
    });
    setFilteredList(filteredList);
  }, [activeFilter, historyList, startDate, endDate]);

  return (
    <>
      <S.Container>
        <Header title='판매 내역' />
        <FilterBar
          filterList={filterList}
          activeFilter={activeFilter}
          handleFiltering={handleFiltering}
        />
        <DatePickerBar
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <S.HistoryContainer>
          {filteredList.map((item, idx) => (
            <History key={idx} {...item} />
          ))}
        </S.HistoryContainer>
      </S.Container>
      <S.NavWrapper>
        <NavBar />
      </S.NavWrapper>
    </>
  );
};

export default SalesHistoryPage;
