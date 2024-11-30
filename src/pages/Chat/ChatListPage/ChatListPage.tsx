import * as S from './ChatListPage.style';
import { ChatPreview } from '../../../components/ChatListPage/ChatPreview';
import NavBar from '../../../components/common/NavBar';
import { useEffect, useState } from 'react';
import {
  getChatRoomListAll,
  getChatRoomListPurchase,
  getChatRoomListSale,
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
  profileImage: string;
}

const filterList = ['전체', '판매', '구매'];

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
        console.log('채팅방 목록 : ', chatRoomList);
      } catch (error) {
        console.error(error);
      }
    };

    loadChatRoomHistory();
  }, [filter]);

  const handleFiltering = (id: number) => {
    setFilter(id);
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
              profileImage={chatRoom.profileImage}
              name={chatRoom.roomName}
              message={chatRoom.latestMessage}
              unread={null}
            />
          ))}
        </S.ChatList>
      </S.Container>
      <S.NavBarWrapper>
        <NavBar />
      </S.NavBarWrapper>
    </>
  );
};

export default ChatListPage;
