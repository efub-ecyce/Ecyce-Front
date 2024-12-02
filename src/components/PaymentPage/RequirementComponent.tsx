import React from 'react';
import * as S from './RequirementComponent.style';

interface RequirementComponentProps {
    onChange: (value: string) => void;
}

const RequirementComponent: React.FC<RequirementComponentProps> = ({ onChange }) => {
    return (
        <S.Wrapper>
            <S.Title>요청 사항</S.Title>
            <S.TextArea
                placeholder='작가님에게 전달할 요청사항이 있다면 적어주세요.'
                onChange={(e) => onChange(e.target.value)}
            ></S.TextArea>
        </S.Wrapper>
    );
};

export default RequirementComponent;