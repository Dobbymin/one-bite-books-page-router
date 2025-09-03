import { useQuery } from '@tanstack/react-query';
import { searchBookAPI } from '../apis';

export const GetSearchBookQueryKey = (q: string) => ['searchBook', q];

export const useGetSearchBook = (q: string) => {
  return useQuery({
    queryKey: GetSearchBookQueryKey(q),
    queryFn: () => searchBookAPI(q),
    enabled: !!q,
  });
};
