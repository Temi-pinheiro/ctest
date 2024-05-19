import { FormEvent, useState } from 'react';
import { Button, SelectElement, TextInput } from '../components';
import { useForm } from '../hooks';
import { useBanks } from '../hooks/useData';
import { useMutation } from '@tanstack/react-query';
import { verifyAccount } from '../mutations/userMutations';
import toast from 'react-hot-toast';

export const AddAccount = () => {
  const { formData, update } = useForm({
    initial: {
      account_number: '',
      bank_code: '',
    },
  });
  const { list: Banks } = useBanks();

  const [name, setName] = useState('');
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      verifyAccount(formData.account_number, formData.bank_code),
    onSuccess(data) {
      console.log(data);
      setName(data?.data?.account?.account_name);
      toast.success('Address updated successfully');
      close?.();
    },
    onError(error) {
      toast.error(error?.message);
      return false;
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className='p-8 flex flex-col items-center gap-y-8 '>
      <header className='w-full flex items-center justify-between'>
        <h3 className='text-lg font-medium'>Add Account</h3>
        <button onClick={() => close?.()}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.0664 12L21.1523 20.0977L20.0977 21.1523L12 13.0664L3.90234 21.1523L2.84766 20.0977L10.9336 12L2.84766 3.90234L3.90234 2.84766L12 10.9336L20.0977 2.84766L21.1523 3.90234L13.0664 12Z'
              fill='black'
            />
          </svg>
        </button>
      </header>

      <form onSubmit={handleSubmit} className='flex flex-col gap-y-6 w-full'>
        <SelectElement
          placeholder='Select Bank'
          label='Bank'
          value={formData.bank_code}
          name='bank_code'
          options={Banks}
          onChange={update}
        />
        <TextInput
          label='Account Number'
          value={formData.account_number}
          name='account_number'
          handleInputChange={update}
        />
        <TextInput label='Account Name' readOnly value={name} name='name' />

        <Button type='submit' label='Verify Account' loading={isPending} />
      </form>
    </div>
  );
};
