import ReviewComponent from '../../../components/ReviewPage/ReviewComponent';
import NavBar from '../../../components/common/NavBar';
import Header from '../../../components/ReviewPage/Header';
import Filter from '../../../components/ReviewPage/Filter';
import * as S from './ReviewPage.style';

const ReviewData = {
  profileImg: "",
  userName: "가장긴닉네임은열글자",
  score: 5.0,
  content: "수없이 연결된 실 속에서 사랑한 너와 나의 모습은 헝클어진 채로 버려지고 말았지 영원히 남을 매듭과 시간의 흐름을 기억하는 것 바라지 않았던 눈보라 속에 빗발치듯이 쏟아진 눈물 이제야 마주한 꿈의 대양 춤을 추듯이 흘러가보자 믿을 수 없을만큼 아름다운 그 바다로 함께 갈 수 있다면",
  reviewImg1: "",
  reviewImg2: "",
  reviewImg3: "",
  writtenDate: "2024.10.13",
}

const ReviewPage = () => {
  return (
    <S.Container>
      <S.Top>
        <Header title="후기" num={1886} />
        <Filter />
      </S.Top>
      <S.Contents>
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
        <ReviewComponent 
          profileImg={ReviewData.profileImg}
          userName={ReviewData.userName}
          score={ReviewData.score}
          content={ReviewData.content}
          reviewImg1={ReviewData.reviewImg1}
          reviewImg2={ReviewData.reviewImg2}
          reviewImg3={ReviewData.reviewImg3}
          writtenDate={ReviewData.writtenDate}
        />
      </S.Contents>
    <S.NavBar>
        <NavBar />
      </S.NavBar>
    </S.Container>
  );
};

export default ReviewPage;
