import { useMutation } from '@tanstack/react-query';
import { useForm } from '../../hooks';
import { useAuth } from '../../providers';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';
import { updateProfile } from '../../mutations/userMutations';
import { Button, TextInput } from '../../components';

export const EditProfile = ({ close }: { close?: () => void }) => {
  const { user, setUser } = useAuth();
  const { formData, update } = useForm({
    initial: {
      firstname: user.firstname,
      lastname: user.lastname,
      phone_number: user.phone_number,
      country_code: 'NG',
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateProfile({ ...formData }),
    onSuccess() {
      localStorage.setItem(
        'cowas_user',
        JSON.stringify({ ...user, ...formData })
      );
      setUser({ ...user, ...formData });
      toast.success('Profile updated successfully');
      close?.();
    },
    onError(error) {
      toast.error(error.message);
      return false;
    },
  });
  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className='p-8 flex flex-col items-center gap-y-8 '>
      <header className='w-full flex items-center justify-between'>
        <h3 className='text-lg font-medium'>Edit Profile</h3>
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

      <form onSubmit={handleUpdate} className='flex flex-col gap-y-6 w-full'>
        <TextInput
          value={formData.firstname}
          name='firstname'
          label='First Name'
          handleInputChange={update}
        />
        <TextInput
          value={formData.lastname}
          name='lastname'
          label='Last Name'
          handleInputChange={update}
        />
        <TextInput
          value={formData.phone_number}
          name='phone_number'
          type='tel'
          label='Phone Number'
          handleInputChange={update}
        />

        <Button type='submit' label='Update' loading={isPending} />
      </form>
    </div>
  );
};
