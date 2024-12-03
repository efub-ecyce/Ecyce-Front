import * as S from './Header.style';
import { ReactComponent as CloseIcon } from '../../assets/PaymentPage/close_btn.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Btn onClick={() => navigate(-1)}>
        <CloseIcon />
      </S.Btn>
      <S.Title>결제</S.Title>
    </S.Wrapper>
  );
};

export default Header;
