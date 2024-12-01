import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/PaymentPage/Header';
import ProductComponent from '../../../components/PaymentPage/ProductComponent';
import RequirementComponent from '../../../components/PaymentPage/RequirementComponent';
import DeliverInfoComponent from '../../../components/PaymentPage/DeliverInfoComponent';
import PaymentInfoComponent from '../../../components/PaymentPage/PaymentInfoComponent';
import { Button } from '../../../components/common/Button';
import * as S from './PaymentPage.style';
import { getUserInfo, UserInfo } from '../../../api/user';

const PaymentPage = () => {

  const { state } = useLocation();
  const paymentData = state as {
    seller: string;
    title: string;
    option: string;
    price: number;
    deliveryCharge: number;
  };

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const btnTxt = `${(paymentData.price + paymentData.deliveryCharge).toLocaleString()}원 결제하기`;

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
        console.error('Failed to fetch user info:', error);
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
      />
      <PaymentInfoComponent 
        productPrice={paymentData.price}
        deliveryCharge={paymentData.deliveryCharge}
      />
      <Button isActive={true} text={btnTxt} color='mint'/>
    </S.Container>
  ); 
};

export default PaymentPage;
