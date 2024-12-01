import React, { useState, useEffect } from 'react';
import NavBar from '../../../components/common/NavBar';
import ProductComponent1 from '../../../components/common/ProductComponent1';
import Header from '../../../components/common/Header';
import * as S from './BookmarkPage.style';
import { getBookmarks } from '../../../api/bookmark';

interface Bookmark {
  productName: string;
  duration: number;
  price: number;
  productThumbnail: string;
  bookmarked: boolean;
}

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const data = await getBookmarks();
        console.log(data)
        setBookmarks(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookmarks();
  }, []);
  
  return (
    <S.Container>
      <S.Top>
        <Header title='관심목록'/>
      </S.Top>
      <S.Contents>
        {bookmarks.map((bookmark, index) => (
          <ProductComponent1
            key={index}
            productName={bookmark.productName}
            duration={bookmark.duration}
            price={bookmark.price}
            // imageURL={bookmark.productThumbnail}
            isMarked={true}
          />
        ))}
      </S.Contents>
      <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default BookmarkPage;
