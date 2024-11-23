import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './hoc/Auth';

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
      <Route
        path='/login'
        element={<Auth Page={LoginPage} option='logout' />}
      />
      <Route
        path='/signup'
        element={<Auth Page={SignupPage} option='login' />}
      />
      <Route
        path='/login/oauth2/kakao'
        element={<Auth Page={OAuthRedirectPage} option='login' />}
      />

      <Route
        path='/chatlist'
        element={<Auth Page={ChatListPage} option='login' />}
      />
      <Route
        path='/chat/:roomId'
        element={<Auth Page={ChatPage} option='login' />}
      />

      <Route
        path='/bookmark'
        element={<Auth Page={BookmarkPage} option='login' />}
      />
      <Route path='/' element={<Auth Page={MainPage} option='all' />} />
      <Route
        path='/notification'
        element={<Auth Page={NotificationPage} option='login' />}
      />
      <Route path='/search' element={<Auth Page={SearchPage} option='all' />} />

      <Route path='/my' element={<Auth Page={MyPage} option='login' />} />
      <Route
        path='/my/manage'
        element={<Auth Page={ProductManagePage} option='login' />}
      />
      <Route
        path='/my/edit'
        element={<Auth Page={ProfileEditPage} option='login' />}
      />
      <Route
        path='/profile/:userId'
        element={<Auth Page={ProfilePage} option='login' />}
      />
      <Route
        path='/purchase/:orderId'
        element={<Auth Page={PurchaseDetailPage} option='login' />}
      />
      <Route
        path='/purchase'
        element={<Auth Page={PurchaseHistoryPage} option='login' />}
      />
      <Route
        path='/sales/:orderId'
        element={<Auth Page={SalesDetailPage} option='login' />}
      />
      <Route
        path='/sales'
        element={<Auth Page={SalesHistoryPage} option='login' />}
      />

      <Route
        path='/product/:productId'
        element={<Auth Page={ProductDetailPage} option='all' />}
      />
      <Route
        path='/payment'
        element={<Auth Page={PaymentPage} option='login' />}
      />
      <Route
        path='/payment/address'
        element={<Auth Page={EditAddressPage} option='login' />}
      />
      <Route
        path='/payment/complete'
        element={<Auth Page={PaymentCompletePage} option='login' />}
      />

      <Route
        path='/review/:productId'
        element={<Auth Page={ReviewPage} option='all' />}
      />
      <Route
        path='/review/write/:orderId'
        element={<Auth Page={ReviewWritePage} option='login' />}
      />
      <Route
        path='/review/complete'
        element={<Auth Page={ReviewCompletePage} option='login' />}
      />

      <Route
        path='/post'
        element={<Auth Page={ProductRegistPage} option='login' />}
      />
      <Route
        path='/post/complete'
        element={<Auth Page={ProductRegistCompletePage} option='login' />}
      />

      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
