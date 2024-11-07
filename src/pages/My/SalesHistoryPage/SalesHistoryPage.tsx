import { useState } from 'react';
import * as S from './SalesHistoryPage.style';
import Header from '../../../components/common/Header';
import { FilterBar } from '../../../components/HistoryPage/FilterBar';
import { DatePickerBar } from '../../../components/HistoryPage/DatePickerBar';
import { History } from '../../../components/HistoryPage/History';

const filterList = ['전체', '접수', '진행중', '완료'];

const dummyHistory = {
  orderId: 1,
  date: '2024.11.08',
  state: '접수 완료',
  image: undefined,
  name: '텀블러 가방',
  options: {
    옵션1: 1,
    옵션2: 133,
    옵션3: 144,
  },
  price: 40000,
};

const SalesHistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);
  const handleFiltering = (fil: string) => {
    if (fil !== activeFilter) {
      setActiveFilter(fil);
    }
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
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
        <History {...dummyHistory} />
        <History {...dummyHistory} />
        <History {...dummyHistory} />
        <History {...dummyHistory} />
        <History {...dummyHistory} />
      </S.HistoryContainer>
    </S.Container>
  );
};

export default SalesHistoryPage;
