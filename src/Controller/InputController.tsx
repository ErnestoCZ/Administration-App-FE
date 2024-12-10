import { Input } from '@/components/Input';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;

  control: Control<T>;

  rules?: object;

  placeholder?: string;
}

export const InputController = <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onBlur, onChange } }) => (
        <Input
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue=""
        />
      )}
    />
  );
};
