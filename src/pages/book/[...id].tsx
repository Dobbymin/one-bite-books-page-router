import { detailBookAPI } from '@/features';
import style from './[id].module.scss';
import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;

  const book = await detailBookAPI(Number(id));

  return { props: { book } };
};

export default function BookPage({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return <div>책 정보가 없습니다.</div>;

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
