import React, { useState } from 'react';
import * as S from './SearchBar.style';
import { ReactComponent as BackBtn } from '../../assets/common/back_btn.svg';

interface SearchBarProps {
    onSearch: (searchWord: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onSearch(value);
    };
    
    return (
        <S.Wrapper>
        <S.Btn><BackBtn /></S.Btn>
        <S.SearchWindow 
            type="text" 
            placeholder="검색어를 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
        />
        </S.Wrapper>
    );
};

export default SearchBar;
