import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';

const MainPage = () => {
  const productData = {
    title: "청바지를 활용한 텀블러 가방",
    term: 3,
    price: 20000,
    imageURL: "",
    bookmarked: false,
  };

  return (
    <div>
      <ProductComponent1
        title={productData.title}
        term={productData.term}
        price={productData.price}
        imageURL={productData.imageURL}
        bookmarkedData={productData.bookmarked}
      />
      <NavBar />
    </div>
  );
};

export default MainPage;
