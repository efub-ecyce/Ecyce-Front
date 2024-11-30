import * as S from './DatePickerBar.style';
import { ReactComponent as BarIcon } from '../../assets/HistoryPage/bar.svg';
import { ReactComponent as CalendarIcon } from '../../assets/HistoryPage/date.svg';
import { useState } from 'react';
import { ko } from 'date-fns/locale/ko';

interface DatePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DatePickerBar = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DatePickerProps) => {
  return (
    <S.Container>
      <S.StyledBox>
        <S.StyledDatePicker
          locale={ko}
          dateFormat='yyyy.MM.dd' // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
          maxDate={endDate || new Date()} // maxDate 이후 날짜 선택 불가
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
        />
        <S.IconWrapper>
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledBox>
      <BarIcon />
      <S.StyledBox>
        <S.StyledDatePicker
          locale={ko}
          dateFormat='yyyy.MM.dd' // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={startDate || new Date()} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
        />
        <S.IconWrapper>
          <CalendarIcon />
        </S.IconWrapper>
      </S.StyledBox>
    </S.Container>
  );
};
