import * as S from './Header.style';
import { ReactComponent as BackBtn } from '../../assets/common/back_btn.svg';

interface TitleProps {
  title: string;
}

const Header = ({title}: TitleProps) => {
  return (
    <S.Wrapper>
      <S.Btn><BackBtn /></S.Btn>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};

export default Header;
