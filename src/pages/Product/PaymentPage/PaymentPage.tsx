import Header from '../../../components/PaymentPage/Header';
import ProductComponent from '../../../components/PaymentPage/ProductComponent';
import RequirementComponent from '../../../components/PaymentPage/RequirementComponent';
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
    </S.Container>
  ); 
};

export default PaymentPage;
