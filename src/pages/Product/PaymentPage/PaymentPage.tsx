import Header from '../../../components/PaymentPage/Header';
import ProductComponent from '../../../components/PaymentPage/ProductComponent';
import RequirementComponent from '../../../components/PaymentPage/RequirementComponent';
import DeliverInfoComponent from '../../../components/PaymentPage/DeliverInfoComponent';
import PaymentInfoComponent from '../../../components/PaymentPage/PaymentInfoComponent';
import * as S from './PaymentPage.style';

const PaymentPage = () => {

  const productData = {
    seller: "이끼끼상점",
    title: "텀블러 가방",
    option1: 3,
    option2: 2,
    price: 40000,
    imageURL: "",
  };

  const addressData = {
    recipient: "이끼끼",
    phoneNumber: "010-1234-5678",
    postCode: 12345,
    address: "서울 서대문구 이화여대길 52",
    addressDetail: "아산공학관 109호",
  };

  const priceData = {
    productPrice: 40000,
    deliveryCharge: 4000,
  };

  return (
    <S.Container>
      <Header />
      <ProductComponent
        seller={productData.seller}
        title={productData.title}
        option1={productData.option1}
        option2={productData.option2}
        price={productData.price}
        imageURL={productData.imageURL}
      />
      <RequirementComponent />
      <DeliverInfoComponent 
        recipient={addressData.recipient}
        phoneNumber={addressData.phoneNumber}
        postCode={addressData.postCode}
        address={addressData.address}
        addressDetail={addressData.addressDetail}
      />
      <PaymentInfoComponent 
        productPrice={priceData.productPrice}
        deliveryCharge={priceData.deliveryCharge}
      />
    </S.Container>
  ); 
};

export default PaymentPage;
