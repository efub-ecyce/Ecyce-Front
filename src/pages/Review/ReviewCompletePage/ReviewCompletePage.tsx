import * as S from './ReviewCompletePage.style';
import { ReactComponent as Logo } from '../../../assets/ProductRegistPage/karma-logo.svg';
import { Button } from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const ReviewCompletePage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>후기가 등록되었습니다!</S.Title>
      <S.LogoWrapper className='animate__animated animate__flipInY'>
        <Logo />
      </S.LogoWrapper>
      <S.ButtonWrapper onClick={() => navigate('/')}>
        <Button isActive={true} text='돌아가기' color='white' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ReviewCompletePage;
