import { FC } from 'react';
import { StyledInput } from '../styles/Input.styled';
import { StyledLabel } from '../styles/Label.styled';
import { useFormContext } from 'react-hook-form';

interface InputFieldComponentProps {
  name: string;
  htmlId: string;
  type: string;
}

export const InputFieldComponent: FC<InputFieldComponentProps> = ({
  name,
  type,
  htmlId,
}) => {
  const { register } = useFormContext();

  return (
    <>
      <StyledLabel htmlFor={`${htmlId}`}>{name}</StyledLabel>
      <StyledInput
        type={`${type}`}
        id={`${htmlId}`}
        {...register(`${htmlId}`)}
      />
    </>
  );
};
