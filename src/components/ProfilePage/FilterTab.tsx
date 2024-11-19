import { useState } from 'react';
import * as S from './FilterTab.style';

const FilterTab: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'상품 리스트' | '후기'>('상품 리스트'); // 선택 가능한 탭 이름을 타입으로 지정

    const handleClick = (tabName: '상품 리스트' | '후기') => {
        setSelectedTab(tabName);
    };

    return (
        <S.Container>
            <S.Filter onClick={() => handleClick('상품 리스트')}>
                <S.FilterName
                    isSelected={selectedTab === '상품 리스트'}
                >
                    상품 리스트
                </S.FilterName>
                {selectedTab === '상품 리스트' && <S.Line />}
            </S.Filter>
            <S.Filter onClick={() => handleClick('후기')}>
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
