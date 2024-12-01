import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/PaymentPage/Header';
import ProductComponent from '../../../components/PaymentPage/ProductComponent';
import RequirementComponent from '../../../components/PaymentPage/RequirementComponent';
import DeliverInfoComponent from '../../../components/PaymentPage/DeliverInfoComponent';
import PaymentInfoComponent from '../../../components/PaymentPage/PaymentInfoComponent';
import { Button } from '../../../components/common/Button';
import * as S from './PaymentPage.style';
import { getUserInfo, UserInfo } from '../../../api/user';

// declare global {
//   interface Window {
//       IMP: any
//   }
// }

export interface RequestPayAdditionalParams {
  digital?: boolean
  vbank_due?: string
  m_redirect_url?: string
  app_scheme?: string
  biz_num?: string
}

export interface Display {
  card_quota?: number[]
}

export interface RequestPayParams extends RequestPayAdditionalParams {
  pg?: string
  pay_method: string
  escrow?: boolean
  merchant_uid: string
  name?: string
  amount: number
  custom_data?: any
  tax_free?: number
  currency?: string
  language?: string
  buyer_name?: string
  buyer_tel: string
  buyer_email?: string
  buyer_addr?: string
  buyer_postcode?: string
  notice_url?: string | string[]
  display?: Display
}

export interface RequestPayAdditionalResponse {
  apply_num?: string
  vbank_num?: string
  vbank_name?: string
  vbank_holder?: string | null
  vbank_date?: number
}

export interface RequestPayResponse extends RequestPayAdditionalResponse {
  success: boolean
  error_code: string
  error_msg: string
  imp_uid: string | null
  merchant_uid: string
  pay_method?: string
  paid_amount?: number
  status?: string
  name?: string
  pg_provider?: string
  pg_tid?: string
  buyer_name?: string
  buyer_email?: string
  buyer_tel?: string
  buyer_addr?: string
  buyer_postcode?: string
  custom_data?: any
  paid_at?: number
  receipt_url?: string
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void

export interface Iamport {
  init: (accountID: string) => void
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback,
  ) => void
}

declare global {
  interface Window {
    IMP?: Iamport
  }
}

const PaymentPage = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState(() => ({
    seller: state?.seller,
    title: state?.title,
    option: state?.option,
    price: state?.price,
    deliveryCharge: state?.deliveryCharge,
    recipient: state?.recipient,
    phoneNumber: state?.phoneNumber,
    postCode: state?.postCode,
    address: state?.address,
    addressDetail: state?.addressDetail,
  }));

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const btnTxt = `${(paymentData.price + paymentData.deliveryCharge).toLocaleString()}원 결제하기`;

  const onclickPay = ( pgValue: string, payMethod: string ) => {
    const { IMP } = window;
    if (!IMP) {
      alert("결제 모듈이 로드되지 않았습니다.");
      return;
    }

    IMP.init("iamport"); // 가맹점 식별코드

    const data = {
          pg: pgValue,
          pay_method: payMethod,
          merchant_uid: "",
          name: paymentData.title,
          amount: (paymentData.price || 0) + (paymentData.deliveryCharge || 0),
          buyer_email: "",
          buyer_name: userInfo?.name,
          buyer_tel: paymentData.phoneNumber,
          buyer_addr: (paymentData.address) + (paymentData.addressDetail),
          buyer_postcode: paymentData.postCode,
          m_redirect_url: "",
      }
      IMP.request_pay(data, (res) => {
          if (res.success) {
          console.log("결제 성공")
          } else {
              console.log("결제 실패")
          }
      });
    }

  useEffect(()=>{ 
    let script = document.querySelector(
              `script[src="https://cdn.iamport.kr/v1/iamport.js"]`
          );
          
  },[])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error('유저 정보 로드 실패', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <div>로딩 중</div>;
  }

  if (!userInfo) {
    return <div>회원 정보를 불러오지 못했습니다.</div>;
  }

  const handleEditAddress = () => {
    navigate('/payment/address', { state: { ...paymentData } });
  };

  return (
    <S.Container>
      <Header />
      <ProductComponent
        seller={paymentData.seller}
        title={paymentData.title}
        option={paymentData.option}
        price={paymentData.price}
        imageURL={""}
      />
      <RequirementComponent />
      <DeliverInfoComponent 
        recipient={userInfo.name}
        phoneNumber={userInfo.phoneNumber}
        postCode={userInfo.postalCode || ''}
        address={userInfo.address1}
        addressDetail={userInfo.address2}
        onEditAddress={handleEditAddress}
      />
      <PaymentInfoComponent 
        productPrice={paymentData.price}
        deliveryCharge={paymentData.deliveryCharge}
      />
      <S.Wrapper onClick={() => onclickPay("html5_inicis", "card")}>
        <Button isActive={true} text={btnTxt} color='mint'/>
      </S.Wrapper>
    </S.Container>
  ); 
};

export default PaymentPage;
