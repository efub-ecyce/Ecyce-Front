import * as S from './Header.style';
import { ReactComponent as BackBtn } from '../../assets/common/back_btn.svg';
import { useNavigate } from 'react-router-dom';

interface TitleProps {
  title: string;
}

const Header = ({ title }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Btn onClick={() => navigate(-1)}>
        <BackBtn />
      </S.Btn>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default Header;
