import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from '../../../components/ProfilePage/ProfileCard';
import FilterTab from '../../../components/ProfilePage/FilterTab';
import ProductList from '../../../components/ProfilePage/ProductList';
import ReviewList from '../../../components/ProfilePage/ReviewList';
import { getArtistInfo } from '../../../api/artist';
import * as S from './ProfilePage.style';

export interface ProfileInfo {
  userId: number;
  nickname: string;
  email: string;
  profileImage: string;
  phoneNumber: string;
  bio: string;
  averageRating: number;
}

// const ProfileData: ProfileInfo = {
//   userId: 1886,
//   nickname: "이끼끼상점",
//   email: "abc@mail.com",
//   profileImage: "",
//   phoneNumber: "01012345678",
//   bio: "대학생활의 추억을 오래도록 간직하는 방법 과잠으로 노트북 파우치를 만들어 드립니다. 9/4~10/4 한 달 간 필통 원데이 클래스 진행 중",
//   averageRating: 4.7,

// }

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const [artistInfo, setArtistInfo] = useState<ProfileInfo | null>(null);
  const [selectedTab, setSelectedTab] = useState<'상품 리스트' | '후기'>(
    '상품 리스트',
  );

  useEffect(() => {
    const fetchArtistInfo = async () => {
      if (!userId) return;
      try {
        const response = await getArtistInfo(Number(userId));
        setArtistInfo(response);
      } catch (error) {
        console.error('작가 정보 로드 실패', error);
      }
    };

    fetchArtistInfo();
  }, [userId]);

  if (!artistInfo) {
    return <div>로딩 중</div>;
  }

  return (
    <S.Container>
      <S.CardWrapper>
        <ProfileCard
          userId={artistInfo.userId}
          profileImg={artistInfo.profileImage}
          userName={artistInfo.nickname}
          score={artistInfo.averageRating}
          content={artistInfo.bio}
        />
      </S.CardWrapper>
      <FilterTab selectedTab={selectedTab} onTabClick={setSelectedTab} />{' '}
      {/* 상태 전달 */}
      {selectedTab === '상품 리스트' && <ProductList />}
      {selectedTab === '후기' && <ReviewList />}
    </S.Container>
  );
};

export default ProfilePage;
