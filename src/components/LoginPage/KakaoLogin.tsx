import kakaoLogin from '../../assets/LoginPage/kakao_login_medium_narrow.png';
import { KAKAO_AUTH_URL } from '../../api/oauth';

const KakaoLogin = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <img
      src={kakaoLogin}
      alt='kakao login button'
      style={{ cursor: 'pointer' }}
      onClick={handleLogin}
    />
  );
};

export default KakaoLogin;
