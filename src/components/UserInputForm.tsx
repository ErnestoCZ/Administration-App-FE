import { Button, Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { DevTool } from '@hookform/devtools'
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'

enum Status{
    active = 'active',
    inactive = 'inactive',

}

type UserInputFormData ={
    firstName: string;
    lastName: string;
    status: Status;
}

export const UserInputForm : FC = () => {
  const {control,register, handleSubmit} = useForm<UserInputFormData>();
  
  const onSubmitHandler: SubmitHandler<UserInputFormData> = (data: UserInputFormData) => {
    console.log(data);
  }

  return (
<form onSubmit={handleSubmit(onSubmitHandler)}>

  <FormControl background={'white'} p={2} flexDirection={'column'} onSubmit={handleSubmit(onSubmitHandler)}>
    <Flex direction={'column'}>

    <Flex direction={'column'}>
        <FormLabel htmlFor='firstName'>First Name</FormLabel>
        <Input type='text' id='firstName' {...register('firstName',{required:true})}/>
        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
        <Input type='text' id='lastName' {...register("lastName", {required:true})}/>
    </Flex>
    <Flex direction={'row'} m={1}>
    <Select {...register('status',{required:true})}>
        <option value='active'>Active</option>
        <option value='inactive'>Inactive</option>
    </Select>
    </Flex>
      <Flex>
        <Button type='reset' variant={'reset'} m={2} >Reset</Button>
        <Button type='submit' variant={'submit'} m={2}>Add</Button>
      </Flex>
    </Flex>
    <DevTool control={control}/>
  </FormControl>
</form>
  )
}
