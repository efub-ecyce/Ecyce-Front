import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { ReactComponent as ArrowDown } from '../../assets/HistoryPage/arrow_key_down.svg';
import { ReactComponent as ArrowUp } from '../../assets/HistoryPage/arrow_key_up.svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';

const AlertMap: {
  [key in
    | '제작 대기중'
    | '제작중'
    | '제작 완료'
    | '배송중'
    | '배송 완료']: string;
} = {
  '제작 대기중': '작가님이 주문을 수락했어요!',
  제작중: '주문하신 상품 제작이 시작됐어요!',
  '제작 완료': '주문하신 상품이 완성됐어요!',
  배송중: '주문하신 상품 배송이 시작됐어요!',
  '배송 완료': '주문하신 상품 배송이 완료됐어요!',
};

const DescMap: {
  [key in
    | '제작 대기중'
    | '제작중'
    | '제작 완료'
    | '배송중'
    | '배송 완료']: string;
} = {
  '제작 대기중': '하단의 안내사항을 확인해주세요.',
  제작중: '조금만 기다려주시면 멋진 업사이클링 제품이 완성됩니다.',
  '제작 완료': '조금만 기다려주시면 멋진 업사이클링 제품이 배송됩니다.',
  배송중: '하단의 배송 정보에서 운송장 번호를 확인해 주세요.',
  '배송 완료': '마음에 드셨다면 후기를 작성해주세요.',
};

export const AlertSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  const currentState = purchaseDetail.state as keyof typeof AlertMap;
  console.log(currentState);

  return (
    <S.Section>
      <S.AlertMessage>{AlertMap[currentState]}</S.AlertMessage>
      <S.AlertDesc>{AlertMap[currentState]}</S.AlertDesc>
      <S.InfoBox>
        <div>
          <S.Title>업사이클링 소재</S.Title>
          <S.Content>안입는 청바지</S.Content>
        </div>
        <div>
          <S.Title>안내 사항</S.Title>
          <S.Content>아아아아앙</S.Content>
        </div>
      </S.InfoBox>
      {purchaseDetail.state === '제작 대기중' && (
        <S.SellerInfo>
          <S.OpenTab onClick={() => setIsOpen(prev => !prev)}>
            <S.TabName>판매자 정보 확인</S.TabName>
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </S.OpenTab>
          {isOpen && (
            <>
              <S.TableRow>
                <S.TableHeader>이름</S.TableHeader>
                <S.Data>{purchaseDetail.sellerName}</S.Data>
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>연락처</S.TableHeader>
                <S.Data>{purchaseDetail.sellerNum}</S.Data>
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>주소</S.TableHeader>
                <S.Data>{`[${purchaseDetail.postcode}] ${purchaseDetail.address}`}</S.Data>
              </S.TableRow>
            </>
          )}
        </S.SellerInfo>
      )}
    </S.Section>
  );
};
