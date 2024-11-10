import * as S from './ManageDrawer.style';
import { useNavigate } from 'react-router-dom';

interface DrawerProps {
  drawerHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
}

export const ManageDrawer = ({ drawerHandler, modalHandler }: DrawerProps) => {
  const navigate = useNavigate();

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 드로어 외부 클릭 시에만 drawerHandler 실행
    if (event.currentTarget === event.target) {
      drawerHandler(event);
    }
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    drawerHandler(event);
    modalHandler(event);
  };

  return (
    <S.PageWrapper onClick={handleScreenClick}>
      <S.Container>
        <S.Menu>숨기기</S.Menu>
        <S.Menu onClick={() => navigate('/post')}>수정하기</S.Menu>
        <S.Menu onClick={e => handleClickDelete(e)}>삭제하기</S.Menu>
      </S.Container>
    </S.PageWrapper>
  );
};
