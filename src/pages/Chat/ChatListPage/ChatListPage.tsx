import * as S from './ChatListPage.style';
import { ChatPreview } from '../../../components/ChatListPage/ChatPreview';
import NavBar from '../../../components/common/NavBar';
import { useState } from 'react';

export interface ChatPreviewProps {
  profileImage: string | null;
  name: string;
  message: string;
  unread: number | null;
}

const filterList = ['전체', '판매', '구매'];

const ChatListPage = () => {
  const [filter, setFilter] = useState<number>(0);

  const handleFiltering = (id: number) => {
    setFilter(id);
  };

  return (
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
        <ChatPreview
          profileImage={null}
          name='박서연'
          message='나나나나나나나나나나나나난'
          unread={1}
        />
        <ChatPreview
          profileImage={null}
          name='ㅁㅁ'
          message='ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ'
          unread={2}
        />
        <ChatPreview
          profileImage={null}
          name='히히'
          message='ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ'
          unread={1}
        />
      
        <S.NavBarWrapper>
          <NavBar />
        </S.NavBarWrapper>
      </S.ChatList>
    </S.Container>
  );
};

export default ChatListPage;
