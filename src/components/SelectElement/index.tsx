/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './styles.css';

interface SelectElementProps {
  label?: string;
  value?: any;
  options: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: string | number | any;
    label: string;
  }[];
  hint?: string;
  placeholder?: string;
  name: string;
  required?: boolean;

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectElement = ({
  label = ' ',
  options,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  hint,
}: SelectElementProps) => {
  return (
    <div className='select-container'>
      {label ? (
        <label className='select-label' htmlFor={name}>
          {label}
          {required && <span className='input--required'></span>}
        </label>
      ) : null}

      <div className='select-menu-container group'>
        <select
          onChange={onChange}
          className='select'
          name={name}
          id={name}
          required={required}
        >
          {placeholder && <option value=''>{placeholder}</option>}
          {options?.map((option) => (
            <option
              value={option.value}
              key={option.value}
              selected={option.value.toString() == value?.toString()}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <span className='text-sm font-medium text-grey-60'>{hint}</span>
    </div>
  );
};
