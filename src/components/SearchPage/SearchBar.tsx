import * as S from './SearchBar.style';
import { ReactComponent as BackBtn } from '../../assets/common/back_btn.svg';

const SearchBar = () => {
    return (
        <S.Wrapper>
        <S.Btn><BackBtn /></S.Btn>
        <S.SearchWindow type="text" placeholder="검색어를 입력하세요" />
        </S.Wrapper>
    );
};

export default SearchBar;
