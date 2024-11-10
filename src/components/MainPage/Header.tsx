import * as S from './Header.style';
import { ReactComponent as SearchIcon } from '../../assets/MainPage/search_icon.svg';
import { ReactComponent as BellIcon } from '../../assets/MainPage/notifications.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Title>KARMA</S.Title>
      <S.Btn onClick={() => navigate('/search')}><SearchIcon /></S.Btn>
      <S.Btn onClick={() => navigate('/notification')}><BellIcon /></S.Btn>
    </S.Wrapper>
  );
};

export default Header;
