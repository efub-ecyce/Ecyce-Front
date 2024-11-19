import * as S from './RequirementComponent.style';

const RequirementComponent = () => {
    return (
        <S.Wrapper>
            <S.Title>요청 사항</S.Title>
            <S.TextArea
                placeholder='작가님에게 전달할 요청사항이 있다면 적어주세요.'
            ></S.TextArea>
        </S.Wrapper>
    );
};

export default RequirementComponent;