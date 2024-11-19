import * as S from './Header.style';
import { ReactComponent as BackBtn } from '../../assets/common/back_btn.svg';
import { useNavigate } from 'react-router-dom';

interface TitleProps {
  title: string;
  num: number;
}

const Header = ({ title, num }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Btn onClick={() => navigate(-1)}>
        <BackBtn />
      </S.Btn>
      <S.Title>{title}</S.Title>
      <S.ReviewNum>{num}개</S.ReviewNum>
    </S.Wrapper>
  );
};

export default Header;
