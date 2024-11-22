import * as S from './ChatPage.style';
import { ReactComponent as BackIcon } from '../../../assets/ChatPage/back.svg';
import { ReactComponent as MoreIcon } from '../../../assets/ChatPage/more_vert.svg';
import { ReactComponent as SendIcon } from '../../../assets/ChatPage/send.svg';
import { ChatModal } from '../../../components/ChatPage/ChatModal';
import { useEffect, useState } from 'react';
import { MessageList } from '../../../components/ChatPage/MessageList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getChatHistory } from '../../../api/chat';
import { Client, IMessage } from '@stomp/stompjs';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userInfoAtom';

export interface Message {
  messageId: number;
  sender: string;
  content: string;
  timestamp: string;
}

export interface MessageRequest {
  roomId: number;
  sender: string;
  content: string;
  type: 'CHAT';
}

const ChatPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [chatToSend, setChatToSend] = useState<string>('');

  const navigate = useNavigate();
  const roomId = Number(useParams().roomId);
  const otherUserName = useLocation().state.name;

  const userInfo = useRecoilValue(userState);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await getChatHistory(roomId);
        setChatHistory(res);
        console.log('채팅 내역 : ', chatHistory);
      } catch (error) {
        console.error(error);
      }
    };

    getHistory();

    const client = new Client({
      brokerURL: 'wss://api.ecyce-karma.n-e.kr/ws',
      reconnectDelay: 5000,
      debug: str => {
        console.log(str); // 디버깅 로그 확인
      },
      onConnect: () => {
        console.log('WebSocket 연결');
        client.subscribe(`/sub/chat/room/${roomId}`, (message: IMessage) => {
          try {
            console.log(JSON.parse(message.body));
            const newChat: Message = JSON.parse(message.body);
            setChatHistory(prev => [...prev, newChat]);
          } catch (error) {
            console.error('구독 에러 : ', error);
          }
        });
      },
      onStompError: frame => {
        console.error('STOMP 오류:', frame.headers['message']);
      },
    });
    client.activate();
    setStompClient(client);
    return () => {
      client.deactivate();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (stompClient && stompClient.connected && chatToSend?.trim()) {
      const chatMessage: MessageRequest = {
        roomId: roomId,
        sender: userInfo.nickname as string,
        content: chatToSend,
        type: 'CHAT',
      };
      stompClient.publish({
        destination: `/pub/chat/message`,
        body: JSON.stringify(chatMessage),
      });
      setChatToSend('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    console.log(e.shiftKey);
    if (e.shiftKey) {
      setChatToSend(prev => prev + '\n');
    } else {
      sendMessage();
    }
  };

  const modalHandler = (e: React.MouseEvent<HTMLDivElement>, type: string) => {
    if (type === 'open') {
      e.stopPropagation();
      setIsModalOpen(true);
    } else if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <S.Container onClick={e => modalHandler(e, 'close')}>
      <S.Header>
        <S.IconWrapper onClick={() => navigate(-1)}>
          <BackIcon />
        </S.IconWrapper>
        <S.Name>{otherUserName}</S.Name>
        <S.IconWrapper onClick={e => modalHandler(e, 'open')}>
          <MoreIcon />
        </S.IconWrapper>
        {isModalOpen && <ChatModal />}
      </S.Header>
      <MessageList messages={chatHistory} />
      <S.InputBar>
        <S.TextInput
          value={chatToSend}
          onChange={e => setChatToSend(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.IconWrapper onClick={sendMessage}>
          <SendIcon />
        </S.IconWrapper>
      </S.InputBar>
    </S.Container>
  );
};

export default ChatPage;
