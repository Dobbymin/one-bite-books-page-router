import { BOOKS_MOCK_DATA } from '@/features/book';
import style from './[id].module.scss';
import React from 'react';

export default function BookPage() {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = BOOKS_MOCK_DATA[0];

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
