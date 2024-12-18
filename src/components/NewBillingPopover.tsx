import { Popover, Portal, Stack } from '@chakra-ui/react';
import { Button } from './Button';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { InputController } from '@/Controller/InputController';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Billing } from '@/fakeData';
import { FC } from 'react';
import { useAddBillingMutation } from '@/hooks/useAddBillingMutation';

const FormDataSchema = z.object({
  name: z.string(),
  dateFrom: z.string().date(),
  dateTo: z.string().date(),
});

type FormData = z.infer<typeof FormDataSchema>;

interface NewBillingPopoverProps {
  billings?: Billing[];
}

export const NewBillingPopover: FC<NewBillingPopoverProps> = ({ billings }) => {
  const addBillingMutation = useAddBillingMutation();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmitHandler = async (data: FormData) => {
    console.log(data);

    //TODO : Convert string to Date
    data.dateFrom = new Date(Date.parse(data.dateFrom)).toISOString();
    data.dateTo = new Date(Date.parse(data.dateTo)).toISOString();

    addBillingMutation.mutate({
      name: data.name,
      dateFrom: new Date(Date.parse(data.dateFrom)),
      dateTo: new Date(Date.parse(data.dateTo)),
    });
  };

  const findLastDate = (): string => {
    console.log(billings);
    return '2021-01-02';
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
                    name="name"
                    placeholder="name"
                    key={'month'}
                    type="text"
                  />
                  <InputController
                    control={control}
                    name="dateFrom"
                    placeholder="Date From"
                    key={'dateFrom'}
                    type="date"
                    defaulValue={findLastDate()}
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
            <DevTool control={control} />
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </>
  );
};
