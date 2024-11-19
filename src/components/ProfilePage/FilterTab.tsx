import { useState } from 'react';
import * as S from './FilterTab.style';

interface FilterTabProps {
    selectedTab: '상품 리스트' | '후기';
    onTabClick: (tabName: '상품 리스트' | '후기') => void;
}

const FilterTab: React.FC<FilterTabProps> = ({ selectedTab, onTabClick }) => {

    return (
        <S.Container>
            <S.Filter onClick={() => onTabClick('상품 리스트')}>
                <S.FilterName
                    isSelected={selectedTab === '상품 리스트'}
                >
                    상품 리스트
                </S.FilterName>
                {selectedTab === '상품 리스트' && <S.Line />}
            </S.Filter>
            <S.Filter onClick={() => onTabClick('후기')}>
                <S.FilterName
                    isSelected={selectedTab === '후기'}
                >
                    후기
                </S.FilterName>
                {selectedTab === '후기' && <S.Line />}
            </S.Filter>
        </S.Container>
    );
};

export default FilterTab;
