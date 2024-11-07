import * as S from './MessageList.style';

interface Message {
  senderId: number;
  text: string;
  timestamp: string; //추후 수정 (format 함수 만들기..)
}

interface MessageListProps {
  messages: Message[];
}

// 메시지 그룹화 함수
const groupMessages = (messages: Message[]) => {
  return messages.reduce((arr, message, index) => {
    const timeKey = message.timestamp;
    const prevMessage = messages[index - 1];
    const isSameSender =
      prevMessage && prevMessage?.senderId === message.senderId;
    const isSameMinute = prevMessage && prevMessage.timestamp === timeKey;

    if (!isSameSender || !isSameMinute) {
      arr.push({ timeKey, senderId: message.senderId, messages: [message] });
    } else {
      arr[arr.length - 1].messages.push(message);
    }

    return arr;
  }, [] as { timeKey: string; senderId: number; messages: Message[] }[]);
};

export const MessageList = ({ messages }: MessageListProps) => {
  const groupedMessages = groupMessages(messages);
  let lastTimeDisplayed: string | null = null;

  const currentUserId = 0; //임시 값

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
              const isCurrentUser = message.senderId == currentUserId;

              return isCurrentUser ? (
                <S.MyChat key={messageIndex}>{message.text}</S.MyChat>
              ) : (
                <S.YourChat>{message.text}</S.YourChat>
              );
            })}
          </S.GroupContainer>
        );
      })}
    </S.MessageContainer>
  );
};
