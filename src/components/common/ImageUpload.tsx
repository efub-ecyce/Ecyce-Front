import * as S from './ImageUpload.style';
import React, { useEffect } from 'react';
import { ReactComponent as CameraIcon } from '../../assets/common/ImageUploadComponent/camera.svg';
import { ReactComponent as DeleteIcon } from '../../assets/common/ImageUploadComponent/delete.svg';

interface ImageUploadProps {
  imageNum: number;
  imgFile: File[];
  setImgFile: React.Dispatch<React.SetStateAction<File[]>>;
  imgPreview: string[];
  setImgPreview: React.Dispatch<React.SetStateAction<string[]>>;
} // 사진 업로드 방식 물어보기

export const ImageUpload = ({
  imageNum,
  imgFile,
  setImgFile,
  imgPreview,
  setImgPreview,
}: ImageUploadProps) => {
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.target.files;
    let previews = [...imgPreview];
    let files = [...imgFile];

    if (imageNum && previews.length >= imageNum) {
      alert('사진 업로드 개수를 초과했습니다.');
      return;
    }

    if (newImage && newImage.length > 0) {
      const newPreview = URL.createObjectURL(newImage[0]);
      previews.push(newPreview);
      files.push(newImage[0]);

      setImgPreview(previews);
      setImgFile(files);
    }

    e.target.value = '';
  };

  const handleDeleteImage = (id: number) => {
    setImgPreview(prev => prev.filter((_, idx) => idx !== id));
    setImgFile(prev => prev.filter((_, idx) => idx !== id));

    const inputElement = document.getElementById(
      'image-upload',
    ) as HTMLInputElement | null;

    if (inputElement) {
      inputElement.value = '';
    }
  };

  return (
    <S.Container>
      <input
        type='file'
        id='image-upload'
        onChange={handleImgUpload}
        style={{ display: 'none' }}
      />
      <S.UploadButton htmlFor='image-upload'>
        <CameraIcon />
        <S.ImageNum>{`${imgPreview.length}/${imageNum}`}</S.ImageNum>
      </S.UploadButton>
      {imgPreview.map((item, i) => (
        <S.ImagePreview key={i}>
          <S.DeleteIconWrapper onClick={() => handleDeleteImage(i)}>
            <DeleteIcon />
          </S.DeleteIconWrapper>
          <S.ImageBox src={item} />
        </S.ImagePreview>
      ))}
    </S.Container>
  );
};
