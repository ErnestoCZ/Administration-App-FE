import { Popover, Portal, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Button } from './Button';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { InputController } from '@/Controller/InputController';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormDataSchema = z.object({
  Month: z.string(),
  dateFrom: z.string(),
  dateTo: z.string().optional(),
});

type FormData = z.infer<typeof FormDataSchema>;

export const NewBillingPopover: FC = () => {
  const { control, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmitHandler = async (data: FormData) => {
    console.log(data);

    reset({ dateFrom: '', dateTo: '', Month: '' });
  };
  return (
    <>
      <Popover.Root>
        <Popover.Trigger>
          <Button>Add new billing</Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content background={'transparent'}>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Stack direction={'column'}>
                  <InputController
                    control={control}
                    name="Month"
                    placeholder="Month"
                    key={'month'}
                    type="text"
                  />
                  <InputController
                    control={control}
                    name="dateFrom"
                    placeholder="Date From"
                    key={'dateFrom'}
                    type="date"
                  />
                  <InputController
                    control={control}
                    name="dateTo"
                    placeholder="Date To"
                    key={'dateTo'}
                    type="date"
                  />
                  <Button type="submit">Submit</Button>
                </Stack>
              </form>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
        <DevTool control={control} />
      </Popover.Root>
    </>
  );
};
