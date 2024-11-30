import React, { useState } from 'react';
import * as S from './Filter.style';
import { ReactComponent as FilterIcon } from '../../assets/MainPage/filter.svg';

interface FilterProps {
  onFilterChange: (filterName: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [activeBtn, setActiveBtn] = useState<string>('전체');

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
    onFilterChange(btnName);
  };

  return (
    <S.Wrapper>
      <S.FilterIcon><FilterIcon /></S.FilterIcon>
        <S.Btn
          active={activeBtn === '별점순'}
          onClick={() => handleBtnClick('별점순')}
        >별점순</S.Btn>
        <S.Btn
          active={activeBtn === '최신순'}
          onClick={() => handleBtnClick('최신순')}
        >최신순</S.Btn>
        <S.Btn
          active={activeBtn === '오래된순'}
          onClick={() => handleBtnClick('오래된순')}
        >오래된순</S.Btn>
    </S.Wrapper>
  );
};

export default Filter;
