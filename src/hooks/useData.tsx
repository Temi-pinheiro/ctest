import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getCities, getCountries, getStates } from '../queries/profileQueries';

export const useStates = (country: string | undefined = 'Nigeria') => {
  const list: Array<{ value: number; label: string }> = [];
  const { data, isLoading, isError } = useQuery({
    queryKey: ['states', country],
    queryFn: () => getStates(country),
    ...{
      throwOnError(error) {
        toast.error(error?.message);
        return false;
      },
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
    queryFn: () => getCities(country, state),
    ...{
      throwOnError(error) {
        toast.error(error?.message);
        return false;
      },
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
    queryFn: () => getCountries(),
    ...{
      throwOnError(error) {
        toast.error(error?.message);
        return false;
      },
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
