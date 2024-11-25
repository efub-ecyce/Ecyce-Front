import * as S from './OrderModal.style';
import { ReactComponent as DrawerBtn } from '../../assets/ProductDetailPage/arrow_key_down.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

interface DrawerProps {
  drawerHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const OrderModal = ({ drawerHandler, modalHandler }: DrawerProps) => {
  const navigate = useNavigate();

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 드로어 외부 클릭 시에만 drawerHandler 실행
    if (event.currentTarget === event.target) {
      drawerHandler(event);
    }
  };

  return (
    <S.PageWrapper onClick={handleScreenClick}>
      <S.Container>
        <S.OptionDrawer>
          <S.OptionWrapper>
            <S.Option>옵션 선택</S.Option>
            <DrawerBtn />
          </S.OptionWrapper>
          <S.OptionWrapper>
            <S.Option>옵션 1</S.Option>
            <S.OptionPrice>+800원</S.OptionPrice>
          </S.OptionWrapper>
          <S.OptionWrapper>
            <S.Option>옵션 2</S.Option>
            <S.OptionPrice>+1200원</S.OptionPrice>
          </S.OptionWrapper>
          <S.OptionWrapper>
            <S.Option>옵션 3</S.Option>
            <S.OptionPrice>+1200원</S.OptionPrice>
          </S.OptionWrapper>
        </S.OptionDrawer>
        <Button isActive={true} text="구매하기" color="mint" />
      </S.Container>
    </S.PageWrapper>
  );
};
