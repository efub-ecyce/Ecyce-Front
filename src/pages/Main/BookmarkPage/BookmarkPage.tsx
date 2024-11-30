import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import Header from '../../../components/common/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './BookmarkPage.style';

const BookmarkPage = () => {
  const productData = {
    title: "청바지를 활용한 텀블러 가방",
    term: 3,
    price: 20000,
    imageURL: "",
    bookmarked: true,
  };

  return (
    <S.Container>
      <S.Top>
        <Header title='관심목록'/>
      </S.Top>
      <S.Contents>
        {/* 이거 나중에 map으로 꼭 바꿔라 ;;
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
        />
        <ProductComponent1
          title={productData.title}
          term={productData.term}
          price={productData.price}
          imageURL={productData.imageURL}
          bookmarkedData={productData.bookmarked}
        /> */}
      </S.Contents>
      <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default BookmarkPage;
