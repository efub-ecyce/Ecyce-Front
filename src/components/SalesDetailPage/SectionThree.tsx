import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';

export const SectionThree = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  const [isDeliverStart, setIsDeliverStart] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleDeliverButton = () => {
    setIsDeliverStart(true);
    setIsEdit(true);
  };

  const handleSaveButton = () => {
    setIsEdit(false);
    setSalesDetail(prev => ({ ...prev, state: '배송중' }));
  };

  return (
    <S.Section>
      <S.Title>배송 정보</S.Title>
      <S.Line />
      <S.TableRow>
        <S.TableHeader>수령인</S.TableHeader>
        <S.Data>{salesDetail.recipient}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{salesDetail.recipientNum}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주소</S.TableHeader>
        <S.Data>{`[${salesDetail.postcode}] ${salesDetail.address}`}</S.Data>
      </S.TableRow>
      {salesDetail.state == '제작 완료' && !isDeliverStart && (
        <S.ShippingButton onClick={handleDeliverButton}>
          운송장 등록하기
        </S.ShippingButton>
      )}
      {(salesDetail.state === '배송 완료' || isDeliverStart) && (
        <>
          {isEdit ? (
            <>
              <S.TableRow>
                <S.TableHeader>택배사</S.TableHeader>
                <S.TextInput type='text' />
                <S.SaveButton onClick={handleSaveButton}>등록하기</S.SaveButton>
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
                <S.Data>{salesDetail.delivery}</S.Data>
                {salesDetail.state !== '배송 완료' && (
                  <S.ChatButton onClick={() => setIsEdit(true)}>
                    수정하기
                  </S.ChatButton>
                )}
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>운송장번호</S.TableHeader>
                <S.Data>{salesDetail.trakingNum}</S.Data>
              </S.TableRow>
            </>
          )}
        </>
      )}
    </S.Section>
  );
};
