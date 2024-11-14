import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/Auth/LoginPage/LoginPage';
import SignupPage from './pages/Auth/SignupPage/SignupPage';
import ChatListPage from './pages/Chat/ChatListPage/ChatListPage';
import ChatPage from './pages/Chat/ChatPage/ChatPage';
import MainPage from './pages/Main/MainPage/MainPage';
import BookmarkPage from './pages/Main/BookmarkPage/BookmarkPage';
import NotificationPage from './pages/Main/NotificationPage/NotificationPage';
import SearchPage from './pages/Main/SearchPage/SearchPage';
import MyPage from './pages/My/MyPage/MyPage';
import ProductManagePage from './pages/My/ProductManagePage/ProductManagePage';
import ProfileEditPage from './pages/My/ProfileEditPage/ProfileEditPage';
import ProfilePage from './pages/My/ProfilePage/ProfilePage';
import PurchaseDetailPage from './pages/My/PurchaseDetailPage/PurchaseDetailPage';
import PurchaseHistoryPage from './pages/My/PurchaseHistoryPage/PurchaseHistoryPage';
import SalesDetailPage from './pages/My/SalesDetailPage/SalesDetailPage';
import SalesHistoryPage from './pages/My/SalesHistoryPage/SalesHistoryPage';
import EditAddressPage from './pages/Product/EditAddressPage/EditAddressPage';
import PaymentCompletePage from './pages/Product/PaymentCompletePage/PaymentCompletePage';
import PaymentPage from './pages/Product/PaymentPage/PaymentPage';
import ProductDetailPage from './pages/Product/ProductDetailPage/ProductDetailPage';
import ReviewPage from './pages/Review/ReviewPage/ReviewPage';
import ReviewWritePage from './pages/Review/ReviewWritePage/ReviewWritePage';
import ReviewCompletePage from './pages/Review/ReviewCompletePage/ReviewCompletePage';
import ProductRegistCompletePage from './pages/Sale/ProductRegistCompletePage/ProductRegistCompletePage';
import ProductRegistPage from './pages/Sale/ProductRegistPage/ProductRegistPage';
import NotFoundPage from './pages/NotFoundPage';
import OAuthRedirectPage from './pages/Auth/OAuthRedirectPage.tsx/OAuthRedirectPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login/oauth2/kakao' element={<OAuthRedirectPage />} />

      <Route path='/chatlist' element={<ChatListPage />} />
      <Route path='/chat' element={<ChatPage />} />

      <Route path='/bookmark' element={<BookmarkPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='/notification' element={<NotificationPage />} />
      <Route path='/search' element={<SearchPage />} />

      <Route path='/my' element={<MyPage />} />
      <Route path='/my/manage' element={<ProductManagePage />} />
      <Route path='/my/edit' element={<ProfileEditPage />} />
      <Route path='/profile/:userId' element={<ProfilePage />} />
      <Route path='/purchase/:orderId' element={<PurchaseDetailPage />} />
      <Route path='/purchase' element={<PurchaseHistoryPage />} />
      <Route path='/sales/:orderId' element={<SalesDetailPage />} />
      <Route path='/sales' element={<SalesHistoryPage />} />

      <Route path='/product/:productId' element={<ProductDetailPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/payment/address' element={<EditAddressPage />} />
      <Route path='/payment/complete' element={<PaymentCompletePage />} />

      <Route path='/review/:productId' element={<ReviewPage />} />
      <Route path='/review' element={<ReviewWritePage />} />
      <Route path='/review/complete' element={<ReviewCompletePage />} />

      <Route path='/post' element={<ProductRegistPage />} />
      <Route path='/post/complete' element={<ProductRegistCompletePage />} />

      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
