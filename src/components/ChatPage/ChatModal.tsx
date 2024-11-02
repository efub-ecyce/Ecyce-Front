import * as S from './ChatModal.style';

export const ChatModal = () => {
  return (
    <S.Container onClick={e => e.stopPropagation()}>
      <S.Menu>알림 끄기</S.Menu>
      <S.Menu>차단하기</S.Menu>
      <S.Menu>채팅방 나가기</S.Menu>
    </S.Container>
  );
};
