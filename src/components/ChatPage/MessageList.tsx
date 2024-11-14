import * as S from './MessageList.style';
import { Message } from '../../pages/Chat/ChatPage/ChatPage';

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
    const isSameSender = prevMessage && prevMessage?.sender === message.sender;
    const isSameMinute =
      prevMessage && formatTimeStamp(prevMessage.timestamp) === timeKey;

    if (!isSameSender || !isSameMinute) {
      arr.push({ timeKey, sender: message.sender, messages: [message] });
    } else {
      arr[arr.length - 1].messages.push(message);
    }

    return arr;
  }, [] as { timeKey: string; sender: string; messages: Message[] }[]);
};

export const MessageList = ({ messages }: MessageListProps) => {
  const groupedMessages = groupMessages(messages);
  let lastTimeDisplayed: string | null = null;

  const currentUserName = '나'; //임시 값

  return (
    <S.MessageContainer>
      {groupedMessages.map((group, groupIndex) => {
        const shouldDisplayTime = group.timeKey !== lastTimeDisplayed;
        lastTimeDisplayed = group.timeKey;

        return (
          <S.GroupContainer key={groupIndex}>
            {shouldDisplayTime && <S.TimeStamp>{group.timeKey}</S.TimeStamp>}
            {group.messages.map((message, idx) => {
              const messageIndex = groupIndex * 100 + idx;
              const isCurrentUser = message.sender == currentUserName;

              return isCurrentUser ? (
                <S.MyChat key={messageIndex}>{message.content}</S.MyChat>
              ) : (
                <S.YourChat>{message.content}</S.YourChat>
              );
            })}
          </S.GroupContainer>
        );
      })}
    </S.MessageContainer>
  );
};
