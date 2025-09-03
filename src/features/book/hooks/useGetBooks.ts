import { useQuery } from '@tanstack/react-query';
import { BOOK_API_PATH, bookAPI } from '../apis';

export const BooksQueryKey = [BOOK_API_PATH];

export const useGetBooks = () => {
  return useQuery({
    queryKey: BooksQueryKey,
    queryFn: () => bookAPI(),
  });
};
