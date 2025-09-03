import { Geist, Geist_Mono } from 'next/font/google';

import { SearchbarLayout } from '@/features';
import { BookItemSection } from '@/features/book';
import { bookAPI, randomBookAPI } from '@/features/book/apis';
import { InferGetServerSidePropsType } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const getServerSideProps = async () => {
  const allBooks = await bookAPI();
  const randomBooks = await randomBookAPI();

  return {
    props: { allBooks, randomBooks },
  };
};

export default function Home({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <BookItemSection allBooks={allBooks} randomBooks={randomBooks} />
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
