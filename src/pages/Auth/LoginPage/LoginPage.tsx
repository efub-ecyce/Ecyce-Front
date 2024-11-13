import karmaLogo from "../../../assets/common/karma_logo.svg";
import KakaoLogin from '../../../components/LoginPage/KakaoLogin';
import * as S from './LoginPage.style';

const LoginPage = () => {
  return (
    <S.Container>
      <img src={karmaLogo} alt='karma logo'/>
      <S.Title>KARMA</S.Title>
      <KakaoLogin />
    </S.Container>
  );
};

export default LoginPage;
