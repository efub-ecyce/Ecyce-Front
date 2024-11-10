import * as S from './History.style';
import { ReactComponent as ArrowIcon } from '../../assets/HistoryPage/arrow-right.svg';
import { useNavigate } from 'react-router-dom';

interface HistoryProps {
  orderId: number;
  date: string;
  state: string;
  image: string | undefined;
  name: string;
  options: {
    [option: string]: number;
  };
  price: number;
}

export const History = (props: HistoryProps) => {
  const navigate = useNavigate();

  const optionEntries = Object.entries(props.options);

  return (
    <S.Container>
      <S.Header>
        <S.Date>{props.date}</S.Date>
        <S.State>{props.state}</S.State>
      </S.Header>
      <S.Content>
        <S.Image src={props.image} />
        <S.Info>
          <S.Name>{props.name}</S.Name>
          <S.Options>
            {optionEntries.slice(0, 2).map(([option, count]) => (
              <S.Option key={option}>
                {option} | {count}개
              </S.Option>
            ))}
          </S.Options>
          <S.Price>{props.price.toLocaleString()}원</S.Price>
        </S.Info>
      </S.Content>
      <S.IconWrapper onClick={() => navigate(`./${props.orderId}`)}>
        <ArrowIcon />
      </S.IconWrapper>
    </S.Container>
  );
};
