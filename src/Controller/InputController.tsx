import { FC } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
//TODO Add React hook form for input field

export const InputController: FC<ControllerProps> = ({
  name,
  control,
  defaultValue,
  rules,
  render,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={() => {
        <input {...field} />;
      }}
    />
  );
};
