import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { bookAPI, detailBookAPI } from '@/features';

import style from './[id].module.scss';

export const getStaticPaths = async () => {
  const books = await bookAPI();

  return {
    paths: books.map((book) => ({
      params: { id: String(book.id) },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await detailBookAPI(Number(id));

  return { props: { book } };
};

export default function BookPage({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>로딩 중입니다...</div>;
  }

  if (!book) return <div>오류가 발생했습니다. 다시 시도해주세요.</div>;

  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container} style={{ backgroundImage: `url(${coverImgUrl})` }}>
        <img src={coverImgUrl} alt='cover-img' />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
