import ProductComponent1 from '../../components/common/ProductComponent1';
import { useNavigate } from 'react-router-dom';
import * as S from './ProductList.style';

const ProductList = () => {
  const productData = {
    title: "청바지를 활용한 텀블러 가방",
    term: 3,
    price: 20000,
    imageURL: "",
    bookmarked: false,
  };

  return (
    <S.Container>
      <S.Contents>
        {/* <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        /> */}
      </S.Contents>
    </S.Container>
  );
};

export default ProductList;
