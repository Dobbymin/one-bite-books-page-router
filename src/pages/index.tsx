import { Geist, Geist_Mono } from 'next/font/google';

import { AllBooksSection, RandomBooksSection, SearchbarLayout } from '@/features';
import { bookAPI, randomBookAPI } from '@/features/book/apis';
import { InferGetServerSidePropsType } from 'next';

import style from './index.module.scss';
import Head from 'next/head';

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
    <>
      <Head>
        <title>한입북스</title>
        <meta property='og:title' content='한입북스 - 검색결과' />
        <meta property='og:description' content='한입북스에 등록된 도서들을 만나보세요' />
        <meta property='og:image' content='/thumbnail.png' />
      </Head>
      <div className={style.container}>
        <RandomBooksSection randomBooks={randomBooks} />
        <AllBooksSection allBooks={allBooks} />
      </div>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
