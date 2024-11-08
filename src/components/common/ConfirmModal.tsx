import * as S from './ConfirmModal.style';

interface ModalProps {
  modalHandler: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void;
  yesFunction: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => void; //나중에 타입 수정 필요할듯..
  question: string;
  yes?: string;
  no?: string;
}

export const ConfirmModal = ({
  modalHandler,
  yesFunction,
  question,
  yes = '네',
  no = '아니오',
}: ModalProps) => {
  // modalHandler : 모달 state 관리 함수
  // yesFunction : yes 버튼을 눌렀을 때 실행시킬 함수
  // question : 질문 string
  // yes : 긍정 버튼 text (선택)
  // no : 부정 버튼 text (선택)

  const handleScreenClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // 모달 외부 클릭 시에만 modalHandler 실행
    if (event.currentTarget === event.target) {
      modalHandler(event);
    }
  };

  return (
    <S.ScreenWrapper onClick={handleScreenClick}>
      <S.ModalContainer>
        <S.Question>{question}</S.Question>
        <S.ButtonContainer>
          <S.YesButton onClick={yesFunction}>{yes}</S.YesButton>
          <S.NoButton onClick={modalHandler}>{no}</S.NoButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ScreenWrapper>
  );
};
