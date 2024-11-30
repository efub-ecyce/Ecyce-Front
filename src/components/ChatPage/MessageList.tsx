import * as S from './MessageList.style';
import { Message } from '../../pages/Chat/ChatPage/ChatPage';
import { userState } from '../../store/userInfoAtom';
import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import React from 'react';

interface MessageListProps {
  messages: Message[];
}

const formatTimeStamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

// 메시지 그룹화 함수
const groupMessages = (messages: Message[]) => {
  return messages.reduce((arr, message, index) => {
    const timeKey = formatTimeStamp(message.timestamp);
    const prevMessage = messages[index - 1];
    const isSameSender = prevMessage && prevMessage?.userId === message.userId;
    const isSameMinute =
      prevMessage && formatTimeStamp(prevMessage.timestamp) === timeKey;

    if (!isSameSender || !isSameMinute) {
      arr.push({ timeKey, userId: message.userId, messages: [message] });
    } else {
      arr[arr.length - 1].messages.push(message);
    }

    return arr;
  }, [] as { timeKey: string; userId: number; messages: Message[] }[]);
};

const renderMessage = (message: string) => {
  return message.split('\n').map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export const MessageList = ({ messages }: MessageListProps) => {
  const userInfo = useRecoilValue(userState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const groupedMessages = groupMessages(messages);
  let lastTimeDisplayed: string | null = null;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [scrollRef, messages]);

  return (
    <S.MessageContainer ref={scrollRef}>
      {groupedMessages.map((group, groupIndex) => {
        const shouldDisplayTime = group.timeKey !== lastTimeDisplayed;
        lastTimeDisplayed = group.timeKey;

        return (
          <S.GroupContainer key={groupIndex}>
            {shouldDisplayTime && <S.TimeStamp>{group.timeKey}</S.TimeStamp>}
            {group.messages.map((message, idx) => {
              const messageIndex = groupIndex * 100 + idx;
              const isCurrentUser = message.userId == userInfo.userId;

              return isCurrentUser ? (
                <S.MyChat key={messageIndex}>
                  {renderMessage(message.content)}
                </S.MyChat>
              ) : (
                <S.YourChat>{renderMessage(message.content)}</S.YourChat>
              );
            })}
          </S.GroupContainer>
        );
      })}
    </S.MessageContainer>
  );
};
