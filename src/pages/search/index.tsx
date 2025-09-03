import { useRouter } from 'next/router';

import { SearchbarLayout, useGetSearchBook } from '@/features';
import { BookItem } from '@/shared';

export default function SearchPage() {
  const router = useRouter();
  const q = router.query.q;

  const { data: booksData, isLoading } = useGetSearchBook(q as string);

  if (isLoading) return <div>Loading...</div>;
  if (booksData?.length === 0) return <div>검색 결과가 없습니다.</div>;

  return (
    <div>
      {booksData?.map((book) => (
        <BookItem key={`search-${book.id}`} {...book} />
      ))}
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
