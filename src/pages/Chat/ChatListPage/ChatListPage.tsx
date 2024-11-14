import * as S from './ChatListPage.style';
import { ChatPreview } from '../../../components/ChatListPage/ChatPreview';
import NavBar from '../../../components/common/NavBar';
import { useEffect, useState } from 'react';
import {
  getChatRoomListAll,
  getChatRoomListPurchase,
  getChatRoomListSale,
  postNewChatRoom,
} from '../../../api/chat';

export interface ChatPreviewProps {
  roomId: number;
  profileImage: string | null;
  name: string;
  message: string;
  unread: number | null;
}

interface ChatRoom {
  roomId: number;
  roomName: string;
  latestMessage: string;
}

const filterList = ['전체', '판매', '구매'];

const dummyList = [
  {
    roomId: 3,
    roomName: '이끼끼19387',
    latestMessage: 'No messages yet',
  },
  {
    roomId: 4,
    roomName: '이끼끼19387',
    latestMessage: 'No messages yet',
  },
  {
    roomId: 5,
    roomName: '이끼끼79619',
    latestMessage: 'No messages yet',
  },
  {
    roomId: 6,
    roomName: '이끼끼79619',
    latestMessage: '테스트중입니다',
  },
];

const ChatListPage = () => {
  const [filter, setFilter] = useState<number>(0);
  const [chatRoomList, setChatRoomList] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const loadChatRoomHistory = async () => {
      try {
        let res = null;
        switch (filter) {
          case 0:
            res = await getChatRoomListAll();
            break;
          case 1:
            res = await getChatRoomListSale();
            break;
          case 2:
            res = await getChatRoomListPurchase();
            break;
          default:
            res = await getChatRoomListAll();
            break;
        }
        setChatRoomList(res);
      } catch (error) {
        console.error(error);
      }
    };

    loadChatRoomHistory();
    //setChatRoomList(dummyList);
  }, [filter]);

  const handleFiltering = (id: number) => {
    setFilter(id);
  };

  const makeChatRoom = async () => {
    try {
      const res = await postNewChatRoom('이끼끼 80997', true);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Container>
        <S.Header>채팅</S.Header>
        <S.TopNav>
          {filterList.map((it, index) => (
            <S.Filter
              $isActive={filter === index}
              onClick={() => handleFiltering(index)}
            >
              {it}
            </S.Filter>
          ))}
        </S.TopNav>
        <S.ChatList>
          {chatRoomList.map((chatRoom, idx) => (
            <ChatPreview
              key={idx}
              roomId={chatRoom.roomId}
              profileImage={null}
              name={chatRoom.roomName}
              message={chatRoom.latestMessage}
              unread={1}
            />
          ))}
        </S.ChatList>
        {/*<button onClick={makeChatRoom}>임시 채팅 생성 버튼</button>*/}
      </S.Container>
      <S.NavBarWrapper>
        <NavBar />
      </S.NavBarWrapper>
    </>
  );
};

export default ChatListPage;
