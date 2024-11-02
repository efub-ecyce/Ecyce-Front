import * as S from './ChatPage.style';
import { ReactComponent as AddIcon } from '../../../assets/ChatPage/add.svg';
import { ReactComponent as BackIcon } from '../../../assets/ChatPage/back.svg';
import { ReactComponent as MoreIcon } from '../../../assets/ChatPage/more_vert.svg';
import { ReactComponent as SendIcon } from '../../../assets/ChatPage/send.svg';
import { ChatModal } from '../../../components/ChatPage/ChatModal';
import { useState } from 'react';

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (e: React.MouseEvent<HTMLDivElement>, type: string) => {
    if (type === 'open') {
      e.stopPropagation();
      setIsModalOpen(true);
    } else {
      if (isModalOpen) {
        setIsModalOpen(false);
      }
    }
  };

  return (
    <S.Container onClick={e => modalHandler(e, 'close')}>
      <S.Header>
        <S.IconWrapper>
          <BackIcon />
        </S.IconWrapper>
        <S.Name>홍홍</S.Name>
        <S.IconWrapper onClick={e => modalHandler(e, 'open')}>
          <MoreIcon />
        </S.IconWrapper>
        {isModalOpen && <ChatModal />}
      </S.Header>
      <S.MessageContainer>
        <S.MyChat>안녕하세요</S.MyChat>
        <S.YourChat>네 안녕하세요</S.YourChat>
        <S.YourChat>
          내 식탁에 누가 손을 올려 감히 내 허락이 없이는 Ain’t nobody 원하는 건
          다 내 손안에 Get it 뒤로 기대 Lean 떨어 떨어 다리 털끝 하나 건들다간
          Runnin’ like a dog, shhh Face down Don’t get caught, jeez 난 뺏긴 적이
          없지 매번 독식 그저 Teeth and claw로 Notice
        </S.YourChat>
        <S.MyChat>
          Yeah don’t you dare dare dare 선을 넘는 순간 Maybe just one time
          무너뜨려 Knock down It’s so perfect 커져 가는 이 Thrillin’ And you
          know that you’re feedin’ my appetite
        </S.MyChat>
        <S.YourChat>
          난 입을 벌렸다면 I bite that If you take a bite then I Bite Back Bite
          Back Bite Back Bite Back Bite Back
        </S.YourChat>
        <S.MyChat>
          내 것을 탐한다면 (Uh) I like that (I like that) If you take a bite
          then I Bite Back Bite Back Bite Back Bite Back Bite Back
        </S.MyChat>
      </S.MessageContainer>
      <S.InputBar>
        <S.IconWrapper>
          <AddIcon />
        </S.IconWrapper>
        <S.TextInput />
        <S.IconWrapper>
          <SendIcon />
        </S.IconWrapper>
      </S.InputBar>
    </S.Container>
  );
};

export default ChatPage;
