import ProfileCard from '../../../components/ProfilePage/ProfileCard';
import FilterTab from '../../../components/ProfilePage/FilterTab';

const ProfileData = {
  profileImg: "",
  userName: "이끼끼상점",
  score: 4.3,
  content: "대학생활의 추억을 오래도록 간직하는 방법 과잠으로 노트북 파우치를 만들어 드립니다. 9/4~10/4 한 달 간 필통 원데이 클래스 진행 중",
}

const ProfilePage = () => {
  return (
    <>
      <ProfileCard 
        profileImg={ProfileData.profileImg} 
        userName={ProfileData.userName}
        score={ProfileData.score}
        content={ProfileData.content}
      />
      <FilterTab />
    </>
  );
};

export default ProfilePage;
