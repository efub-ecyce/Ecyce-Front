import { useState } from 'react';
import * as S from './FilterBar.style';

interface FilterBarProps {
  filterList: string[];
  activeFilter: string;
  handleFiltering: (fil: string) => void;
}

export const FilterBar = ({
  filterList,
  activeFilter,
  handleFiltering,
}: FilterBarProps) => {
  return (
    <S.FilterBar>
      {filterList.map((item, idx) => (
        <S.Filter
          $isActive={activeFilter === item}
          onClick={() => handleFiltering(item)}
        >
          {item}
        </S.Filter>
      ))}
    </S.FilterBar>
  );
};
