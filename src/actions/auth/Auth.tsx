import { useMutation } from '@tanstack/react-query';
import { Button, PasswordInput, TextInput } from '../../components';
import { useForm } from '../../hooks';
import { postLogin } from '../../mutations/authMutations';
import toast from 'react-hot-toast';
import { useAuth } from '../../providers';

export const AuthModal = ({ close }: { close?: () => void }) => {
  const { setIsAuthenticated, setUser } = useAuth();
  const { formData, update } = useForm({
    initial: { email: '', password: '' },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () => postLogin({ ...formData }),
    onSettled(data) {
      console.log(data);
      localStorage.setItem('cowas_token', JSON.stringify(data.token.token));
      localStorage.setItem('cowas_user', JSON.stringify(data.user));
      setIsAuthenticated(true);
      setUser(data.user);
      close?.();
    },
    throwOnError() {
      toast.error('problem with auth');
      return false;
    },
  });
  const handleLogin = () => {
    mutate();
  };
  return (
    <div className='p-8 flex flex-col items-center gap-y-8 '>
      <header className='w-full flex items-center justify-between'>
        <h3 className='text-lg font-medium'>LOG IN</h3>
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
          name='email'
          type='email'
          value={formData.email}
          label='Email address'
          handleInputChange={update}
        />
        <PasswordInput
          name='password'
          value={formData.password}
          label='Password'
          handleInputChange={update}
        />
        <Button label='Log in' loading={isPending} effect={handleLogin} />
      </div>
    </div>
  );
};
