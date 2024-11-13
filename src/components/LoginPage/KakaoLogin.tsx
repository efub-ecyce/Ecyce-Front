import kakaoLogin from "../../assets/LoginPage/kakao_login_medium_narrow.png";

const KakaoLogin = () => {

    const REST_API_KEY='요 부분 키 발급하면 될듯';
    const REDIRECT_URI = 'http://localhost:3000/login/oauth2/kakao';

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const handleLogin = ()=>{
        window.location.href = kakaoURL;
    }

    return (
        <img 
            src={kakaoLogin} 
            alt='kakao login button' 
            style={{ cursor: "pointer" }} 
            onClick={handleLogin}
        />
    );
};

export default KakaoLogin;
