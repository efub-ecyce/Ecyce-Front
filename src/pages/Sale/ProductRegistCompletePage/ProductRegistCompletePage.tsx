import * as S from './ProductRegistCompletePage.style';
import { ReactComponent as Logo } from '../../../assets/ProductRegistPage/karma-logo.svg';
import { Button } from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const ProductRegistCompletePage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>상품이 등록되었습니다!</S.Title>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.ButtonWrapper onClick={() => navigate('/')}>
        <Button isActive={true} text='돌아가기' color='white' />
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ProductRegistCompletePage;
