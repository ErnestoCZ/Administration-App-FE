import { UserSelect } from '@/components/Form/UserSelect';
import { FC } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';

export const SelectController: FC<ControllerProps> = ({
  control,
  name,
  render,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <UserSelect onBlur={onBlur} onChange={onChange} value={value} />
      )}
      {...rest}
    />
  );
};
