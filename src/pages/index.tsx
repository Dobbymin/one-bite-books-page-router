import { Geist, Geist_Mono } from 'next/font/google';

import { AllBooksSection, RandomBooksSection, SearchbarLayout } from '@/features';
import { bookAPI, randomBookAPI } from '@/features/book/apis';
import { InferGetServerSidePropsType } from 'next';

import style from './index.module.scss';

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
  randomBooks,
  allBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <RandomBooksSection randomBooks={randomBooks} />
      <AllBooksSection allBooks={allBooks} />
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
