import { useForm } from '../../hooks';
import { openModal } from '../../providers';
import { AuthModal } from './Auth';
import { postSignup } from '../../mutations/authMutations';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button, PasswordInput, TextInput } from '../../components';

export const SignupModal = ({ close }: { close?: () => void }) => {
  const popup = openModal();
  const { formData, update } = useForm({
    initial: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phone_number: '',
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () => postSignup({ ...formData }),
    ...{
      onSuccess() {
        toast.success('Account Succesfully Created');
        popup({ component: <AuthModal /> });
        close?.();
      },
      throwOnError(err) {
        console.log(err);
        toast.error('problem with auth');
        return false;
      },
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignup = (e: any) => {
    e.preventDefault();
    e;
    mutate();
  };
  return (
    <div className='p-8 flex flex-col items-center gap-y-8 '>
      <header className='w-full flex items-center justify-between'>
        <h3 className='text-lg font-medium'>SIGN UP</h3>
        <button onClick={close}>
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

      <div className='flex flex-col gap-y-6 w-full'>
        <TextInput
          key='hbjk'
          name='firstname'
          value={formData.firstname}
          label='First Name'
          handleInputChange={update}
        />
        <TextInput
          key='ucd'
          name='lastname'
          value={formData.lastname}
          label='Last Name'
          handleInputChange={update}
        />
        <TextInput
          key='yrcdt'
          name='phone_number'
          type='tel'
          value={formData.phone_number}
          label='Phone Number'
          handleInputChange={update}
        />
        <TextInput
          key='yvvytv'
          name='email'
          type='email'
          value={formData.email}
          label='Email address'
          handleInputChange={update}
        />

        <PasswordInput
          key='wwqwzexrc'
          name='password'
          value={formData.password}
          label='Password'
          handleInputChange={update}
        />
        <Button label='Sign up' loading={isPending} effect={handleSignup} />
      </div>
    </div>
  );
};
