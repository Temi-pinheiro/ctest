import React, { useState } from 'react';
import styles from './styles.module.css';

interface PasswordInputProps {
  label?: string;
  size?: 'small' | 'regular';
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  name: string;
  value: string | undefined;
  autofocus?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({
  label,
  placeholder,
  readOnly,
  required = false,

  name,
  value,
  autofocus = false,
  handleInputChange,
}: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={styles.input_container}>
      <label className={styles.input_label} htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        required={required}
        id={name}
        readOnly={readOnly}
        autoFocus={autofocus}
        name={name}
        type={show ? 'text' : 'password'}
        className={styles.input_field}
      />
      <button
        type='button'
        className={styles.input_icon}
        onClick={() => setShow(!show)}
      >
        {show ? <EyeIcon /> : <HideEye />}
      </button>
    </div>
  );
};

const EyeIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z'
      fill='#2C1DFF'
    />
  </svg>
);

const HideEye = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8.95245 4.2436C9.29113 4.19353 9.64051 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40569C18.0974 9.58542 18.1542 9.67528 18.1859 9.81389C18.2098 9.91799 18.2098 10.0822 18.1859 10.1863C18.1541 10.3249 18.097 10.4154 17.9827 10.5963C17.7328 10.9918 17.3518 11.5476 16.8471 12.1504M5.6036 5.59586C3.80187 6.81808 2.57871 8.51615 2.01759 9.4044C1.90357 9.58489 1.84656 9.67514 1.81478 9.81373C1.79091 9.91783 1.7909 10.082 1.81476 10.1861C1.84652 10.3247 1.90328 10.4146 2.01678 10.5943C2.95462 12.0793 5.74618 15.8333 10.0003 15.8333C11.7157 15.8333 13.1932 15.223 14.4073 14.3972M2.50035 2.5L17.5003 17.5M8.23258 8.23223C7.78017 8.68464 7.50035 9.30964 7.50035 10C7.50035 11.3807 8.61963 12.5 10.0003 12.5C10.6907 12.5 11.3157 12.2202 11.7681 11.7678'
      stroke='#667085'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
