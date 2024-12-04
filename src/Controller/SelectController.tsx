import { UserSelect } from '@/components/Form/UserSelect';
import { Controller, Path, Control, FieldValues } from 'react-hook-form';

interface SelectControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: object;
}

export const SelectController = <T extends FieldValues>({
  control,
  name,
  rules,
}: SelectControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <UserSelect onBlur={onBlur} onChange={onChange} value={value} />
      )}
    />
  );
};
