import * as S from './ReviewContent.style'
import { ReactComponent as ToReview } from '../../assets/ProductDetailPage/arrow_key_right.svg';
import ReviewComponent from './ReviewComponent';
import { useNavigate } from 'react-router-dom';

const ReviewData = {
    profileImg: "",
    userName: "가장긴닉네임은열글자",
    content: "수없이 연결된 실 속에서 사랑한 너와 나의 모습은 헝클어진 채로 버려지고 말았지 영원히 남을 매듭과 시간의 흐름을 기억하는 것 바라지않았던",
    score: 4.5,
}

const ReviewContent = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Header onClick={() => navigate('/review/1')}>
                <S.Title>후기</S.Title>
                <ToReview/>
            </S.Header>
            <S.Contents>
                <ReviewComponent 
                    profileImg={ReviewData.profileImg}
                    userName={ReviewData.userName}
                    content={ReviewData.content}
                    score={ReviewData.score}
                />
                <ReviewComponent 
                    profileImg={ReviewData.profileImg}
                    userName={ReviewData.userName}
                    content={ReviewData.content}
                    score={ReviewData.score}
                />
                <ReviewComponent 
                    profileImg={ReviewData.profileImg}
                    userName={ReviewData.userName}
                    content={ReviewData.content}
                    score={ReviewData.score}
                />
            </S.Contents>
        </S.Container>
    );
};

export default ReviewContent;
