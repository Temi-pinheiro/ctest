/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import { updateAddress } from '../../mutations/userMutations';
import toast from 'react-hot-toast';
import { Button, SelectElement, TextInput } from '../../components';
import { useForm } from '../../hooks';
import { FormEvent } from 'react';
import { useCities, useCountries, useStates } from '../../hooks/useData';

export const EditAddress = ({
  data,
  close,
}: {
  close?: () => void;
  data: any;
}) => {
  const { formData, update } = useForm({
    initial: {
      //   email: '',
      phone_number: data?.phone_number,
      first_name: data.first_name,
      last_name: data.last_name,
      state: data?.state,
      country: data.country,
      city: data.city,
      address1: data.address1,
      address2: data.address2,
      post_code: data.post_code,
    },
  });
  const { list: Countries, data: CountryData } = useCountries();

  const getCountryCode = () => {
    const [country] = CountryData.filter(
      (co: any) => co.name == formData.country
    );
    return country.country_code;
  };
  const { list: States } = useStates(formData.country);
  const { list: Cities } = useCities(formData.country, formData.state);
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      updateAddress({ ...formData, country_code: getCountryCode() }),
    onSuccess() {
      toast.success('Address updated successfully');
      close?.();
    },
    onError(error) {
      toast.error(error?.message);
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
        <h3 className='text-lg font-medium'>Update Address</h3>
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
        <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
          <TextInput
            label='First name'
            value={formData.first_name}
            name='first_name'
            handleInputChange={update}
          />
          <TextInput
            label='Last name'
            value={formData.last_name}
            name='last_name'
            handleInputChange={update}
          />
        </div>
        <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
          <SelectElement
            placeholder='Select Country'
            label='Country / Region'
            value={formData.country}
            name='country'
            options={Countries}
            onChange={update}
          />
          <SelectElement
            placeholder='Select State'
            label='State'
            value={formData.state}
            name='state'
            options={States}
            onChange={update}
          />
        </div>
        <TextInput
          label='Address line 1'
          value={formData.address1}
          name='address1'
          placeholder='House number & street name'
          handleInputChange={update}
        />
        <TextInput
          label='Address line 2'
          value={formData.address2}
          name='address2'
          placeholder='Area, Estate, LGA'
          handleInputChange={update}
        />
        <div className='grid gap-y-5 md:grid-cols-2 gap-x-10'>
          <TextInput
            label='Postcode/ZIP'
            value={formData.post_code}
            name='post_code'
            handleInputChange={update}
          />
          <SelectElement
            placeholder='Select City'
            label='City'
            value={formData.city}
            name='city'
            options={Cities}
            onChange={update}
          />
        </div>
        <Button type='submit' label='Update' loading={isPending} />
      </form>
    </div>
  );
};
