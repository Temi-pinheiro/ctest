/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getCities, getCountries, getStates } from '../queries/profileQueries';

export const useStates = (country: string | undefined = 'Nigeria') => {
  const list: Array<{ value: number; label: string }> = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ['states', country],
    queryFn: async () => {
      try {
        const data = await getStates(country);
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
    ...{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });
  if (isError) {
    return { list };
  } else {
    const getSelectData = (data: Array<{ name: string }>) => {
      const list: Array<{ value: string; label: string }> = [];
      if (data.length == 0) return [];
      data?.map((item) => list.push({ value: item.name, label: item.name }));
      return list;
    };

    return {
      list: isLoading ? [] : getSelectData(data?.states),
    };
  }
};
export const useCities = (
  country: string | undefined = 'Nigeria',
  state: string | undefined = 'Lagos'
) => {
  const list: Array<{ value: number; label: string }> = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ['cities', country, state],
    queryFn: async () => {
      try {
        const data = await getCities(country, state);
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
    ...{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });
  if (isError) {
    return { list };
  } else {
    const getSelectData = (data: Array<{ name: string }>) => {
      const list: Array<{ value: string; label: string }> = [];
      if (data.length == 0) return [];
      data?.map((item) => list.push({ value: item.name, label: item.name }));
      return list;
    };

    return {
      list: isLoading ? [] : getSelectData(data?.cities),
    };
  }
};

export const useCountries = () => {
  const list: Array<{ value: string; label: string }> = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      try {
        const data = await getCountries();
        return data;
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
    ...{
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });
  if (isError) {
    return { list };
  } else {
    const getSelectData = (data: Array<{ name: string }>) => {
      const list: Array<{ value: string; label: string }> = [];
      if (data?.length == 0) return [];
      data?.map((item) => list.push({ value: item.name, label: item.name }));
      return list;
    };

    return {
      list: isLoading ? [] : getSelectData(data?.countries),
      data: data?.countries,
    };
  }
};
