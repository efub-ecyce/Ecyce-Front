import * as S from './OptionComponent.style';
import { ReactComponent as PlusButton } from '../../assets/ProductRegistPage/add.svg';
import { ReactComponent as DeleteButton } from '../../assets/ProductRegistPage/remove_circle.svg';
import { useEffect, useState } from 'react';
import { Option } from '../../pages/Sale/ProductRegistPage/ProductRegistPage';

interface OptionProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

export const OptionComponent = ({ options, setOptions }: OptionProps) => {
  useEffect(() => {
    if (options.length < 1) {
      setOptions([{ id: Date.now(), name: undefined, price: undefined }]);
    }
    //기존 옵션 불러오는 코드 작성
  }, []);

  const handleAddOption = () => {
    const newOption = { id: Date.now(), name: undefined, price: undefined };
    setOptions([...options, newOption]);
  };

  const handleDeleteOption = (id: number) => {
    if (options.length < 2) {
      alert('최소 한 개의 옵션을 입력해주세요.');
      return;
    }
    const updatedRows = options.filter(item => item.id !== id);
    setOptions(updatedRows);
  };

  const handleChange = (
    id: number,
    field: 'name' | 'price',
    value: string | number,
  ) => {
    const updatedRows = [...options];
    const current = updatedRows.find(item => item.id === id);
    if (current) {
      if (field === 'price' && typeof value === 'string') {
        const numericValue = value.replace(/[^\d]/g, '');
        current.price = numericValue ? Number(numericValue) : undefined;
      } else if (field === 'name' && typeof value === 'string') {
        current.name = value;
      }
    }
    setOptions(updatedRows);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //숫자 외 텍스트 입력 금지
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const isNumber = /^[0-9]$/;

    if (!isNumber.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const formatPrice = (price: number | undefined) =>
    price !== undefined ? price.toLocaleString() : '';

  return (
    <S.Container>
      <S.Header>
        <S.Title>옵션 추가</S.Title>
        <S.PlusWrapper>
          <PlusButton onClick={handleAddOption} />
        </S.PlusWrapper>
      </S.Header>
      {options.map(item => (
        <S.ItemRow key={item.id}>
          <S.OptionName
            type='text'
            placeholder='옵션명'
            value={item.name}
            onChange={e => handleChange(item.id, 'name', e.target.value)}
          />
          <S.Price
            type='text'
            placeholder='추가금'
            value={formatPrice(item.price)}
            onChange={e => handleChange(item.id, 'price', e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <S.DeleteWrapper>
            <DeleteButton onClick={() => handleDeleteOption(item.id)} />
          </S.DeleteWrapper>
        </S.ItemRow>
      ))}
    </S.Container>
  );
};
