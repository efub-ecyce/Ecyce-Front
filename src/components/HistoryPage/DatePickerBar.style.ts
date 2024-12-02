import styled from 'styled-components';
import * as font from '../../styles/font';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // 데이트픽커 기본 CSS
import CalendarIcon from 'react-datepicker/dist/calendar_icon';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //gap: 0.5rem;

  width: 100%;
  height: 1.875rem;

  margin: 2.31rem 0;
  flex-shrink: 0;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  width: 46%;
  height: 100%;

  padding: 0 0.2rem;
  box-sizing: border-box;

  border-radius: 0.5rem;
  background: var(--white00);
  box-shadow: 0px 0px 5px 0px rgba(136, 148, 147, 0.25);

  .react-datepicker-wrapper {
    width: 100%;

    .react-datepicker__input-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledDatePicker = styled(
  DatePicker as any,
).attrs<DatePickerProps>({})`
  width: 80%;
  color: var(--gray01);
  font-size: 1rem;
  text-align: center;
  border: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
