import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { DevTool } from '@hookform/devtools'
import { FC } from 'react';
import { useForm } from 'react-hook-form'

enum Status{
    active = 'active',
    inactive = 'inactive',

}

interface UserInputFormData{
    firstName: string;
    lastName: string;
    status: Status;
}

export const UserInputForm : FC = () => {
  const {control,register, handleSubmit} = useForm<UserInputFormData>({mode: 'onChange'});
  
  const onSubmitHandler = (data: UserInputFormData) => {
    console.log(data);
  }

  return (

<FormControl background={'white'} p={2} flexDirection={'column'} onSubmit={handleSubmit(onSubmitHandler)}>

    <Flex direction={'column'}>

    <Flex direction={'column'}>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <Input type='text' id='firstName' {...register('firstName',{required:true, })}/>
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <Input type='text' id='lastName' {...register("lastName", {required:true})}/>
    </Flex>
    <Flex direction={'row'} m={1}>
    <select {...register('status',{required:true})}>
        <option value='active'>Active</option>
        <option value='inactive'>Inactive</option>
    </select>
    </Flex>

    <Button type='submit' variant={'submit'} m={2}>Submit</Button>
    </Flex>
    <DevTool control={control}/>
</FormControl>
  )
}
