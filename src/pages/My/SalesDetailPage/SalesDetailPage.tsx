import { useNavigate } from 'react-router-dom';
import Header from '../../../components/common/Header';
import * as S from './SalesDetailPage.style';
import { ButtonBar } from '../../../components/SalesDetailPage/ButtonBar';
import { useState } from 'react';

const DummyDetail = {
  orderNum: 202709281234,
  orderDate: '2024.10.05.',
  state: '접수 완료',
  productName: '텀블러 가방',
  options: { S: 1, M: 2 },
  customer: '이끼끼',
  phoneNum: '010-1234-5678',
  orderDetail: '라라ㅏㄹ',
  recipient: '이끼끼',
  recipientNum: '010-1234-5678',
  address: '서울 서대문구 어쩌구 주소',
  postcode: 12345,
  delivery: '대한통운',
  trakingNum: 12345678910,
  price: 40000,
  shipping: 4000,
  totalPrice: 44000,
};

const SalesDetailPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<string>(DummyDetail.state);
  const [isDeliverStart, setIsDeliverStart] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const optionEntries = Object.entries(DummyDetail.options);

  const handleDeliverButton = () => {
    setIsDeliverStart(true);
    setIsEdit(true);
  };

  const handleSaveButton = () => {
    setIsEdit(false);
    setState('배송중');
  };

  return (
    <S.Container>
      <Header title='판매 내역' />
      <S.Section>
        <S.Row1>
          <S.Title>{DummyDetail.orderDate}</S.Title>
          <S.State>{state}</S.State>
        </S.Row1>
        <S.OrderNum>주문번호 {DummyDetail.orderNum}</S.OrderNum>
        {['접수 완료', '제작 대기중', '제작중'].includes(state) && (
          <ButtonBar state={state} setState={setState} />
        )}
      </S.Section>
      <S.Bar />
      <S.Section>
        <S.Title>주문 정보</S.Title>
        <S.Line />
        <S.TableRow>
          <S.TableHeader>상품명</S.TableHeader>
          <S.Data>{DummyDetail.productName}</S.Data>
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
          <S.Data>{DummyDetail.customer}</S.Data>
          <S.ChatButton onClick={() => navigate(`/chat`)}>
            채팅 보내기
          </S.ChatButton>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>연락처</S.TableHeader>
          <S.Data>{DummyDetail.phoneNum}</S.Data>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>요청 사항</S.TableHeader>
          <S.Data>{DummyDetail.orderDetail}</S.Data>
        </S.TableRow>
      </S.Section>
      <S.Bar />
      <S.Section>
        <S.Title>배송 정보</S.Title>
        <S.Line />
        <S.TableRow>
          <S.TableHeader>수령인</S.TableHeader>
          <S.Data>{DummyDetail.recipient}</S.Data>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>연락처</S.TableHeader>
          <S.Data>{DummyDetail.recipientNum}</S.Data>
        </S.TableRow>
        <S.TableRow>
          <S.TableHeader>주소</S.TableHeader>
          <S.Data>{`[${DummyDetail.postcode}] ${DummyDetail.address}`}</S.Data>
        </S.TableRow>
        {state == '제작 완료' && !isDeliverStart && (
          <S.ShippingButton onClick={handleDeliverButton}>
            운송장 등록하기
          </S.ShippingButton>
        )}
        {(state === '배송 완료' || isDeliverStart) && (
          <>
            {isEdit ? (
              <>
                <S.TableRow>
                  <S.TableHeader>택배사</S.TableHeader>
                  <S.TextInput type='text' />
                  <S.SaveButton onClick={handleSaveButton}>
                    등록하기
                  </S.SaveButton>
                </S.TableRow>
                <S.TableRow>
                  <S.TableHeader>운송장번호</S.TableHeader>
                  <S.TextInput type='text' />
                </S.TableRow>
              </>
            ) : (
              <>
                <S.TableRow>
                  <S.TableHeader>택배사</S.TableHeader>
                  <S.Data>{DummyDetail.delivery}</S.Data>
                  {state !== '배송 완료' && (
                    <S.ChatButton onClick={() => setIsEdit(true)}>
                      수정하기
                    </S.ChatButton>
                  )}
                </S.TableRow>
                <S.TableRow>
                  <S.TableHeader>운송장번호</S.TableHeader>
                  <S.Data>{DummyDetail.trakingNum}</S.Data>
                </S.TableRow>
              </>
            )}
          </>
        )}
      </S.Section>
      <S.Bar />
      <S.Section>
        <S.Title>결제 정보</S.Title>
        <S.Line />
        <S.Row2>
          <S.TableHeader>상품 금액</S.TableHeader>
          <S.Data>{DummyDetail.price.toLocaleString()}원</S.Data>
        </S.Row2>
        <S.Row2>
          <S.TableHeader>배송비</S.TableHeader>
          <S.Data>{DummyDetail.shipping.toLocaleString()}원</S.Data>
        </S.Row2>
        <S.Row2>
          <S.Title>총 금액</S.Title>
          <S.Title>{DummyDetail.totalPrice.toLocaleString()}원</S.Title>
        </S.Row2>
      </S.Section>
    </S.Container>
  );
};

export default SalesDetailPage;
