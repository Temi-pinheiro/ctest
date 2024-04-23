/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from '../Loader';
import './styles.css';

interface ButtonProps {
  primary?: boolean;
  danger?: boolean;
  yellow?: boolean;
  mono?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  icon?: any;
  effect?: any;
  label?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
}

export const Button = ({
  primary = false,
  mono = false,
  danger = false,
  yellow = false,
  leftIcon,
  rightIcon,
  icon,
  disabled = false,
  label = 'Button',
  type = 'button',
  effect,
  loading = false,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? ' bg-[#EABEAF] text-white duration-200 transition disabled:bg-[#F1F1F4] disabled:text-[#CDD0D5]'
    : danger
    ? 'bg-white text-[#DF1C41] border border-[#DF1C41] hover:bg-[#DF1C41] hover:text-white hover:shadow-none duration-200 transition  '
    : yellow
    ? 'bg-white text-[#263238] bg-[#F9CF1C] duration-200 transition  '
    : mono
    ? 'bg-white border border-[#E2E4E9] text-[#525866] duration-200 transition   '
    : ' bg-[#EABEAF] text-white duration-200 transition disabled:bg-[#F1F1F4]/60 disabled:text-[#CDD0D5]';

  return (
    <button
      type={type}
      className={[
        'btn',
        `${mode}`,
        ` rounded-md`,
        icon ? 'flex items-center gap-x-3' : '',
      ].join(' ')}
      disabled={disabled || loading}
      onClick={effect}
      {...props}
    >
      {loading ? (
        <span className='w-full grid place-items-center relative'>
          <span className='absolute z-10'>
            <Loader bgColor='#EABEAF' />
          </span>
          <span className='opacity-0'>{label}</span>
        </span>
      ) : (
        <>
          {leftIcon && icon}

          <span className='truncate'>{label}</span>
          {rightIcon && icon}
        </>
      )}
    </button>
  );
};
