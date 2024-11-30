import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { ReactComponent as ArrowDown } from '../../assets/HistoryPage/arrow_key_down.svg';
import { ReactComponent as ArrowUp } from '../../assets/HistoryPage/arrow_key_up.svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PurchaseDetailState } from '../../pages/My/PurchaseDetailPage/PurchaseDetailPage';

const AlertMap: {
  [key in '제작대기' | '제작중' | '제작완료' | '배송중' | '구매확정']: string;
} = {
  제작대기: '작가님이 주문을 수락했어요!',
  제작중: '주문하신 상품 제작이 시작됐어요!',
  제작완료: '주문하신 상품이 완성됐어요!',
  배송중: '주문하신 상품 배송이 시작됐어요!',
  구매확정: '주문하신 상품 배송이 완료됐어요!',
};

const DescMap: {
  [key in '제작대기' | '제작중' | '제작완료' | '배송중' | '구매확정']: string;
} = {
  제작대기: '하단의 안내사항을 확인해주세요.',
  제작중: '조금만 기다려주시면 멋진 업사이클링 제품이 완성됩니다.',
  제작완료: '조금만 기다려주시면 멋진 업사이클링 제품이 배송됩니다.',
  배송중: '하단의 배송 정보에서 운송장 번호를 확인해 주세요.',
  구매확정: '마음에 드셨다면 후기를 작성해주세요.',
};

export const AlertSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [purchaseDetail, setPurchaseDetail] =
    useRecoilState(PurchaseDetailState);

  const currentState = purchaseDetail.orderState as keyof typeof AlertMap;
  console.log(currentState);

  return (
    <S.Section>
      <S.AlertMessage>{AlertMap[currentState]}</S.AlertMessage>
      <S.AlertDesc>{DescMap[currentState]}</S.AlertDesc>
      <S.InfoBox>
        <div>
          <S.Title>업사이클링 소재</S.Title>
          <S.Content>{purchaseDetail.materialInfo}</S.Content>
        </div>
        <div>
          <S.Title>안내 사항</S.Title>
          <S.Content>{purchaseDetail.buyerNotice}</S.Content>
        </div>
      </S.InfoBox>
      {purchaseDetail.orderState === '제작대기' && (
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
                <S.Data>{purchaseDetail.sellerPhone}</S.Data>
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>주소</S.TableHeader>
                <S.Data>{purchaseDetail.buyerAddress}</S.Data>
              </S.TableRow>
            </>
          )}
        </S.SellerInfo>
      )}
    </S.Section>
  );
};
