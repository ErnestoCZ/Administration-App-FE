import { Stack } from '@/components/Stack';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ConstantsFormSchema, ConstantsFormData } from '@/types/types';

const ConstantsInputForm = () => {
  const { control, handleSubmit: constantsHandleSubmit } =
    useForm<ConstantsFormData>({ resolver: zodResolver(ConstantsFormSchema) });

  const constantsFormHandler = (data: ConstantsFormData) => {
    console.log('Constants Form executed: ' + data);
  };

  return (
    <>
      <form onSubmit={constantsHandleSubmit(constantsFormHandler)}>
        <Stack flexDirection="column">
          Form for Constants and other things corresponding to Billing
        </Stack>
      </form>
    </>
  );
};

export default ConstantsInputForm;
