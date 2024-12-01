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
      <Button isActive={true} text={btnTxt} color='mint'/>
    </S.Container>
  ); 
};

export default PaymentPage;
