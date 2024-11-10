import * as S from './NoticeModal.style';

export const NumNotice = () => {
  return (
    <S.Container>
      구매자가 업사이클링 소재를 작가님께 배송보내실 때 보여드릴 번호에요.
    </S.Container>
  );
};

export const AddressNotice = () => {
  return (
    <S.Container>
      구매자가 업사이클링 소재를 작가님께 배송보내실 때 배송 보낼 주소에요.
      <br />
      <br />
      작업실을 따로 두지 않은 작가님이시라면 안심택배함이나 반값/끼리택배를
      이용하시는걸 추천드릴게요.
    </S.Container>
  );
};
