import * as S from './ChatPage.style';
import { ReactComponent as AddIcon } from '../../../assets/ChatPage/add.svg';
import { ReactComponent as BackIcon } from '../../../assets/ChatPage/back.svg';
import { ReactComponent as MoreIcon } from '../../../assets/ChatPage/more_vert.svg';
import { ReactComponent as SendIcon } from '../../../assets/ChatPage/send.svg';
import { ChatModal } from '../../../components/ChatPage/ChatModal';
import { useEffect, useState } from 'react';
import { MessageList } from '../../../components/ChatPage/MessageList';
import { useNavigate, useParams } from 'react-router-dom';
import { getChatHistory } from '../../../api/chat';

export interface Message {
  messageId: number;
  sender: string;
  content: string;
  timestamp: string;
}

const DummyMessages: Message[] = [
  {
    messageId: 1,
    sender: '이끼끼79619',
    content: 'Hello, this is a message.',
    timestamp: '2024-11-12T10:49:25.026594',
  },
  {
    messageId: 2,
    sender: '이끼끼79619',
    content: '테스트중입니다',
    timestamp: '2024-11-12T10:50:24.570453',
  },
  {
    messageId: 3,
    sender: '나',
    content: '테스트중입니다',
    timestamp: '2024-11-12T10:50:24.570453',
  },
  {
    messageId: 4,
    sender: '나',
    content: '테스트중입니다',
    timestamp: '2024-11-12T10:50:24.570453',
  },
  {
    messageId: 5,
    sender: '이끼끼79619',
    content: '테스트중입니다',
    timestamp: '2024-11-12T10:50:24.570453',
  },
  {
    messageId: 6,
    sender: '나',
    content: '테스트중입니다',
    timestamp: '2024-11-12T10:52:24.570453',
  },
];

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const navigate = useNavigate();
  const roomId = Number(useParams().roomId);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await getChatHistory(roomId);
        setChatHistory(res);
      } catch (error) {
        console.error(error);
      }
    };

    getHistory();
    //setChatHistory(DummyMessages);
  }, []);

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
        <S.IconWrapper onClick={() => navigate(-1)}>
          <BackIcon />
        </S.IconWrapper>
        <S.Name>홍홍</S.Name>
        <S.IconWrapper onClick={e => modalHandler(e, 'open')}>
          <MoreIcon />
        </S.IconWrapper>
        {isModalOpen && <ChatModal />}
      </S.Header>
      <MessageList messages={chatHistory} />
      <S.InputBar>
        <S.TextInput />
        <S.IconWrapper>
          <SendIcon />
        </S.IconWrapper>
      </S.InputBar>
    </S.Container>
  );
};

export default ChatPage;
