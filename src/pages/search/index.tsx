import { useRouter } from 'next/router';

import { SearchbarLayout, useGetSearchBook } from '@/features';
import { BookItem } from '@/shared';
import Head from 'next/head';

export default function SearchPage() {
  const router = useRouter();
  const q = router.query.q;

  const { data: booksData, isLoading } = useGetSearchBook(q as string);

  if (isLoading) return <div>Loading...</div>;
  if (booksData?.length === 0) return <div>검색 결과가 없습니다.</div>;

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property='og:title' content='한입북스 - 검색결과' />
        <meta property='og:description' content='한입북스에 등록된 도서들을 만나보세요' />
        <meta property='og:image' content='/thumbnail.png' />
      </Head>
      <div>
        {booksData?.map((book) => (
          <BookItem key={`search-${book.id}`} {...book} />
        ))}
      </div>
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
