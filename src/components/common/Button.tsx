import * as S from './Button.style';

interface ButtonProps {
  isActive: boolean;
  text: string;
  color: keyof typeof S.colorMap;
}

export const Button = ({ isActive, text, color }: ButtonProps) => {
  // isActive : 버튼 활성화 여부 boolean
  // text : 버튼에 들어갈 문구 string
  // color : 버튼 색 string (mint/white)

  return (
    <S.ButtonContainer isActive={isActive} disabled={!isActive} color={color}>
      <S.Text isActive={isActive} color={color}>
        {text}
      </S.Text>
    </S.ButtonContainer>
  );
};
