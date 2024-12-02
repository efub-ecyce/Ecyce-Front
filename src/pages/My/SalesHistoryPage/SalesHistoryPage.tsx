import { useEffect, useState } from 'react';
import * as S from './SalesHistoryPage.style';
import Header from '../../../components/common/Header';
import { FilterBar } from '../../../components/HistoryPage/FilterBar';
import { DatePickerBar } from '../../../components/HistoryPage/DatePickerBar';
import { History } from '../../../components/HistoryPage/History';
import NavBar from '../../../components/common/NavBar';
import { HistoryProps } from '../PurchaseHistoryPage/PurchaseHistoryPage';
import { getSalesHistory } from '../../../api/order';
import { SalesDetailState } from '../SalesDetailPage/SalesDetailPage';
import { useResetRecoilState } from 'recoil';

const filterList = ['전체', '접수', '진행중', '완료'];

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

  const resetDetail = useResetRecoilState(SalesDetailState);

  const isDateInRange = (date: string) => {
    const createdDate = new Date(date);
    const _endDate = endDate ? new Date(endDate.getTime()) : null;
    if (_endDate) {
      _endDate.setDate(_endDate.getDate() + 1);
    }
    return (
      (!startDate || createdDate >= startDate) &&
      (!_endDate || createdDate <= _endDate)
    );
  };

  useEffect(() => {
    resetDetail();

    const getHistoryList = async () => {
      try {
        const response = await getSalesHistory();
        setHistoryList(response);
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
