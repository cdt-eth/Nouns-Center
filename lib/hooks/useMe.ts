import useSWR from 'swr';
import fetcher from '../fetcher';

export const useMe = (address: string) => {
  const { data, mutate, error } = useSWR(`/me?address=${address}`, fetcher);

  return {
    user: data,
    isLoading: !data && error,
    isError: error,
    mutate,
  };
};
