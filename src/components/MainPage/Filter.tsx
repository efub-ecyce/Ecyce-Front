import React, { useState } from 'react';
import * as S from './Filter.style';
import { ReactComponent as FilterIcon } from '../../assets/MainPage/filter.svg';

interface FilterProps {
  onFilterChange: (filterName: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
    onFilterChange(btnName);
  };

  return (
    <S.Wrapper>
      <S.FilterIcon><FilterIcon /></S.FilterIcon>
      {/* 기본값 (getAllProduct 호출) */}
      <S.Btn
        active={!activeBtn}
        onClick={() => handleBtnClick(null as unknown as string)}
      >전체</S.Btn>
      <S.Btn
        active={activeBtn === '후기순'}
        onClick={() => handleBtnClick('후기순')}
      >후기순</S.Btn>
      <S.Btn
        active={activeBtn === '북마크순'}
        onClick={() => handleBtnClick('북마크순')}
      >북마크순</S.Btn>
      <S.Btn
        active={activeBtn === '최신순'}
        onClick={() => handleBtnClick('최신순')}
      >최신순</S.Btn>
    </S.Wrapper>
  );
};

export default Filter;
