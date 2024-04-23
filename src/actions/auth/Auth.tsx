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
    throwOnError(err: { data: { message: string } }) {
      console.error(err);
      return false;
    },
  });
  const handleLogin = () => {
    mutate();
  };
  return (
    <div className='p-8 flex flex-col items-center gap-y-8 '>
      <h3 className='text-2xl font-medium'>Log in</h3>

      <div className='flex flex-col gap-y-3'>
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
