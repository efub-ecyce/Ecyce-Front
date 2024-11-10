import * as S from './ProfileImage.style';
import { ReactComponent as EditIcon } from '../../assets/MyPage/edit.svg';

interface ImageUploadProps {
  id: string;
  imgFile: File | undefined;
  setImgFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  imgPreview: string | undefined;
  setImgPreview: React.Dispatch<React.SetStateAction<string | undefined>>;
} // 사진 업로드 방식 물어보기

export const ProfileImage = ({
  id,
  imgFile,
  setImgFile,
  imgPreview,
  setImgPreview,
}: ImageUploadProps) => {
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files;

    if (newImage) {
      const newPreview = URL.createObjectURL(newImage[0]);

      setImgPreview(newPreview);
      setImgFile(newImage[0]);
    }

    e.target.value = '';
  };

  return (
    <S.Container>
      <input
        type='file'
        id={`image-upload-${id}`}
        onChange={handleImgUpload}
        style={{ display: 'none' }}
      />
      <S.Image src={imgPreview} />
      <S.EditIconWrapper htmlFor={`image-upload-${id}`}>
        <EditIcon />
      </S.EditIconWrapper>
    </S.Container>
  );
};
