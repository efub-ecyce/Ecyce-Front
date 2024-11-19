import React, { useState } from 'react';
import * as S from './Filter.style';
import { ReactComponent as FilterIcon } from '../../assets/MainPage/filter.svg';

const Filter: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
  };

  return (
    <S.Wrapper>
      <S.FilterIcon><FilterIcon /></S.FilterIcon>
        <S.Btn
          active={activeBtn === '추천순'}
          onClick={() => handleBtnClick('추천순')}
        >추천순</S.Btn>
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
