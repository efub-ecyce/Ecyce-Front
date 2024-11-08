import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { useNavigate } from 'react-router-dom';

export const SectionTwo = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);
  const navigate = useNavigate();

  const optionEntries = salesDetail?.options
    ? Object.entries(salesDetail.options)
    : [];

  return (
    <S.Section>
      <S.Title>주문 정보</S.Title>
      <S.Line />
      <S.TableRow>
        <S.TableHeader>상품명</S.TableHeader>
        <S.Data>{salesDetail.productName}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>옵션</S.TableHeader>
        <S.OptionContainer>
          {optionEntries.map(([option, count]) => (
            <S.Data>
              {option} | {count}개
            </S.Data>
          ))}
        </S.OptionContainer>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주문자</S.TableHeader>
        <S.Data>{salesDetail.customer}</S.Data>
        <S.ChatButton onClick={() => navigate(`/chat`)}>
          채팅 보내기
        </S.ChatButton>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{salesDetail.phoneNum}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>요청 사항</S.TableHeader>
        <S.Data>{salesDetail.orderDetail}</S.Data>
      </S.TableRow>
    </S.Section>
  );
};
