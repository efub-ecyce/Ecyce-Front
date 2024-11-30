import * as S from '../../pages/My/SalesDetailPage/SalesDetailPage.style';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { SalesDetailState } from '../../pages/My/SalesDetailPage/SalesDetailPage';
import { useRecoilValue } from 'recoil';
import { patchShipOrder } from '../../api/order';

export const SectionThree = () => {
  const [salesDetail, setSalesDetail] = useRecoilState(SalesDetailState);

  const [isDeliverStart, setIsDeliverStart] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [shippngInfo, setshippingInfo] = useState<{
    comp: string;
    invoice: string;
  }>({ comp: '', invoice: '' });

  const handleDeliverButton = () => {
    setIsDeliverStart(true);
    setIsEdit(true);
  };

  const handleSaveButton = async () => {
    try {
      const res = await patchShipOrder(
        salesDetail.orderId,
        shippngInfo.invoice,
      );
      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeShippingInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setshippingInfo({ ...shippngInfo, [name]: value });
  };

  return (
    <S.Section>
      <S.Title>배송 정보</S.Title>
      <S.Line />
      <S.TableRow>
        <S.TableHeader>수령인</S.TableHeader>
        <S.Data>{salesDetail.buyerName}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>연락처</S.TableHeader>
        <S.Data>{salesDetail.buyerPhone}</S.Data>
      </S.TableRow>
      <S.TableRow>
        <S.TableHeader>주소</S.TableHeader>
        <S.Data>{`${salesDetail.buyerAddress}`}</S.Data>
      </S.TableRow>
      {salesDetail.orderState == '제작완료' && !isDeliverStart && (
        <S.ShippingButton onClick={handleDeliverButton}>
          운송장 등록하기
        </S.ShippingButton>
      )}
      {(salesDetail.orderState === '배송완료' || isDeliverStart) && (
        <>
          {isEdit ? (
            <>
              <S.TableRow>
                <S.TableHeader>택배사</S.TableHeader>
                <S.TextInput
                  type='text'
                  value={shippngInfo.comp}
                  name='comp'
                  onChange={onChangeShippingInfo}
                />
                <S.SaveButton onClick={handleSaveButton}>등록하기</S.SaveButton>
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>운송장번호</S.TableHeader>
                <S.TextInput
                  type='text'
                  value={shippngInfo.invoice}
                  name='invoice'
                  onChange={onChangeShippingInfo}
                />
              </S.TableRow>
            </>
          ) : (
            <>
              <S.TableRow>
                <S.TableHeader>택배사</S.TableHeader>
                <S.Data>{}</S.Data>
                {salesDetail.orderState !== '배송완료' && (
                  <S.ChatButton onClick={() => setIsEdit(true)}>
                    수정하기
                  </S.ChatButton>
                )}
              </S.TableRow>
              <S.TableRow>
                <S.TableHeader>운송장번호</S.TableHeader>
                <S.Data>{salesDetail.invoiceNumber}</S.Data>
              </S.TableRow>
            </>
          )}
        </>
      )}
    </S.Section>
  );
};
